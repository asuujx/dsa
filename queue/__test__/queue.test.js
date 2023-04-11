const Queue = require('../queue');

describe('Queue', () => {
   test('should create empty queue', () => {
      const queue = new Queue();

      expect(queue.itemArray.length).toBe(0);
   });

   test('should enqueue data to queue', () => {
      const queue = new Queue();
      queue.enqueue('a');
      queue.enqueue('b');
      queue.enqueue('c');

      expect(queue.print()).toBe('a,b,c');
   });

   test('should enqueue and dequeue', () => {
      const queue = new Queue();
      queue.enqueue('a');
      queue.enqueue('b');
      queue.enqueue('c');
      queue.dequeue();

      expect(queue.print()).toBe('b,c');
   });

   test('should peek data', () => {
      const queue = new Queue();
      queue.enqueue('a');
      queue.enqueue('b');

      expect(queue.peek()).toBe('a');
   });
});
