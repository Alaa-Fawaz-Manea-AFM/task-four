// Modules
//  استيراد و تصدير بين الملفات

// export const value = 42;
// import { value } from "./";

// 1 => let and const:

// let => modify the value of the variable يمكننا
// const => Modify the value of the variable لا يمكننا

// 2 => (Arrow Functions)
const arrowFun = (arrow) => arrow;
console.log(arrowFun("arrow"));

//
// 3 => higher order function

//  map => return [All items];
const map = [1, 2, 3].map((map) => map); // [1,2,3]
console.log(map);

//  Set => return [Delete similar items];
const set = [...new Set([1, 1, 2, 2, 3, 5])]; // => [1,2,3,5] ;
console.log(set);

//  forEach => not return [] => It is used to create a function;
const forEach = [1, 2, 3].forEach((i) => i === 1); // undefined;
console.log(forEach);

//  filter => return [ check All Items true ];
const filter = [1, 2, 3].filter((i) => i === 1); // [ 1 ]
console.log(filter);

//  some => return true OR false;
const some = [1, 2, 3].some((i) => i === 1); // true
console.log(some);

//  find => return [One Item true ];
const find = [1, 2, 3].find((i) => i === 1); // 1
console.log(find);

//  sort => return [ Rearrange the matrix alphabetically ];
const sort = [3, 2, 1].sort(); // [1,2,3]
console.log(sort);

//  reverse => return [ Reverse the order of the matrix alphabetically ];
const reverse = [1, 2, 3].reverse((a, b) => a > b); // [3,2,1]
console.log(reverse);

//  join => return 'text' => Convert an array to a string;
const join = [1, 2, 3].join(""); // 123
console.log(join);

//  includes => return true OR false => Search within the array;
const includes = [1, 2, 3].includes(1); // true
console.log(includes);

//  splice => return [ Cut elements from the array (strta, end) ];
const splice = [1, 2, 3].splice(0, 2); // [1, 2]
console.log(splice);

//  reduce => return [a single value representing the final result];
const reduce = [1, 2, 3].reduce((acc, x) => acc + x); // 6
console.log(reduce);

// 4  => Object
const Obj = { name: "Alaa", age: 21 };

// keys => return [name, age] => keys only
const keys = Object.keys(Obj); //  ['name', 'age']
console.log(keys);

// values => return [name, age] => values only
const values = Object.values(Obj); // ['Alaa', 21]
console.log(values);

// entries => return [name, age] => Get key-value pairs
const entries = Object.entries(Obj); // [['name', 'Alaa'], ['age', 21]]
console.log(Object.entries(Obj));

// 5 => Template Literals
// (Template Literals) => strind with a variable تقدر تكتب
const trainee = "Web Masters";
console.log(` Alaa fawaz trainee of ${trainee} `);

// 6 => Destructuring Assignment
// item لكل variable بتعريف Array OR Object استخراج القيم من

let [num_1, num_2] = [1, 2];
let { name, age } = { name: "Alaa", age: 21 };
console.log(num_1, num_2);
console.log(name, age);

// 7 => Replace values

let a = 1;
let b = 2;
const replace = ([a, b] = [b, a]); // [2, 1]
console.log(replace); // Output:

// 8 => Spread Operator
// بسهوله array نقدر نفك ال

let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
console.log(arr2);
