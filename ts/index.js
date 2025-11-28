// comment: This file demonstrates various TypeScript features including types, interfaces, enums, classes, and union types.
// to compile: tsc index.ts and then run: node index.js
var test = "This is a test string.";
var num = 42;
var bool = true;
// Array types
var arr = [1, 2, 3, 4, 5];
var arr2 = ["a", "b", "c"];
var p1 = { name: "Alice", age: 30 };
// Enum example
var Role;
(function (Role) {
    Role["Admin"] = "admin";
    Role["User"] = "user";
    Role["Guest"] = "guest";
})(Role || (Role = {}));
// Class implementing Person
var PersonClass = /** @class */ (function () {
    function PersonClass(name, age) {
        this.name = name;
        this.age = age;
    }
    PersonClass.prototype.greet = function () {
        return "Hello, my name is ".concat(this.name);
    };
    return PersonClass;
}());
var p2 = new PersonClass("Bob", 25);
var id1 = 123;
var id2 = "abc-123";
var greetMsg = p2.greet();
// Simple runtime outputs so `node index.js` shows something
console.log("test:", test);
console.log("num:", num);
console.log("bool:", bool);
console.log("arr:", arr);
console.log("arr2:", arr2);
console.log("p1:", p1);
console.log("p2.greet():", greetMsg);
console.log("IDs:", id1, id2);
