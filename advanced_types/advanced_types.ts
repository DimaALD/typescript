type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type EvaluatedEmployee = Admin & Employee;

const e1: EvaluatedEmployee = {
    name: "Dima",
    privileges: ['everything'],
    startDate: new Date()
}

type Combinable = string | number;

type Numeric = number | boolean;

type Universal = Combinable & Numeric; // will be number, cause it is common for Combinable & Numeric

function add(n1: number, n2: number): number
function add(n1: Combinable, n2: Combinable) {
    if(typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString();
    } 
    return n1 + n2;
}


type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if('privileges' in emp) {
        console.log('Priveleges: ' + emp.privileges);
    }
    if('startDate' in emp) {
        console.log('Priveleges: ' + emp.startDate);
    }
}

printEmployeeInformation(e1);

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number = 100) {
        console.log('Loading cargo ... ' + amount);
    }
}


type Vehicle = Car | Truck;

const car = new Car();

const truck = new Truck();

function printInformation(vehicle: Vehicle, amount?: number) {
    if(vehicle instanceof Truck) {
        vehicle.loadCargo(amount);
    }
    vehicle.drive();
}

printInformation(truck, 1000);

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
};

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch(animal.type) {
        case 'bird':
          speed = animal.flyingSpeed;
          break;

        case 'horse': 
          speed = animal.runningSpeed;
          break;
    }
    console.log(`Moving at speed: ${speed}`);   
}

moveAnimal({type: 'bird', flyingSpeed: 10});


const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

userInputElement.value = 'Hi there!';

interface ErrorContainer {
    id: string;
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    id: '1',
    errror: 'my error'
}


const input = null;

let value1 = input ?? `That's a null or undefined`
