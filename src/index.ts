export function sortAsc<T>({
  array,
  firstIsGreater,
}: {
  array: T[];
  firstIsGreater: (a: T, b: T) => boolean;
}): T[] {
  return [...array].sort((a, b) => (firstIsGreater(a, b) ? 1 : -1));
}

export function sortDesc<T>({
  array,
  firstIsGreater,
}: {
  array: T[];
  firstIsGreater: (a: T, b: T) => boolean;
}): T[] {
  return sortAsc({ array, firstIsGreater }).reverse();
}
