let userInput: unknown;
let userName: string;

userInput = 5;

if (typeof userInput === 'string') {
    userName = userInput;
}
console.log(typeof userName)

function generateError(message: string, code: number): never {
    throw {message: message, code: code};
}

console.log('Dima')