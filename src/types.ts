/**
 * Binary function that takes two numbers, and returns a number
 * @param first - First number passed to function
 * @param second - Second number passed to function
 */
type Binary = (first: number, second: number) => number;

/**
 * Unary function that takes one number, and returns a number
 * @param only - Single number passed to function
 */
type Unary = (only: number) => number;

/**
 * Generator function that takes no parameters, and returns a number
 */
type GeneratorFunc = () => number;

/**
 * Maybe it's there, maybe it's not!
 */
type Maybe<T> = T | undefined;
