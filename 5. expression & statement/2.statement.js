// 변수 선언문
var x;

// 할당문
x = 5;

// 함수 선언문
function foo() {}

// 조건문
if (x > 1) {
    console.log(x);
}

// 반복문
for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.clear();

var x;
x = 100;

// var foo = var x;

var foo = (x = 100);
console.log(foo);
console.log(x);
