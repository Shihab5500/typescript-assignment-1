// Problem 1
function filterEvenNumbers(numbers: number[]): number[] {
    let evenNumbers: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

// Problem 2
function reverseString(str: string): string {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Problem 3
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
    if (typeof value === "string") {
        return "String";
    } else {
        return "Number";
    }
}

// Problem 4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Problem 5
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book) {
    let updatedBook = {
        title: book.title,
        author: book.author,
        publishedYear: book.publishedYear,
        isRead: true
    };
    return updatedBook;
}

// Problem 6
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

// Problem 7
function getIntersection(arr1: number[], arr2: number[]): number[] {
    let commonElements: number[] = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                let isAlreadyAdded = false;
                for (let k = 0; k < commonElements.length; k++) {
                    if (commonElements[k] === arr1[i]) {
                        isAlreadyAdded = true;
                        break;
                    }
                }
                if (!isAlreadyAdded) {
                    commonElements.push(arr1[i]);
                }
            }
        }
    }
    return commonElements;
}
