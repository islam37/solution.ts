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
# 🟦 TypeScript: Interfaces vs Types & Union/Intersection Types

> A concise guide to understanding two of TypeScript's most powerful — and most misunderstood — features.

---

## 📖 Table of Contents

- [Interfaces vs Types](#-interfaces-vs-types)
  - [Key Differences](#key-differences)
  - [When to Use Which](#when-to-use-which)
- [Union & Intersection Types](#-union--intersection-types)
  - [Union Types](#union-types-)
  - [Intersection Types](#intersection-types-)
- [Quick Reference](#-quick-reference)
- [Further Reading](#-further-reading)

---

## 🔷 Interfaces vs Types

Both `interface` and `type` can describe the shape of an object, but they have meaningful differences.

### Key Differences

| Feature | `interface` | `type` |
|---|---|---|
| Declaration merging | ✅ Yes | ❌ No |
| Extends / Implements | ✅ Yes (via `extends`) | ✅ Yes (via `&` intersection) |
| Primitive aliases | ❌ No | ✅ Yes |
| Union / Intersection | ❌ No | ✅ Yes |
| Computed properties | ❌ Limited | ✅ Yes |
| Tuple types | ❌ No | ✅ Yes |

---

### 1. Declaration Merging (Interfaces only)

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

// ✅ Merged automatically
const user: User = { name: "Alice", age: 30 };
```

> `type` does **not** support this — redeclaring a type alias is a compile error.

---

### 2. Extending

```ts
// Interface extending interface
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}

// Type extending type (via intersection)
type Animal = { name: string };
type Dog = Animal & { breed: string };
```

---

### 3. Primitives, Unions & Tuples (Types only)

```ts
type ID = string | number;           // union alias
type Point = [number, number];       // tuple
type Nullable<T> = T | null;         // generic utility
```

---

### When to Use Which

| Use `interface` when… | Use `type` when… |
|---|---|
| Defining object/class shapes | You need unions or intersections |
| Building extensible APIs or libraries | Working with primitives or tuples |
| You want declaration merging | You need computed / mapped types |

> **Rule of thumb:** Prefer `interface` for objects, `type` for everything else.

---

## 🔶 Union & Intersection Types

### Union Types `|`

A union type means a value can be **one of several types**. Think of it as **"OR"**.

```ts
type StringOrNumber = string | number;

function formatInput(value: StringOrNumber): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

console.log(formatInput("hello")); // "HELLO"
console.log(formatInput(3.14159)); // "3.14"
```

#### Discriminated Unions (Advanced Pattern)

```ts
type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; side: number };
type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle": return Math.PI * shape.radius ** 2;
    case "square": return shape.side ** 2;
  }
}
```

---

### Intersection Types `&`

An intersection type combines **multiple types into one**. Think of it as **"AND"**.

```ts
type Serializable = { serialize: () => string };
type Loggable     = { log: (msg: string) => void };

type Logger = Serializable & Loggable;

const logger: Logger = {
  serialize: () => JSON.stringify({ ts: Date.now() }),
  log: (msg) => console.log(`[LOG] ${msg}`),
};
```

#### Merging Object Types

```ts
type Person  = { name: string; age: number };
type Employee = { company: string; role: string };

type Staff = Person & Employee;

const staff: Staff = {
  name: "Bob",
  age: 28,
  company: "Acme Corp",
  role: "Engineer",
};
```

---

## 🗂 Quick Reference

```ts
// ── Interfaces ──────────────────────────────────────────
interface Point { x: number; y: number }          // basic shape
interface Named extends Point { label: string }   // extends

// ── Types ───────────────────────────────────────────────
type ID     = string | number;                    // union
type Coord  = [number, number];                   // tuple
type Entity = Point & { id: ID };                 // intersection

// ── Union narrowing ──────────────────────────────────────
function process(input: string | null) {
  if (input === null) return "empty";
  return input.trim();
}
```

---

## 📚 Further Reading

- [TypeScript Handbook — Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [TypeScript Handbook — Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
- [TypeScript Handbook — Intersection Types](https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

---

