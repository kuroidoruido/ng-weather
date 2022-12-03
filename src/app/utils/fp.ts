export function isNotDefined<T>(
  x: T | undefined | null
): x is undefined | null {
  return x === null || typeof x === "undefined";
}

export function isEmpty<T extends { length: number }>(x: T): boolean {
  return x.length === 0;
}

export function isNotDefinedOrEmpty<T extends { length: number }>(
  x: T | undefined | null
): x is T {
  return isNotDefined(x) || isEmpty(x);
}
