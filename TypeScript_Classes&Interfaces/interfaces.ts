interface Person {
    name: string,
    age: number,

    greet(phrase: string): void

}

let user1: Person;

user1 = {
    name: 'Dima',
    age: 22,

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name)
    }
}

user1.greet('Hello, this is');

interface Named {
    readonly name: string,
}


interface Greetable extends Named {
    greet(phrase: string): void
}

class Persons implements Greetable {

    constructor(public name: string, public age: number) {}

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name)
    }
}


interface AddFun {
    (a: number, b: number): number
}

let add: AddFun;

add = (n1: number, n2: number) => n1 + n2; 


function getSmth(n1: number, n2?: string) {
    console.log(n1, n2)
}

getSmth(5)