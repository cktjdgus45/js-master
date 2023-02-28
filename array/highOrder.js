//배열의 고차함수 (함수를 반환하는 함수)
//순수함수 (side effect이 없는 ,불변성을 유지하는, 내부에서 변경 x 함수)


const fruits = ['🍌', '🍙', '🍇', '🍓'];

//for반복문 대신 배열을 순회하는 법.
// * Performs the specified action for each element in an array.
// * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
// * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
// */
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void
fruits.forEach((value, index, array) => {
    console.log('--------------------------------');
    console.log('value', value);
    console.log('index', index);
    console.log('array', array);
})

//조건에 맞는(콜백함수) 아이템을 찾을떄
/**
    * Returns the value of the first element in the array where predicate is true, and undefined
    * otherwise.
    * @param predicate find calls predicate once for each element of the array, in ascending
    * order, until it finds one where predicate returns true. If such an element is found, find
    * immediately returns that element value. Otherwise, find returns undefined.
    * @param thisArg If provided, it will be used as the this value for each invocation of
    * predicate. If it is not provided, undefined is used instead.
    */
//  find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
//  find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;

const item1 = { name: '🍙', price: 2 };
const item2 = { name: '🍌', price: 3 };
const item3 = { name: '🍓', price: 1 };
const products = [item1, item2, item3];

const findOne = products.find((value, index, obj) => {
    console.log('--------------------------------');
    console.log('value', value);
    console.log('index', index);
    console.log('obj', obj);
    return value.price === 1;
})

console.log('findOne', findOne);

//findIndex : 제일먼저 조건에 맞는 아이템의 인덱스를 반환

const foundIndex = products.findIndex((value) => value.name = '🍙');
console.log('foundIndex', foundIndex);

//배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인

const isTrue = products.some((value) => value.name === '🍙');
console.log('isTrue', isTrue);

//배열의 아이템들이 전체적으로 조건(콜백함수)에 맞는지 확인

const isAllTrue = products.every((value) => value.name === "🍙");
console.log('isAllTrue', isAllTrue);

//조건에 맞는 모든 아이템들을 새로운 배열로
const filteredItems = products.filter((value) => value.price === 3);
console.log('filteredItems', filteredItems);

//배열의 아이템들을 각각 다른 아이템들로 매핑할수있는 , 변환해서 새로운 배열 생성

const nums = [1, 2, 3, 4, 5];
let double = nums.map(item => item * 2);
console.log('original', nums);
console.log('double', double);
double = nums.map(item => {
    if (item % 2 === 0) {
        return item * 2;
    } else {
        return item;
    }
})
console.log('even double', double);

//flatMap : flat+ map
const doubleString = ['dream', 'coding'].flatMap((text) => text.split(' '));
console.log(doubleString);

//sort : 배열의 아이템들을 정렬
//문자열 형태의 오름차순으로 요소를 정렬 , 기존의 배열을 변경

const texts = ['hi', 'abc'];
texts.sort();
console.log(texts); //abc hi

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers) //0,1,10,2,4,5 (10이 문자열 1이므로 먼저.)
//a가 앞으로 정렬.
numbers.sort((a, b) => a - b);
console.log(numbers)

//reduce 배열의 요소들을 접어서 접어서 하나로.

const sum = numbers.reduce((pre, cur, curIndex, array) => {
    pre += cur;
    return pre;
})
console.log(sum)