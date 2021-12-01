// Basic Types
let id: number = 5;
let company: string = "johnny";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3, 4];
let arr: any[] = [1, true, "Hello"];

//Tuple
let person: [number, string, boolean] = [1, "A", true];

//Tuple Array
let employee: [number, string][];

employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "jill"],
];

//Union type
let pid: string | number = 22;

// Enum
enum Direction1 {
  Up = 1,
  Down, //2 auto
  Left, //3 auto
  Right, //3 auto
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

//Objects

// const user: {
//   id: number;
//   name: string;
// } = {
//   id: 1,
//   name: "John",
// };

type Point = number | string;
const p1: Point = 1;
const p2: Point = "string";

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "john",
};

// Type assertion
let cid: any = 5;
// let customerId = <number>cid;
let customerId = cid as number; // equals

console.log(customerId);

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

// Interfaces: custom type or specific structure of a object/function
interface UserInterface {
  readonly id: number; // user1.id = 1;     ERROR: id is read only
  name: string;
  age?: number; // ? mean optional
}

const user1: UserInterface = {
  id: 1,
  name: "john",
};

const user2: UserInterface = {
  id: 1,
  name: "john",
  age: 10,
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number) => x + y;
const sub: MathFunc = (x: number, y: number) => x - y;

// Classes
class Person {
  id: number; //could have access modifier: public(default) , protect, private
  name: string;

  constructor(id: number, name: string) {
    console.log("Person created");
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const johnny = new Person(1, "johnny1");
console.log(johnny.register());

// Class implement interface
interface PersonInterface {
  id: number; // user1.id = 1;     ERROR: id is read only
  name: string;
  register(): string;
}

class Person2 implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return "registered";
    // throw new Error("Method not implemented.");
  }
}

// Subclasses
class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "jOhnny", "developer");
console.log(emp);

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["a", "b", "c"]);

console.log(numArray);
console.log(strArray);
