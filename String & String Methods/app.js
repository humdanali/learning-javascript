let name = "Muhammad Humdan Ali";

let str = "Hello World";
console.log(str.length); // 11

console.log("hello".toUpperCase()); // "HELLO"

console.log("HELLO".toLowerCase()); // "hello"

console.log("   Hello   ".trim()); // "Hello"

console.log("Hello World".slice(0, 5)); // "Hello"

console.log("Hello World".substring(0, 5)); // "Hello"

console.log("Hello World".replace("World", "Humdan")); // "Hello Humdan"

console.log("Hi Hi Hi".replaceAll("Hi", "Hello")); // "Hello Hello Hello"

console.log("Hello".concat(" ", "World")); // "Hello World"

console.log("Hello World".includes("World")); // true

console.log("JavaScript".startsWith("Java")); // true

console.log("JavaScript".endsWith("Script")); // true

console.log("a,b,c".split(",")); // ["a", "b", "c"]

console.log("Hello".charAt(1)); // "e"

console.log("Hello World".indexOf("World")); // 6

console.log("Hello World Hello".lastIndexOf("Hello")); // 12

console.log("Hello".repeat(3)); // "HelloHelloHello"

console.log("5".padStart(3, "0")); // "005"

console.log("5".padEnd(3, "0")); // "500"
