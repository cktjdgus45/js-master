{
    //함수 : 특정한 일을 수행하는 코드의 집합. (유지보수성 , 재사용가능성 , 높은 가독성)
    //입력(input) -> 처리 -> 출력(output)
    //데이터,변수 -> 연산자 -> 출력

    //함수단위로 작은단위의 일들로 묶는다. 한가지 일만 하도록.
    //매개변수와 수행하는 일을 잘 나타낼수 있는 이름을 지어줘야한다.
    //함수도 객체이기떄문에 메모리주소가 heap 에 저장된다.

    //불변성 *** Immutability
    //함수 내부에서 외부로부터주어진 인자의 값을 변경하는 것은 절대 절대 안된다.
    //상태변경이 필요한 경우에는 , 새로운 상태를 (오브젝트  , 값) 을 만들어서 반환해야함.
    //원시값 - 값에 의한 복사
    //객체값 - 참조에 의한 복사 (메모리주소) , 동일한 obj을 포인터 하게됨.
    function display(num) {
        num = 1  // 절대절대 하지마. 
        console.log(num);
    }

    const value = 1000;
    display(value);

    function displayObj(obj) { //obj만 보여준다해놓고 내부에서 변경하는 행동 절대 절대 안된다..
        obj.name = 'popo'; //외부로 부터 주어진 인자 , 특히 . 오브젝트를 내부에서 변경하는짓을 절대하지말아야한다.
        console.log(obj);
    }

    const cha = { name: 'cha' };
    displayObj(cha);
    function changeName(obj) {  //이름부터 변경하는 느낌을 주도록.하기.
        return { ...obj, name: 'popo' } // 반환할떄는 새로운 오브젝트 만들기.
    }

    //화살표 함수
    //화살표함수는 기존이 함수보다  표현만 간략한 것이 아니라 내부 동작 또한 간략화되어 있다.
    //화살표 함수는 생성자 함수로 사용할 수 없으며, 기존함수와  this바인딩 방식이 다르고, prototype 프로퍼티가 없으며 , argument객체를 생성하지 않는다. === 가볍다.
    const add = (x, y) => x + y;
    console.log(add(1, 3)); //4

    //콜백함수 ,함수의하이라이트, 프로그래밍의 꽃, 내가 나중에 호출해줄게 느낌.
    //일급객체 처럼 값으로서 함수를 사용 가능하다.

    const addNumber = (a, b) => a + b;
    const mulityply = (a, b) => a * b;

    //전달된 action은 콜백함수 이다.
    //전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라.
    //함수를 사리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
    //그래서 함수는 고차함수 (함수를받는 함수) 안에서 필요한 순간에 나중에 호출이 된다.
    function calculate(a, b, action) {
        let result = action(a, b);
        console.log(result);
        return result;
    }

    console.log(calculate(1, 2, addNumber));
    console.log(calculate(1, 2, mulityply));

}