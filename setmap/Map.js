//Map - [키 , 값]

//순서 x , 유일한 키 를 사용해야함. , 키만 다르다면 값은 중복 가능.
//object와 비슷.

const map = new Map([
    ['key1', '사과'],
    ['key2', '바나나']
]);
console.log(map)

//사이즈 확인
console.log(map.size);

//존재하는지 확인
console.log(map.has('key1'));

//순회
for (value of map.values()) {
    console.log('value', value);
}
for (key2 of map.keys()) {
    console.log('key', key2);
}

//찾기
console.log(map.get('key1'));
console.log(map.get('key2'));

//추가
map.set('key3', '키위');
console.log(map)

//삭제
map.delete('key3');
console.log(map)

//전부삭제
map.clear();
console.log(map);

//오브젝트와의 큰 차이점?
// -> 사용할수 있는 API 가 다르다.
// -> obj[key] <===> map.get(key);

const key = { name: '우유', price: 10 };
const milk = { name: '우유', price: 10, description: '맛있는우유' };
const obj = {
    [key]: milk
}
console.log(obj);
const map2 = new Map([[key, milk]]);
console.log(map2);