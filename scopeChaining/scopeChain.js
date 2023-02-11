//코드블럭 : {},if(){}, for(){}, function(){}
//스코프체인 === 클로저 .

// var x = 10;

// function foo() {
//     var x = 100;
//     console.log(x); //100

//     function bar() {   // 내부함수
//         x = 1000;
//         console.log(x); // 1000
//     }

//     bar();
// }
// foo();
// console.log(x); // 10

// //렉시컬 스코프 : js는 동적스코프가 아닌 렉시컬 스코프를 따른다. 함수를 어디서 호출했는지가 아니라 함수를 어디서 정의 했는지에 따라 상위 스코프를 결정한다.
// // 즉, 함수가 호출된 위치는 상위 스코프 결정에 어떠한 영향도 주지않는다.

var x = 1;

function fo() {
    var x = 10;
    ba();
}

function ba() {
    console.log(x)
}

fo(); //? 1
ba(); //? 1