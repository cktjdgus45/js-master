//비동기 프로그래밍

//동기 - js 는 싱글스레드 이기때문에 비동기 구현 불가. sleep->aoo->boo  가 순차적으로 실행이 종료될때까지 다음 함수는 블록되있는 상태로 대기한다.
function sleep(func, delay) {
    const until = Date.now() + delay;
    while (Date.now() < until);
    func();
}

function aoo() {
    console.log('aoo');
}

function boo() {
    console.log('boo');
}

sleep(aoo, 3 * 1000);
boo();

//비동기 - 브라우저API인 setTimeOut 함수는 멀티쓰레드 이기때문에 비동기로 작동한다. 테스크를 블로킹하지않고 다음 함수를 곧바로 실행한다.
//타이머 함수인 setTimeOut , setInterval , HTTP Request , event handler 는 비동기 처리 방식으로 동작한다.
//비동기처리는 이벤트루프와 테스크 큐 와 깊은 관계가 있다.

function sleep2(func, delay) {
    setTimeout(func, delay);
}
function aoo2() {
    console.log('aoo2');
}

function boo2() {
    console.log('boo2');
}

sleep2(aoo2, 3 * 1000);
boo2();

//이벤트 루프와 테스크 큐
//이벤트루프 : 자바스크립트의 동시성을 지원하는 것. 브라우저에 내장되어 있는 기능중 하나.

//JS엔진 - 콜스택 과 힙영역 으로 구성
//콜스택 - 실행컨텍스트의 소스코드 평가과정에서 생성되는 실행 컨텍스트가 추가되고 제거되는 스택 자료구조. 최상위 실행컨텍스트가 종료되어 제거되기전까진 다른 어떤 테스크도 실행하지않는다.
//힙영역 - 힙은 객체가 저장되는 메모리 공간. 콜스택의 요소인 실행 컨텍스트는 힙에 저장된 객체를 참조한다.

//비동기의 setTimeOut의 콜백함수의 평가와 실행은 js엔진이 담당하지만 호출 스케줄링을 위한 타이머 설정과 콜백함수의 등록은 브라우저 또는 NODEJS 가 담당한다.
//이를 위해 브라우저 환경은 '테스크큐' 와 '이벤트루프' 를 제공한다.
//테스크큐 : setTimeOut,setInterval 같은 비동기 함수의 콜백함수 또는 이벤트헨들러가 일시적으로 보관되는 영역.
//마이크로테스크큐 : 프로미스의 후속처리메서드의 콜백함수가 일시적으로 보관되는 영역.
//이벤트루프 : 콜스택에 실행중인 실행컨텍스트가 있는지 , 테스크큐에 대기중인 함수(콜백,이벤트헨들러 등) 이 있는지 무한적으로 반복하여 확인한다.
