# TypeScript Assignment Solutions

This repository contains solutions to a TypeScript assignment covering basic to intermediate concepts including types, interfaces, classes, generics-style logic, and array manipulation.

---

## 📌 Topics Covered

- Union Types & Type Narrowing
- Function Type Handling
- Classes in TypeScript
- Interfaces & Type Aliases
- Array Filtering & Transformation
- Object Typing
- Loop-based Logic (without built-in methods)
- Reduce-based Calculations

---

# 📘 Blog Post (TypeScript Concepts)

---

## 1. Interfaces vs Types in TypeScript

In TypeScript, both `interface` and `type` are used to define the structure of objects. However, they have some important differences.

### 🔹 Interface

- Used mainly to define object structure
- Supports inheritance using `extends`
- Best suited for object-oriented programming

```ts id="i1"
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}

🔹 Type
More flexible than interfaces
Can define union, primitive, function, and object types
Cannot be reopened like interfaces

type User = {
  name: string;
  age: number;
};

type ID = string | number;

| Feature          | Interface     | Type                    |
| ---------------- | ------------- | ----------------------- |
| Object structure | Yes           | Yes                     |
| Union types      | No            | Yes                     |
| Extending        | Yes (extends) | Yes (via intersections) |
| Flexibility      | Medium        | High                    |


2. The keyof Keyword in TypeScript

The keyof keyword is used to extract the keys of an object type as a union of string literals.

type User = {
  name: string;
  age: number;
  email: string;
};

type UserKeys = keyof User;

👉 Here, UserKeys becomes:
"name" | "age" | "email"

🔹 Practical Use Case

👉 This ensures that only valid keys of the object can be used, making the code safer and type-safe.

🧠 Summary
interface → best for object structure and extension
type → more flexible, supports unions and advanced types
keyof → extracts object keys as a union type for safer access
