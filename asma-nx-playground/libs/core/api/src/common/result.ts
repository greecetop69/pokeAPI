export type Result<Ok, Err> =
  | { result: 'ok'; data: Ok }
  | { result: 'err'; data: Err };

export function match<T, U, S, F>(
  input: Result<S, F>,
  success: (s: S) => T,
  failure: (f: F) => U
) {
  switch (input.result) {
    case 'ok':
      return success(input.data);
    case 'err':
      return failure(input.data);
  }
}

/**
 * Use case for using match with Result types
 const r: Result<string, string> = {
  result: 'ok',
  data: 'hello world',
};

match(
  r,
  (v) => console.log(v),
  (f) => console.log(f)
);
 */
