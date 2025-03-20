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
});
