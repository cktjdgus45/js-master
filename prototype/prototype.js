{
    //생성자 함수 -getArea가 2개 메모리할당. 
    // raidus 프로퍼티 값은 일반적으로 인스턴스마다 값이 다르다. 하지만 getArea 메서드는 모든 인스턴스가 동일한 내용의 메서드를 사용하기때문에 '단 하나만 생성하여'  공유해서 사용하는것이 바람직하다.
    function Circle(radius) {
        this.radius = radius;
        this.getArea = function () {
            return Math.PI * this.radius ** 2;
        }
    }

    const circle1 = new Circle(1);
    const circle2 = new Circle(2);

    console.log(circle1.getArea === circle2.getArea); //false
    console.log(circle1.getArea());
    console.log(circle2.getArea());
}
{
    //생성자 함수 - prototype을 사용하여 getArea를 공유 1개 메모리할당.  (상속 with prototype)
    //상속은 코드의 재사용이란 관점에서 매우 유용하다.
    //생성자 함수가 생성할 모든 인스턴스가 공통적으로 사용할 프로퍼티나 메서드를 프로토타입에 미리 구현해두면 모든인스턴스가 별도의 구현없이 상위(부모)객체인 프로토타입의 자산을 공유하여 사용할수 있다.
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () { return Math.PI * this.radius ** 2 };

    const circle1 = new Circle(1);
    const circle2 = new Circle(2);

    console.log(circle1.getArea === circle2.getArea); //true
    console.log(circle1.getArea());
    console.log(circle2.getArea());
}

//프로토타입 체인
//me -> Person.prototype -> Object.prototype
//자바스크립트는 객체의 프로퍼티(메서드포함) 에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면 [[Prototype]] 내부 슬롯의 참조를 따라 자신의 부모역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다.
//이를  '프로토타입 체인 ' 이라고 한다.
//'프로토타입 체인' 은 객체지향 프로그래밍 상속을 구현하는 매커니즘이다.
//프로토타입 체인은 상속과 프로퍼티 검색을 위한 매커니즘이라고 할 수 있다. 스코프체인은 식별자 검색을 위한 매커니즘이라고 할 수 있다.
{
    function Person(name) {
        this.name = name;
    }
    //프로토타입 메서드
    Person.prototype.sayHello = function () {
        return `hello my name is ${this.name} ! `;
    }

    const me = new Person('popo');
    //hasOwnProperty는 Object.prototype의 메서드이다.
    console.log(me.hasOwnProperty('name'));
}

