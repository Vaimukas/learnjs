function hello() {
    console.log("Hello world!");
}

hello();

function helloName(name= "tundmatu") {
    console.log(`Hello ${name}!`);
}

helloName("Toomas");
helloName("Peeter");
helloName();

function sum(a, b) {
    return a+b;
    console.log("salatekst"); // return lõpetab funktsiooni
}

let answer = sum(4, 6);
console.log(answer);

let sum2 = function (a, b) {
    return a+b;
}
console.log(sum2(3, 5));

let sum3 = (a, b) => {
    return a + b;
}
console.log(sum3(2, 3));

let sum4 = (a, b) => a + b
console.log(sum4(6, 6))

let square = a => a * a;
console.log(square(5));

let obj = {
    name: "John",
    age: 33,
    sum1: function (a, b) {
        return a+b;
    },
    sum2: (a,b) => {
        return a+b;
    },
    sum3: (a,b) => a+b,
    sum4(a,b) {
        return a+b;
    }
}

console.log(obj.sum1(1,1));
console.log(obj.sum2(1,1));
console.log(obj.sum3(1,1));
console.log(obj.sum4(1,1));

function recursive(i) {
    if(i<10){
        console.log(i);
        recursive(i+1);
    }
}

recursive(0);
