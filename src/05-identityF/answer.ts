// Write a function `identityF` that takes an argument and returns a function that returns that argument
export const identityF = <T>(id: T) => (): T => id;
