//퀴즈1 : 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
//단, 주어진 배열을 수정하지 않도록.
//input: ['🍌' , '🍓' , '🍇' , '🍓'];
//output: ['🍌' , '🥝' , '🍇' , '🥝'];
//답1
// const input = ['🍌', '🍓', '🍇', '🍓'];
// const output = ['🍌', '🥝', '🍇', '🥝'];
// console.log('before result', input);

// const replaceItems = (array) => {
//     //인자를 변경하면안됨.
//     const result = [...array]; //shallow copy
//     const index = result.indexOf('🍓');
//     result.splice(index, 1, '🥝');
//     return result;
// }
// const result = replaceItems(input);
// const result2 = replaceItems(result);
// console.log('after result1', result);
// console.log('after result2', result2);

//퀴즈2:
//배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
//input: ['🍌' , '🥝' , '🍇' , '🥝']; , 🥝
//output: 2

//답2
// const input = ['🍌', '🥝', '🍇', '🥝'];

// const countItems = (array, item) => {
//     const result = [];
//     const shallowCopy = [...array];
//     while (shallowCopy.includes(item)) {
//         const index = shallowCopy.indexOf(item);
//         const deletedOne = shallowCopy.splice(index, 1);
//         result.push(deletedOne);
//     }
//     result.flat();
//     return result.length;
// }

// const count = countItems(input, '🥝');
// console.log('count of 키위 ', count);


//퀴즈3 : 배열1, 배열2 두개의 배열을 전달받아,
//배열1 아이템중 배열2 에 존재하는 아이템만 담고 있는 배열 반환
//input: ['🍌' , '🍓' , '🍇' , '🍓'] ,   ['🍌' ,  '🍇' ] ;
//output: ['🍌' ,  '🍇' ];
//답3.
// const array = ['🍌', '🍓', '🍇', '🍓'];
// const anotherArray = ['🍌', '🍇'];
// const output = ['🍌', '🍇'];

// const intersectArray = (array, anotherArray) => {
//     const result = [];
//     const shallowCopy = [...array];
//     while (anotherArray.length !== 0) {
//         const item = anotherArray.shift();
//         const index = shallowCopy.indexOf(item);
//         result.push(shallowCopy.splice(index, 1));
//     }
//     return result;
// }
// const result = intersectArray(array, anotherArray).flat();
// console.log(result);
