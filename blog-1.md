# Understanding Type Safety: Why `any` is Dangerous and `unknown` is Better

## Introduction
When learning TypeScript, one of the biggest benefits we get is "Type Safety". But sometimes, we don't know the exact type of our data. In these situations, developers often use `any` or `unknown`. In this blog, I will explain why `any` is a bad practice and why we should use `unknown` instead.

## Why is `any` a "Type Safety Hole"?
When you use `any`, you are basically telling TypeScript to stop checking types. It completely turns off TypeScript's rules for that variable. This defeats the whole purpose of using TypeScript and can lead to bugs that crash your application at runtime.
```typescript
let myData: any = "Hello World";
myData.push(5); 
Why is unknown the Safer Choice?
unknown is like a safer version of any. You can assign any value to an unknown variable, just like any. But the difference is, TypeScript will not let you do anything with that variable until you prove what type it actually is.

TypeScript
let myData: unknown = "Hello World";

Understanding Type Narrowing
To use an unknown variable, we have to use "Type Narrowing". Type narrowing means writing code to check the actual type before using it. We can do this using typeof.

TypeScript
let myValue: unknown = "TypeScript";

if (typeof myValue === "string") {
    
    console.log(myValue.toUpperCase());
}
Conclusion
Using any might seem easy, but it creates hidden bugs. By using unknown and type narrowing, we can keep our code safe and take full advantage of TypeScript's power.