console.log('utils.js is loaded');

const square = (x) => x * x;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

//export default (a, b) => a - b;
export default subtract;

export const isAdult = (age) => age > 18;
export const canDrink = (age) => age > 21;

// export {square, add, subtract as default};
export {square, add};

