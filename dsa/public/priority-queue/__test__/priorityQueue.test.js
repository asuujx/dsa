const PriorityQueue = require("../priorityQueue").PriorityQueue;

describe('PriorityQueue', () => {
   test('should create empty priority queue', () => {
      const priorityQueue = new PriorityQueue();

      expect(priorityQueue.itemArray.length).toBe(0);
   });

   test('should enqueue and dequeue items', () => {
      const priorityQueue = new PriorityQueue();
      priorityQueue.enqueue('a', 3);
      priorityQueue.enqueue('b', 2);
      priorityQueue.enqueue('c', 1);
      priorityQueue.enqueue('d', 4);
      priorityQueue.dequeue();

      expect(priorityQueue.print()).toBe('b a d ');
   });

   test('should peek data', () => {
      const priorityQueue = new PriorityQueue();
      priorityQueue.enqueue("a", 3);
      priorityQueue.enqueue("b", 2);
      priorityQueue.enqueue("c", 1);
      priorityQueue.enqueue("d", 4);
      expect(priorityQueue.peek()).toBe('c');
   })
})