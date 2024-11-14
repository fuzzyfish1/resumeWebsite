"use strict";
function greet(name) {
    console.log(`Hello, ${name}`);
    return "hello" + name;
}
document.body.textContent = greet("world");
