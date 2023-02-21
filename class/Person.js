//생성자함수와 프로토타입을 통해 객체지향 언어의 상송을 구현하기

var Person = (function () {
    //생성자함수
    function Person(name) {
        this.name = name;
    }
    //프로토타입 메서드
    Person.prototype.sayHi = function () {
        console.log('Hi my name is ' + this.name);
    }
    //정적 메서드
    Person.sayHellow = function () {
        console.log('hellow');
    }

    //생성자함수 반환
    return Person;
}());

var me = new Person('popo');
me.sayHi();

class Person2 {
    //생성자
    constructor(name) {
        this.name = name;
    }

    //프로토타입메서드
    sayHi() {
        console.log('hi my name is ' + this.name);
    }
    //정적 메서드

    static sayHellow() {
        console.log('hellow');
    }
}

//인스턴스 생성
const me2 = new Person2('Lee');
me2.sayHi();
Person2.sayHellow();