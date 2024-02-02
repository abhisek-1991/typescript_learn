function reverseArray<T>(arr: T[]): T[]{
    return arr.reverse(); 
}

let stringArray: string[] = ['a', 'b'];
let reversedStringArray: string[] = reverseArray(stringArray);
console.log(reversedStringArray);

let numberArray: number[] = [1, 2, 3];
let reversedNumberArray: number[] = reverseArray(numberArray);
console.log(reversedNumberArray);

