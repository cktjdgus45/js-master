//선언 단계(let foo) , 초기화 단계(foo===undefined) , 할당단계 (foo===1)

// 자바스크립트는 ES6에서 도입된 let, const를 포함하여 모든 선언(var, let, const, function, function*, class)을 호이스팅한다.
// 호이스팅(Hoisting)이란, var 선언문이나 function 선언문 등을 해당 스코프의 선두로 옮긴 것처럼 동작하는 특성을 말한다.

// 변수가 어떻게 생성되며 호이스팅은 어떻게 이루어지는지 좀 더 자세히 살펴보자. 변수는 3단계에 걸쳐 생성된다. 자세한 내용은 Execution Context을 참조하기 바란다.

// 선언 단계(Declaration phase)
// 변수를 실행 컨텍스트의 변수 객체(Variable Object)에 등록한다. 이 변수 객체는 스코프가 참조하는 대상이 된다.

// 초기화 단계(Initialization phase)
// 변수 객체(Variable Object)에 등록된 변수를 위한 공간을 메모리에 확보한다. 이 단계에서 변수는 undefined로 초기화된다.

// 할당 단계(Assignment phase)
// undefined로 초기화된 변수에 실제 값을 할당한다.

//var
//호이스팅 발생o , 선언단계 와 초기화 단계가 동시에 진행 ,함수 레벨 스코프(오로지 함수의 코드 블록만을 지역스코프로 인정하는 스코프) , 선언문이전에 참조가능.
//let
//호이스팅 발생x ,  선언단계 와 초기화 단계가 분리되어 진행 , 블록 레벨 스코프 (모든 블록 코드블록 ex 함수,if문,for문,while문,try/catch문),재할당 가능. ,선언문이전에 참조불가능.
//const
//호이스팅 발생x , 반드시 선언과 동시에 초기화 해야한다. (const foo = 1;) , 블록 레벨 스코프를 가진다. , 재할당 금지(불변을 의미하진 않음). 상수로 사용(대문자).
