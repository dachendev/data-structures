import { LinkedList } from './LinkedList';

describe('LinkedList', () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  it('should be empty on initialization', () => {
    expect(list.size).toBe(0);
    expect(list.isEmpty()).toBe(true);
  });

  it('should insert values at the beginning', () => {
    list.insertAtBeginning(1);
    expect(list.toArray()).toStrictEqual([1]);
    list.insertAtBeginning(2);
    expect(list.toArray()).toStrictEqual([2, 1]);
    expect(list.size).toBe(2);
  });

  it('should insert values at the end', () => {
    list.insertAtEnd(1);
    expect(list.toArray()).toStrictEqual([1]);
    list.insertAtEnd(2);
    expect(list.toArray()).toStrictEqual([1, 2]);
    expect(list.size).toBe(2);
  });

  describe('with values', () => {
    beforeEach(() => {
      list.insertAtEnd(1);
      list.insertAtEnd(2);
    });

    it('should be iterable', () => {
      expect(typeof list[Symbol.iterator]).toBe('function');
    });

    it('should iterate through the values', () => {
      const valueArray = [];
      for (const value of list) {
        valueArray.push(value);
      }
      expect(valueArray).toStrictEqual([1, 2]);
    });

    it('should transform to an array of values', () => {
      expect(list.toArray()).toStrictEqual([1, 2]);
    });

    it('should insert values at an index', () => {
      list.insertAtIndex(1, 3);
      expect(list.toArray()).toStrictEqual([1, 3, 2]);
      expect(list.size).toBe(3);
    });

    it('should get the first value', () => {
      expect(list.getFirst()).toBe(1);
    });

    it('should get the last value', () => {
      expect(list.getLast()).toBe(2);
    });

    it('should get value by index', () => {
      expect(list.getAtIndex(0)).toBe(1);
      expect(list.getAtIndex(1)).toBe(2);
    });

    it('should check if contains a value', () => {
      expect(list.contains(1)).toBe(true);
      expect(list.contains(1000)).toBe(false);
    });

    it('should pop the first value', () => {
      expect(list.popFirst()).toBe(1);
      expect(list.popFirst()).toBe(2);
      expect(list.size).toBe(0);
    });

    it('should pop the last value', () => {
      expect(list.popLast()).toBe(2);
      expect(list.popLast()).toBe(1);
      expect(list.size).toBe(0);
    });

    it('should clear all values', () => {
      list.clear();
      expect(list.size).toBe(0);
      expect(list.isEmpty()).toBe(true);
    });
  });
});
