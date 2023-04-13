class ListItem {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

class LinkedList {
   constructor() {
      this.head = null;
      this.length = 0;
   }

   add(value) {
      const item = new ListItem(value);
      let current;

      // if the list is empty, add element as head
      if(this.head == null) {
         this.head = item;
      } else {
         current = this.head;

         // move to the end of list
         while(current.next) {
            current = current.next
         }

         current.next = item;
      }
      this.length++;
   }

   insertAt(value, index) {
      if(index < 0 || index > this.length) {
         return "error";
      } else {
         const item = new ListItem(value);
         let current, previous;

         current = this.head;

         if(index == 0) {
            item.next = this.head;
            this.head = item;
         }
         
         let temp = 0;
         while(temp < index) {
            previous = current;
            current = previous.next;
            temp++;
         }

         item.next = current;
         previous.next = item;
      }

   }

   removeFrom(index) {
      if(index < 0 || index > this.length) {
         return "error";
      } else {
         let current, previous;
         let temp = 0;

         current = this.head;
         previous = current;

         if(index == 0 ) {
            this.head = current.next;
         } else {
            while(temp < index) {
               previous = current;
               current = previous.next;
               temp++;
            }

            previous.next = current.next;
         }
         this.size--;
         return current.item;
      }
   }

   print() {
      let current = this.head;
      let output = "";
      while(current) {
         output += current.value + " ";
         current = current.next;
      }
      return output.toString();
   }

}

module.exports = { LinkedList, ListItem};