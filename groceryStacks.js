class Stack {
  constructor() {
    this.stack = []; 
  }

  peek() {
    if (this.stack.length === 0) {
      console.log("The stack is empty.");
      return null;
    } else {
      console.log(`Top of the stack: ${this.stack[this.stack.length - 1]}`);
      return this.stack[this.stack.length - 1];
    }
  }

  push(item) {
    this.stack.push(item); 
    console.log(`Item pushed: ${item}`);
    this.peek(); 
    this.print();
  }

  pop() {
    if (this.stack.length === 0) {
      console.log("Cannot pop. The stack is already empty.");
      return null;
    } else {
      const removedItem = this.stack.pop(); 
      console.log(`Item popped: ${removedItem}`);
      this.peek(); 
      this.print(); 
      return removedItem;
    }
  }

  print() {
    console.log("Current stack:", this.stack);
  }
}
const groceryStack = new Stack();

const groceries = [
  prompt("Enter grocery item 1:"),
  prompt("Enter grocery item 2:"),
  prompt("Enter grocery item 3:"),
  prompt("Enter grocery item 4:"),
  prompt("Enter grocery item 5:"),
];

groceries.forEach(item => groceryStack.push(item));

groceryStack.pop();
groceryStack.pop();
