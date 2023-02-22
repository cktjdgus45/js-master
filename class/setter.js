{//접근자 프로퍼티

    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        //getter 함수
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
        //setter 함수
        set fullName(name) {
            [this.firstName, this.lastName] = name.split(' ');
        }
    }

    const me = new Person('cha', 'popo');
    //데이터 프로퍼티를 통한 프로퍼티 값의 참조.
    console.log(`${me.firstName}${me.lastName}`)
    //접근자 프로퍼티를 통한 프로퍼티 값의 저장.
    me.fullName = 'cha popo';
    //접근자 프로퍼티를 통한 프로퍼티 값의 참조.
    console.log(me.fullName);
}