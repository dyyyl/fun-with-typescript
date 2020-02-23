// const add = (a, b) => a + b;

// const sub = (a, b) => a - b;

// const mul = (a, b) => a * b;

// const identityF = (id) => () => id;

// const addF = (a) => (b) => add(a, b);

// const liftF = (func) => (a) => (b) => func(a, b);

// const curry = (func, a) => (b) => func(a, b);
// const curryL = (func, a) => liftF(func)(a);

// const inc0 = addF(1);

// const inc1 = liftF(add)(1);

// const inc2 = curryL(add, 1);

// const twice = (func) => (a) => func(a, a);

// const reverse = (func) => (...args) => func(...args.reverse());

// const composeU = (f, g) => (x) => g(f(x));

// const composeB = (f, g) => (a, b, c) => g(f(a, b), c);

// const limit = (func, count) => {
//   return (a, b) => {
//     if (count >= 1) {
//       count -= 1;
//       return func(a, b);
//     }
//     return undefined;
//   };
// };

// const addOnce = limit(add, 1);
// log(addOnce(3, 2), addOnce);
// log(addOnce(3, 2), addOnce);
// const addTwice = limit(add, 2);
// log(addTwice(3, 2), addTwice);
// log(addTwice(3, 2), addTwice);
// log(addTwice(3, 2), addTwice);

// const from = (start) => () => {
//   const next = start;
//   start += 1;
//   return next;
// };

// const index = from(0);
// log(index(), index);
// log(index(), index);
// log(index(), index);

// const to = (generator, end) => () => {
//   const value = generator();
//   if (value < end) return value;
//   return undefined;
// };
// const index = to(from(1), 3);
// log(index(), index);
// log(index(), index);
// log(index(), index);
