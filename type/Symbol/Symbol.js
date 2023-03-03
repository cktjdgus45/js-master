//type - Symbol

//Symbol 다른값과 중복되지 않는 유일무이한 값. 상징.

const mySymbol = Symbol('포포');
const mySymbol2 = Symbol('포포');

console.log(typeof mySymbol);
console.log(mySymbol);
console.log(mySymbol === mySymbol2);
console.log(mySymbol.description);
console.log(mySymbol.toString());

const s1 = Symbol.for('myowner');
console.log(Symbol.keyFor(s1));

const Direction = {
    UP: Symbol('up'),
    DOWN: Symbol('down'),
    LEFT: Symbol('left'),
    RIGHT: Symbol('right')
};

const myDirection = Direction.UP;

if (myDirection === Direction.UP) {
    console.log('going up')
}
