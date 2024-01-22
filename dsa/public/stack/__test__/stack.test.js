const Stack = require('../stack');

describe('Stack', () => {
   test('should create empty stack', () => {
      const stack = new Stack();
      expect(stack.itemArray.length).toBe(0);
   });

   test('should push and pop items', () => {
      const stack = new Stack();
      stack.push('a');
      stack.push('b');
      stack.push('c');
      stack.pop();
      expect(stack.print()).toBe('a,b');
   });

   test('should be able to peek', () => {
      const stack = new Stack();
      stack.push('a');
      stack.push('b');
      stack.push('c');
      expect(stack.peek()).toBe('c');
   });
});