/**
 * Makes a sorted copy of the array in ascending order, using the firstIsGreater function to compare elements.
 * @param array The array to sort
 * @param firstIsGreater A function that returns true if the first argument is greater than the second
 * @param areEqual An optional function that returns true if the two arguments are equal. Necessary to make the sort stable! https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
 */
export function sortAsc<T>({
  array,
  firstIsGreater,
  areEqual,
}: {
  array: T[];
  firstIsGreater: (a: T, b: T) => boolean;
  areEqual?: (a: T, b: T) => boolean;
}): T[] {
  return [...array].sort((a, b) => (
    (areEqual && areEqual(a,b)) ? 0 
    : firstIsGreater(a, b) ? 1 : -1));
}

/**
 * Makes a sorted copy of the array in descending order, using the firstIsGreater function to compare elements.
 * @param array The array to sort
 * @param firstIsGreater A function that returns true if the first argument is greater than the second
 * @param areEqual An optional function that returns true if the two arguments are equal. Necessary to make the sort stable! https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
 */
export function sortDesc<T>({
  array,
  firstIsGreater,
  areEqual,
}: {
  array: T[];
  firstIsGreater: (a: T, b: T) => boolean;
  areEqual?: (a: T, b: T) => boolean;
}): T[] {
  return [...array].sort((a, b) => (
    (areEqual && areEqual(a,b)) ? 0 
    : firstIsGreater(a, b) ? -1 : 1));
}
