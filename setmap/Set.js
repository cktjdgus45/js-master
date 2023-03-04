//Set - Set는 간단하다. 중복이 안되기떄문에 한번만들어서 추가하고 삭제하고 중복된게있다면 추가가 안되는것. 

const set = new Set([1, 2, 3]);
console.log(set);
console.log(set.size);
console.log(set.has(2));
console.log(set.has(6));

//순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
    console.log(value);
}

//추가 - 중복이 안된다 (배열과의 차이점)
set.add(6);
set.add(6);
console.log(set);

//삭제

set.delete(6);
console.log(set);

set.clear();
console.log(set);

//오브젝트 세트

const obj1 = { name: '🍏', price: 9 };
const obj2 = { name: '🍅', price: 8 };
const objs = new Set([obj1, obj2,]);
console.log(objs);

//Quiz
obj1.price = 10; //shallow copy 로인해 변경된다.
objs.add(obj1);
console.log(objs);

//Quiz2
const obj3 = { name: '🌽', price: 7 };
objs.add(obj3);
console.log(objs);

obj3.price = 1;
console.log(objs); //shallow copy 로인해 변경된다.

//Quiz3 : 주어진 두 세트의 공통된 아이템만 담고 있는 세트를 만들어라.

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

function findInterSection(set1, set2) {
    const array = [...set1].filter((item) => set2.has(item));
    return new Set(array);
}

