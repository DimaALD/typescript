type CustomFunction = (n1: number, n2: number) => number


function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num)
}

printResult(add(1, 3));

let combindeValues: CustomFunction;

combindeValues = add;

// combindeValues = 5;

console.log(combindeValues(1,6))


function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(100, 34, printResult)