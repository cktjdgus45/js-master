//클로져.
//함수와 둘러싸인 렉시컬환경의 조합.
//내부함수에서 외부함수에 접근할수 있는 것.

//활용목적
//내부 정보를 은닉하고 , 공개함수(public,외부)를 통한 데이터 조작을 위해
//캡슐화와 정보은닉
//클래스의 private 같은 효과 또는 메소드를 사용하는 효과와 동일.

function makeCounter() {
    let count = 0; //은닉하고자하는 데이터 상태.
    function increase() { //public함수를통해 조작.
        count++;
        console.log(count);
    }
    return increase;
}

const increase = makeCounter();
increase();//?
increase();//?
increase();//?

class Counter {
    #count = 0;
    increase() {
        this.#count++;
        console.log(this.#count);
    }
}

const counter = new Counter();
counter.increase();
counter.increase();
counter.increase();