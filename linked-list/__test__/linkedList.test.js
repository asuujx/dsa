const LinkedList = require("../linkedList").LinkedList;

describe('LinkedList', () => {
   test('should create empty list', () => {
      const linkedList = new LinkedList();
      expect(linkedList.length).toBe(0);
   });

   test('should add value at the end of the list', () => {
      const linkedList = new LinkedList;
      linkedList.add(1);
      linkedList.add(2);
      expect(linkedList.print()).toBe('1 2 ');
   });
   
   test('should add value at given index', () => {
      const linkedList = new LinkedList();
      linkedList.add(1);
      linkedList.add(2);
      linkedList.insertAt(3, 1);
      expect(linkedList.print()).toBe('1 3 2 ');
   });

   test('should add and delete items', () => {
      const linkedList = new LinkedList();
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      linkedList.removeFrom(1);
      expect(linkedList.print()).toBe('1 3 ');
   })
});