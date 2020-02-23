import log from './helpers/log';

// Write an Identity function that takes an argument and returns that argument
export const identity = (id: unknown): typeof id => id;
log(identity(3), identity.name);

// Write an add function that adds two numbers

// Write a sub function that subs two numbers

// Write a mul function that muls two numbers

// Write a function identityF that takes an argument and returns a function that returns that argument

// Write a function addF that adds from two invocations
// addF(2)(3); //=> 5

// Write a function liftF that takes a binary function and makes it callable with two invocations
// const liftedAdd = liftF(add);
// liftedAdd(3)(4) //=> 7
// liftedMul(2)(4) // => 8
