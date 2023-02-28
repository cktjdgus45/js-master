// 얕은 복사 shallow copy -  객체는 메모리 주소 전달.
//자바스크립트에서 복사할떄는 항상 얕은 복사가 이루어짐!
//Array.from , concat , slice ,spread(...) , Object.assign 

const pizza = { name: '🍕', price: 1 };
const ramen = { name: '🍜', price: 2 };
const sushi = { name: '🍣', price: 3 };

const store1 = [pizza, ramen]; //0x1f2a3qer , 0q1qwe2dd4
const store2 = Array.from(store1); // 배열도 각각의 obj 주소를 가리킨다. 분리된 다를 개체가 아니다.

pizza.price = 3;  // 가격인상으로인해 배열수정이 없었음에도 배열값이 변함. => shallow copy

console.log('store1', store1);
console.log('store2', store2);