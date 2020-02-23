// Write a function `identity` that takes an argument and returns that argument
export const identity = (id: unknown): typeof id => id;

// Write a function `add` that adds two numbers
export const add = (a: number, b: number): number => a + b;

// Write a function `sub` that subs two numbers
export const sub = (a: number, b: number): number => a - b;

// Write a function `mul` that muls two numbers
export const mul = (a: number, b: number): number => a * b;

// Write a function `identityF` that takes an argument and returns a function that returns that argument
export const identityF = (id: unknown) => (): unknown => id;

// Write a function `liftF` that takes a binary function and makes it callable with two invocations
// const liftAdd = liftF(add);
// liftAdd(3)(4); //=> 7
// liftMul(2)(4); // => 8

// Write a function `addF` that adds from two invocations
// addF(2)(3); //=> 5

// Write a function `curry` that takes a binary function and an arguement, and returns a function that can take a second argument.
// const add3 = curry(add, 3);
// add3(4); //=> 7
// curry(mul, 5)(6) //=> 30

// Without writing any new functions, demonstrate three ways of implementing a function increment
// const increment = _ _ _;
// increment(5); //=> 6
// increment(6); //=> 7

// Write a function `twice` that takes a binary function and returns a unary function that passes its argument to the binary function twice
// const double = twice(add);
// double(11); //=> 22
// const square = twice(mul);
// square(11); //=> 121

// Write a function `reverse` that reverses the arguments of a binary function
// const bus = reverse(sub);
// bus(3, 2); //=> -1

// Write a function `composeU` that takes two unary functions and returns a function that calls them both
// composeU(double, square)(5) //=> 100

// Write a function `composeB` that takes two binary functions and returns a function that calls them both
// composeB(add, mul)(2, 3, 7) //=> 35

// Write a function `limit` that allows a binary function to be called a limited amount of times
// const addLimited = limit(add, 1);
// addLimited(3, 4); //=> 7
// addLimited(3, 5); //=> undefined

// Write a function `from` that produces a generator that will produce a series of values
// const index = from(0);
// index(); //=> 0
// index(); //=> 1
// index(); //=> 2

// Write a function `to` that takes a generator and an end value, and returns a generator that will return numbers up to that limit
// const index = to(from(1), 3);
// index(); //=> 1
// index(); //=> 2
// index(); // undefined

// Write a function `fromTo` that produces a generator that will produce values in a range
// const index = fromTo(0, 3);
// index(); //=> 0
// index(); //=> 1
// index(); //=> 2
// index(); // undefined

// Write a function `element` that takes an array and a generator and returns a generator that will produce elements from the array
// const el = element(['a', 'b', 'c', 'd'], fromTo(1, 3));
// el(); //=> 'b'
// el(); //=> 'c'
// el(); // undefined

// Modify the `element` function so that the generator argument is optional
// If the generator is not provided, then each of the elements of the array will be produced
// const el = element(['a', 'b', 'c', 'd']);
// el(); //=> 'a'
// el(); //=> 'b'
// el(); //=> 'c'
// el(); //=> 'd'
// el(); // undefined
