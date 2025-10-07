let bool = true;
bool = false;
bool = true && false; // and
bool = false && true;
bool = false && false;
bool = true && true;
bool = true || false; //or
bool = false || true;
bool = false || false;
bool = true || true;
bool = !false; //not
bool = !true;
bool = (true || false && true) && !(false || false || true && true);

console.log(bool);

bool = 10 > 5;
console.log(bool);
bool = 10 < 5;
console.log(bool);
bool = 10 > 10;
console.log(bool);
bool = 10 == 10;
console.log(bool);
bool = 10 <= 10;
console.log(bool);
bool = 10 != 4;
console.log(bool);
bool = "10" == 10;
console.log(bool);
bool = "10" === 10;
console.log(bool);
bool = "10" !== 10;
console.log(bool);