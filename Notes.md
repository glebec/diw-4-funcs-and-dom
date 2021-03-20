# Notes

## Git

### Review

- Git is a Version Control System (VCS)
- Distributed VCS (or DVCS) also has ways to *share* and *merge* project
- It tracks changes to a project over time
- It allows you to make parallel versions of a project (i.e. if you want to experiment, modify some things, propose some changes... but have an easy way t1o restore your project state!)
- It lets multiple developers collaborate on a project

### Commands Demonstrated

```sh
git status  # shows the current state of your project (any changes?)
git log  # shows the history of previous changes
git add SOME_FILE_NAME  # tells git to track the changes of a new file
git commit -m 'SOME_MESSAGE_HERE'  # tells git to save the current project state
```

## Functions

### Mathematical Functions

- Takes an input; uses some rules; spits out an output
- `y = m * x + b` <- "equation"
    - or: `f(x) = m * x + b` <- `f` is a "function" which operates on `x`
- `abs` (absolute value): measures the distance from zero

Input | Output
------|-------
-4    | 4
-1    | 1
0     | 0
1     | 1
12    | 12

- `abs(-4)`
- `abs -4`
- `absolute value of -4`
- "given some number `x`, return the (positive) distance from zero to `x`"
- `abs(x) = magnitude x`
- `f(x) = x^2` ("square")
- `square(x) = x * x`
- `a^2 + b^2 = c^2` -> `c = sqrt(a^2 + b^2)`
- `f(a, b) = sqrt(a^2 + b^2)`

```
f(a, b) = sqrt(a^2 + b^2)
^ ^  ^    \_____________/
| |  |           |__________ body / return expression
| |  |
| -------- "parameters" a and b
|
function f
```

```
f(3, 4) ---> 5
  ^  ^
  |__|___ "arguments" 4 and 5
```

- we "call f on 4 and 5"
- we "apply f to 4 and 5"
- we "invoke f with 4 and 5"

### JS Functions

#### Function declarations

```
"declare" the function:
  |
  |      give it a name:
  |          |
  |          |      name its parameters (inputs):
  |          |       |  |
function hypotenuse (a, b) {
    return Math.sqrt(a ** 2 + b ** 2);
        |
        |
      say what the function returns as output
}
```

#### Arrow functions

An alternative, more concise way to write functions from input to output.

```js
let yell = str => str + "!"
let hypotenuse = (a, b) => Math.sqrt(a ** 2 + b ** 2);
```

#### Methods

A special form of function which is accessed using a "dot" after the input: for example, `"hello".toUpperCase()` (instead of `toUpperCase("hello")`). Different data types (numbers, strings, objects, etc.) have different methods "attached" to them for you to access.

- `f(i) -> o` "function"
- `i.f() -> o` "method"

They exist because of "Object Oriented Programming" (OOP) which we won't talk about today. OOP involves the keyword `this`, which is often quite difficult to talk about.

One small advantage of methods is that code editors like VSCode can often suggest methods via autocomplete.

An example: how many inputs does the "slice" function have?

```js
// `slice` cuts up a string using start and stop indexes.
// The indices start at 0; slice cuts up to but not including
// the "end" index.
let result = "welcome".slice(2, 4); // result = "lc"
```

Answer: it _looks like_ it has two inputs (start and stop index), but it REALLY has three!

```js
let result = "welcome".slice(2, 4);
//               ^           ^  ^
//               |           |__|
//               |            |
//          (1): string   (2) and (3): indexes
```

You won't hear most programers talk about methods in this way, but the thing to the left of the "dot" (the `this` parameter) truly is one of the inputs to the function, in a mathematical sense. I wanted to emphasize this to make it clear that `slice` is a function which takes a string and two numbers, and returns a new string. Just like our "mathematical" functions, it is a mapping from inputs to output.
