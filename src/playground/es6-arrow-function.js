console.log('==> Section 1');

const square = function (x) {
    return x * x;
};
console.log(square(8));

const squareArrow = (x) => {
    return x * x;
};

const squareArrow2 = (x) => x * x;

console.log(squareArrow(9));
console.log(squareArrow2(10));

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Mike Smith'));

// Details
console.log('==> Section 2');

const add = function (a, b) {
    console.log(arguments);
    return a + b;
};

const addArrow = (a, b) => {
    // this fails
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 1));

const user = {
    name: 'Edison',
    cities: ['Quito', 'Cuenca', 'Guayaquil'],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);
        const that = this;

        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in ' + city);
        });

        this.cities.forEach((city) => {
            console.log('Arrow ' + that.name + ' has lived in ' + city);
        });


        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });

        return cityMessages;
    },
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 4, 6],
    multiplyBy: 5,
    multiply: function () {
        return this.numbers.map((number) => number * this.multiplyBy);
    },

};

console.log(multiplier.multiply());

