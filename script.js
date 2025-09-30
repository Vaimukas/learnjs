console.log('Hello world!');

// muutujad
var num = 1; // ära kasuta var'i enam
let num2 = 2; 

console.log(num2, num);
num = 3.5;
console.log(typeof num);
let text = "ga";
console.log(typeof text);
let bool = true;
console.log(typeof bool);
bool = false;
console.log(typeof bool);
let nothing;
console.log(typeof nothing);
nothing = undefined;
nothing = null;
let array = [1, 2, 3, 4, "sad", true, 3.5];
console.log(typeof array);
let obj = {
    name: "John",
    age: 523,
    cats: ['Koer', 'Kass', 'Jänes'],
    data: {
        phone: '3',
        email: 'john@gmail.com'
    }
}
console.log(typeof obj);

function hello() {
    console.log('hello');
}

console.log(typeof hello);