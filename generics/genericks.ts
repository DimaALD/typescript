const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Greeting!");
    }, 2000)
});

promise.then(data => {
    console.log(data.toUpperCase());
});


function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

const mergedObj = merge({name: 'Dima'}, {age: 22});

console.log(mergedObj.name);

interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if(element.length === 1){
        descriptionText = 'Got 1 element';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText]
}

console.log(countAndDescribe('Hi there'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

console.log(extractAndConvert({name: 'Max'}, 'name'));


class DataStorage<T> {
    private storage: T[] = [];

    addItem(item: T) {
        this.storage.push(item);
    }

    removeItem(item: T) {
        this.storage.splice(this.storage.indexOf(item), 1);
    }

    getItems() {
        return [...this.storage];
    }
}

const storage = new DataStorage<string>();

storage.addItem('PS4');
storage.addItem('XBOX')
console.log(storage.getItems());


const objStorage = new DataStorage<object>();
objStorage.addItem({name: 'Dima'});
objStorage.addItem({name: 'Max'});

objStorage.removeItem({name: 'Dima'});

console.log(objStorage.getItems());