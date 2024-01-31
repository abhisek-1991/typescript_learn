// let age: number = 89;
// let user_name: string = "john";
// let isStudent: boolean = true;
// let notSure: any = "i can be anything";

// console.log(age);
// console.log(user_name);
// console.log(isStudent);
// console.log(notSure);

// let numbers: number[] = [1, 2, 3, 4];
// let tuple: [string, number] = ["john", 44];
// console.log(numbers);
// console.log(tuple);

// function add(x: number, y: number): number{
//     return x + y;
// }
// console.log(add(4, 6));

// interface Person{
//     name: string;
//     age: number;
// }

// let user: Person = {
//     name: "johny",
//     age: 34
// };
// console.log(user);

// class Animal{
//     name: string;

//     constructor(name: string) {
//         this.name = name;
//     }
//     makeSound(): void{
//         console.log("Some generic sound");
//     }
// }

// let dog: Animal = new Animal("buddy");
// dog.makeSound();

// let value: any = "Hello , TypeScript";
// let string_length: number = (value as string).length;

// console.log(string_length);    

// export function hello(a:string): string{
//     return a;
// }

// console.log(hello('1234'));


// function concatenateStrings(a: unknown, b: unknown): string | undefined{
//     if (typeof a === "string" && typeof b === "string") {
//         return a + b;
//     } else {
//         console.log("types are not compatible");
//         return undefined;
//     }
// }

// const result1 = concatenateStrings("Hello", "typescript");
// console.log(result1);

function concatenateSrings(a: any, b: any): string{
    return a + b;
}

const result1= concatenateSrings("hello","typescript");
console.log(result1);
