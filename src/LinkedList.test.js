import LinkedList from "./LinkedList.js";

describe("LinkedList", () => {
  /** @type {LinkedList} */
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  it("should create a linked list", () => {
    expect(list).toBeDefined();
    expect(list.length).toBe(0);
  });

  it("should remove all nodes from the list", () => {
    list.push(1);
    list.push(2);
    list.push(3);
    list.clear();
    expect(list.isEmpty()).toBeTruthy();
  });

  it("should add a node to the beginning of the list", () => {
    list.unshift(1);
    expect(list.peek()).toBe(1);
    list.unshift(2);
    expect(list.peek()).toBe(2);
    list.unshift(3);
    expect(list.peek()).toBe(3);
  });

  it("should add a node to the end of the list", () => {
    list.push(1);
    expect(list.peekLast()).toBe(1);
    list.push(2);
    expect(list.peekLast()).toBe(2);
    list.push(3);
    expect(list.peekLast()).toBe(3);
  });

  it("should add a node at a specified index", () => {
    list.insertAt(0, 1);
    expect(list.at(0)).toBe(1);
    list.insertAt(1, 2);
    expect(list.at(1)).toBe(2);
    list.insertAt(2, 3);
    expect(list.at(2)).toBe(3);
  });

  it("should remove a node from the beginning of the list", () => {
    list.unshift(1);
    list.unshift(2);
    list.unshift(3);
    expect(list.shift()).toBe(3);
    expect(list.shift()).toBe(2);
    expect(list.shift()).toBe(1);
  });

  it("should remove a node from the end of the list", () => {
    list.push(1);
    list.push(2);
    list.push(3);
    expect(list.pop()).toBe(3);
    expect(list.pop()).toBe(2);
    expect(list.pop()).toBe(1);
  });

  it("should remove a node from the middle of the list", () => {
    list.push(1);
    list.push(2);
    list.push(3);
    expect(list.remove(1)).toBeTruthy();
    expect(list.remove(2)).toBeTruthy();
    expect(list.remove(3)).toBeTruthy();
  });
});
