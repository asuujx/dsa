module.exports = class Queue {
   constructor() {
      this.itemArray = [];
      this.headIndex = 0;
      this.tailIndex = 0;
   }

   enqueue(item) {
      this.itemArray[this.tailIndex] = item;
      this.tailIndex++;
   }

   dequeue() {
      const item = this.itemArray[this.headIndex];
      this.itemArray.shift();
      this.headIndex++;
      return item;
   }

   peek() {
      return this.itemArray[this.headIndex];
   }

   print() {
      return this.itemArray.toString();
   }
}