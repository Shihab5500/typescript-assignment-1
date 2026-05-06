# Keeping Code DRY with TypeScript Utility Types: Pick and Omit

## Introduction
When writing TypeScript code, we often have large interfaces. Sometimes, we only need a few properties from a big interface, or we want all properties except one or two. Instead of copying and pasting code, TypeScript gives us powerful utility types like `Pick` and `Omit` to help keep our code DRY (Don't Repeat Yourself).

## What is DRY Principle?
DRY stands for "Don't Repeat Yourself". It means we should not write the same code again and again in different places. If we change something, we should only have to change it in one place.

## Using `Pick` to Select Properties
The `Pick` utility type allows you to create a new type by choosing specific properties from an existing interface.
```typescript
interface UserProfile {
    id: number;
    name: string;
    email: string;
    address: string;
    phoneNumber: string;
}


type UserSummary = Pick<UserProfile, "name" | "email">;

const user: UserSummary = {
    name: "John Doe",
    email: "john@example.com"
};
As you can see, we didn't have to rewrite the name and email types. We just "picked" them.

Using Omit to Remove Properties
Omit is the opposite of Pick. It creates a new type by taking all properties from an interface, but removing the ones you don't want.

TypeScript

type NewUser = Omit<UserProfile, "id">;

const newUser: NewUser = {
    name: "Jane Doe",
    email: "jane@example.com",
    address: "123 Main St",
    phoneNumber: "1234567890"
};
Conclusion
By using Pick and Omit, we avoid duplicating our interfaces. If the master interface (UserProfile) gets updated, the smaller specialized "slices" (UserSummary and NewUser) will automatically update too. This makes our code much cleaner and easier to maintain.