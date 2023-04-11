module.exports = class Queue {
   constructor() {
      this.array = [];
      this.len = 0;
   }

   enqueue(value) {
      this.array[this.len] = value;
      this.len++;
   }

   dequeue() {
      if(this.len === 0) {
         console.log("Queue is currently empty");
      }
      let output = this.array[0];
      this.array = this.array.slice(1);
      this.len--;
      return output;
   }

   search(index) {
      if(index < 0 || index > this.len) {
         console.log("Index outside of array range");
      }
      return this.array[index];
   }

   peek() {
      if(this.len === 0) {
         return null;
      }
      return this.array[0];
   }

   print(callback) {
      return this.array.toString(callback);
   }
}