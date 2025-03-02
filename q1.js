class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  peek() {
    return this.isEmpty()
      ? "Stack is empty"
      : this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  printStack() {
    console.log(this.items.join(" "));
  }
}

// Given an array arr[] of size N, you have to reverse the array using Stack

let stack = new Stack();

let arr = [10, 12, 33, 11, 7];

for (let i = 0; i < arr.length; i++) {
  stack.push(arr[i]);
}

for (let i = 0; i < arr.length; i++) {
  arr[i] = stack.pop();
}

console.log(arr);
