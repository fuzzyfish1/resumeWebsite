function greet(name: string): string {

	console.log(`Hello, ${name}`);
	return "hello" + name;
}

document.body.textContent = greet("world");
document.body.textContent = greet("bloop");
