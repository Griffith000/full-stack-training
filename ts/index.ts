// comment: This file demonstrates various TypeScript features including types, interfaces, enums, classes, and union types.
// to compile: tsc index.ts and then run: node index.js

const test: string = "This is a test string.";
let num: number = 42;
const bool: boolean = true;

// Array types
const arr: number[] = [1, 2, 3, 4, 5];
const arr2: Array<string> = ["a", "b", "c"];

// Type alias
type Person = {
  name: string;
  age?: number;
};

const p1: Person = { name: "Alice", age: 30 };

// Interface extending a type
interface Employee extends Person {
  id: number;
  role: Role;
}

// Enum example
enum Role {
  Admin = "admin",
  User = "user",
  Guest = "guest",
}

// Union type
type ID = number | string;

// Class implementing Person
class PersonClass implements Person {
  constructor(public name: string, public age?: number) {}
  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

const p2 = new PersonClass("Bob", 25);


const id1: ID = 123;
const id2: ID = "abc-123";

const greetMsg = p2.greet();


// Simple runtime outputs so `node index.js` shows something

console.log("test:", test);
console.log("num:", num);
console.log("bool:", bool);
console.log("arr:", arr);
console.log("arr2:", arr2);
console.log("p1:", p1);
console.log("p2.greet():", greetMsg);
console.log("IDs:", id1, id2);



