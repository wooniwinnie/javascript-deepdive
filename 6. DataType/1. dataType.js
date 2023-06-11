// number 타입
var interger = 10;
var double = 10.12;
var negative = -20;
console.log(double);
console.log(negative);

var binary = 0b01000001;
var octal = 0o101;
var hex = 0x41;
console.log(binary);
console.log(octal);
console.log(hex);
console.log(binary === octal);
console.log(octal === hex);

// string 타입
var string;
string = '문자열';
string = '문자열';
string = `문자열`;

var first = 'Jiwoon';
var last = 'Jeon';

console.log(`My name is ` + first + ' ' + last + '.');
console.log(`My name is ${first} ${last}.`);
console.log(`1+ 2 = ${1 + 2}`);
console.log('1 + 2 = ${1 + 2}');

// boolean 타입
var foo = true;
console.log(foo);

foo = false;
console.log(foo);

// undefined 타입
var foo;
console.log(foo);

// null 타입
var foo = 'jeon';
foo = null;
console.log(foo);

// Symbol 타입
var key = Symbol('key');
console.log(typeof key);

var obj = {};
obj[key] = 'value';
console.log(obj[key]);

// object 타입
