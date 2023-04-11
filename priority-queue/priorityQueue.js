class QueueItem {
   constructor(value, priority) {
      this.value = value;
      this.priority = priority;
   }
}
class PriorityQueue {
   constructor() {
      this.itemArray = [];
   }

   isEmpty() {
      return this.itemArray.length == 0;
   }

   enqueue(value, priority) {
      const item = new QueueItem(value, priority);
      let contain = false;

      for(let i=0; i < this.itemArray.length; i++) {
         if(this.itemArray[i].priority > item.priority) {
            this.itemArray.splice(i, 0, item);
            contain = true;
            break;
         }
      }

      if(!contain) {
         this.itemArray.push(item);
      }
   }

   dequeue() {
      if(this.isEmpty()) {
         return null;
      } else {
         const item = this.itemArray[0];
         this.itemArray.shift()
         return item;
      }
   }

   peek() {
      return this.itemArray[0].value;
   }

   print() {
      let output = "";
      for(let i = 0; i < this.itemArray.length; i++) {
         output += this.itemArray[i].value + " ";
      }
      return output;
   }
}

module.exports = {PriorityQueue, QueueItem};