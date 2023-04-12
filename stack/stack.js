module.exports = class Stack {
  constructor() {
    this.itemArray = [];
  }

  isEmpty() {
    return this.itemArray == 0;
  }

  push(item) {
    this.itemArray.push(item);
  }

  pop() {
    if (this.itemArray.length == 0) {
      return null;
    } else {
      this.itemArray.pop();
    }
  }

  peek() {
    return this.itemArray[this.itemArray.length - 1];
  }

  print() {
   return this.itemArray.toString();
  }
}
