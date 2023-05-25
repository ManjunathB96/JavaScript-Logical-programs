<<<<<<< HEAD
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.length === 0) {
      return "underflow";
    }
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();

console.log(stack.pop());

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(80);

console.log(stack.size());

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.isEmpty());
stack.print();
=======
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.length === 0) {
      return "underflow";
    }
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();

console.log(stack.pop());

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(80);

console.log(stack.size());

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.isEmpty());
stack.print();
>>>>>>> 4ec36c39a4083795e3e20b54e0f7a8742bc393aa
