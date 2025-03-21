class Node<TValue> {
  constructor(
    public value: TValue,
    public next: Node<TValue> | null = null,
  ) {}
}

export class LinkedList<TValue> {
  firstNode: Node<TValue> | null;
  lastNode: Node<TValue> | null;
  size: number;

  constructor() {
    this.firstNode = null;
    this.lastNode = this.firstNode;
    this.size = 0;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  insertAtBeginning(value: TValue): void {
    const newNode = new Node(value);
    if (!this.firstNode) {
      this.firstNode = newNode;
      this.lastNode = this.firstNode;
    } else {
      newNode.next = this.firstNode;
      this.firstNode = newNode;
    }
    this.size++;
  }

  insertAtEnd(value: TValue): void {
    const newNode = new Node(value);
    if (!this.firstNode) {
      this.firstNode = newNode;
      this.lastNode = this.firstNode;
    } else {
      this.lastNode.next = newNode;
      this.lastNode = this.lastNode.next;
    }
    this.size++;
  }

  getFirst(): TValue | undefined {
    return this.firstNode?.value;
  }

  getLast(): TValue | undefined {
    return this.lastNode?.value;
  }

  contains(value: TValue): boolean {
    let currentNode = this.firstNode;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  clear(): void {
    this.firstNode = null;
    this.lastNode = this.firstNode;
    this.size = 0;
  }

  toArray(): TValue[] {
    const valueArray: TValue[] = [];
    let currentNode = this.firstNode;
    while (currentNode) {
      valueArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return valueArray;
  }
}
