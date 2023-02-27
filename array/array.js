//배열 : 인덱스 (순서표) 가 있는 자료구조.
//일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있음.
//하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지않고 오브젝트와 유사함.
//자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 '특수한' 객체다!
//이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Typed Collections)

//배열 생성 방법

let array = new Array(3);
console.log(array);

array = new Array(1, 2, 3);
console.log(array);

array = Array.of(1, 2, 3, 4);
console.log(array);

array = [1, 2, 3, 4, 5, 6];
console.log(array);

array = Array.from('iterable');
console.log(array);

array = Array.from({
    0: '안',
    1: '녕',
    length: 2,
})
console.log(array);

//추가,삭제 - 좋지 않은 방식
const bad = ['🍎', '🍍', '🍌', '🍉'];
bad[7] = '🍎'; //인덱스로 접근하면 중간에 비어있는 아이템이 생기거나 기존에있는아이템을 덮어씌움.
console.log(bad);
delete bad[2]; // 중간에 비어있는 아이템이 생기게됨.
console.log(bad);

//추가,삭제 - 좋은 방식
const fruits = ['🍎', '🍍', '🍌', '🍉'];

//특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

//특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf('🍎'));

//배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍎'));

//추가 - 제일 뒤
fruits.push('🥝') // 배열 자체를 수정 (업데이트) 후 길이 반환.
console.log(fruits)
//추가 - 제일 앞
fruits.unshift('🥬')

console.log(fruits)

//삭제 - 제일 뒤
fruits.pop();// 배열 자체를 수정 (업데이트) 후 삭제한 아이템 반환.
console.log(fruits)
//삭제 - 제일 앞
fruits.shift();

console.log(fruits)

//중간에 추가 , 삭제

fruits.splice(0, 1); // 변경된 아이템 반환.(배열형태로).
console.log(fruits)

fruits.splice(0, 0, '🍎');
console.log(fruits)

//잘라진 새로운 배열을 만듬
let newArray = fruits.slice(0, 3);
console.log(newArray);

//여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

//순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

//중첩 배열을 하나의 배열로 쫙 펴기
let fatArr = [[1, 2, 3], [4, [5, 6]]];
console.log(fatArr.flat()); //1단계 펴기
console.log(fatArr.flat(2));//2단계 펴기

//특정한 값으로 배열을 채우기
const fillArr = [1, 2, 3, 4];
console.log(fillArr.fill(0))
console.log(fillArr.fill('fill', 0, 2));

//배열을 문자열로 합하기
let text = fillArr.join();
console.log(text);
text = fillArr.join('-');
console.log(text);



