//Promise
//Promise 는 비동기 처리 상태와 처리 결과를 관리하는 객체이다.

//js의 비동기처리방법의 하나의 패턴으로 '콜백함수' 를 사용한다. 하지만 전통적인 콜백패턴은 콜백헬로인해 가독성이 나쁘고 에러처치가 곤란하며 , 여러개의 비동기처리를 한번에 처리하는데 한계가있다.
//ES6 에서 이를 위해 또다른 패턴으로 'PROMISE' 를 도입했다. 비동기 처리시점을 명확히 표현하고 가독성이 좋고 에러처치에 능하고 여러개의 처리를 한번에 하는 장점이있다. 

//프로미스 생성
const promise = new Promise((resolve, reject) => {
    //Promise 함수의 콜백함수 내부에서 비동기 처리를 수행한다.
    if ('비동기 처리 성공') {
        resolve('result');
    } else { //비동기 처리 실패
        reject('failure result');
    }
})

//pending - 비동기처리가 아직 수행되지 않은 상태 , 기본상태
//fulfilled - 비동기처리가 수행된 상태(성공) - resolve함수 호출
//rejected - 비동기 처리가 수행된 상태(실패) - reject함수 호출

//후속처리메서드
//프로미스의 비동기 처리 상태가 변화하면 이에 따른 후속 처리를 해야한다.
//프로미스가 'fulfilled' 상태가 되면 프로미스의 처리 결과를 가지고 무언가를 해야하고 , 'rejected' 상태가 되면 프로미스의 처리 결과(에러)를 가지고 에러 처리를 해야한다. 이를위해 후속처리메서드 then,catch,finally를 제공한다.

//fulfilled
new Promise(resolve => resolve('fulfilled')).then(v => console.log(v), e => console.error(e));

//rejected
new Promise((_, reject) => reject(new Error('rejected'))).then(v => console.log(v), e => console.error(e)).catch(e => console.error(e)).finally(() => console.log('finally'));

//프라미스의 후속처리 메서드의 콜백함수는 마이크로태스크 큐에 저장된다. 그 외의 비동기함수의 콜백함수나 이벤트헨들러는 테스크 큐에 저장된다.