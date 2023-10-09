"use strict";
//any
let a = 10;
let b = 'Lucas';
let c = true;
let d = undefined;
//array
let values = [10, 20, 40, 75];
//tupla
let item = ['Xiaomi', 5, false];
//enum
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["dev"] = 2] = "dev";
    Role[Role["qa"] = 3] = "qa";
})(Role || (Role = {}));
const user1 = {
    firstName: 'Lucas',
    age: 27,
    role: Role.dev
};
console.log(user1);
//function return
function add(n1, n2) {
    return n1 + n2;
}
// function void
function result(price) {
    console.log('the result is ' + price);
}
console.log(result(add(6, 5)));
//object
const user2 = {
    firstName: 'Andreza',
    age: 28
};
//unknown
let itemInput;
let itemName;
itemInput = 10;
itemInput = 'orange';
if (itemInput === 'string') {
    itemName = itemInput;
}
//never
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('The application crashed', 500);
console.log(generateError('The application crashed', 500));
