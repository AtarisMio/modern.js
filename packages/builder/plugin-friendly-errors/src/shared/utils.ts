import assert from 'assert';
import { WebpackError } from 'webpack';
import StackTracey from 'stacktracey';
import _ from '@modern-js/utils/lodash';
import { baseFormatter } from '../formatter/base';
import { ErrorFormatter, ErrorTransformer, ParsedError } from './types';

const _traceSerializeCache = new WeakMap<WebpackError, ParsedError>();

export const parseError = (error: WebpackError) => {
  if (_traceSerializeCache.has(error)) {
    return _traceSerializeCache.get(error)!;
  }

  const parsed = cloneErrorObject(error) as ParsedError;
  parsed.trace = flattenErrorTrace(error);
  parsed.raw = error;

  _traceSerializeCache.set(error, parsed);

  return parsed;
};

export const cloneObject = <T>(error: T): T => {
  const cloned = Object.create(Object.getPrototypeOf(error));
  return _.merge(cloned, error);
};

export const cloneErrorObject = <T extends Error>(error: T): T => {
  const cloned = cloneObject(error);
  for (const k of Object.getOwnPropertyNames(error) as (keyof T)[]) {
    cloned[k] || (cloned[k] = error[k]);
  }
  return cloned;
};

export const transformError = (
  transformers: ErrorTransformer[],
  error: ParsedError,
): WebpackError => {
  return transformers.reduce(
    (error, transformer) => transformer(error) || error,
    error,
  );
};

export const formatError = (
  formatters: ErrorFormatter[] = [baseFormatter],
  error: ParsedError,
) => {
  let formatted: string | void;
  for (const formatter of formatters) {
    formatted = formatter(error);
    if (formatted) {
      break;
    }
  }
  assert(typeof formatted === 'string', 'No error formatter found');
  return formatted;
};

export interface ErrorWithCause extends Error {
  cause?: unknown;
  error?: unknown;
}

export const getErrorCauses = (error: ErrorWithCause) => {
  const causes = [];
  let e: unknown = error;
  while (e instanceof Error) {
    causes.push(e);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error `cause` is not part of the Error interface
    e = e.cause || e.error;
  }
  return causes;
};

export const compressCauses = (
  causes: ErrorWithCause[],
): StackTracey.Entry[] => {
  const parsedTraces = causes.map(e => new StackTracey(e).items);
  const compressed = _(parsedTraces).flatten().uniqBy('beforeParse').value();
  return compressed;
};

export const flattenErrorTrace = (error: ErrorWithCause) => {
  const causes = getErrorCauses(error);
  const compressed = compressCauses(causes);
  return compressed;
};
