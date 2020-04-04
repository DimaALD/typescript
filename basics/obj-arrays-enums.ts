
enum Role {
    ADMIN = 'ADMIN',
    READ_ONLY = 'READ_ONLY',
    AUTHOR = 'AUTHOR'
}

const person = {
    name: 'Dima',
    age: 22,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};


let activities: string[];
activities = ['1', '2']

for(const value of person.hobbies) {
    console.log(value.toUpperCase())
}

console.log(Role.ADMIN)