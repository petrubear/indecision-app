var nameVar = 'Edison';
var nameVar = 'Mikest';
console.log(nameVar);

let nameLet = 'Jen';
nameLet = 'July';
console.log(nameLet);

const nameConst = 'Frank';
console.log(nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

// Block scope
const fullName = 'Edison Martinez';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);

