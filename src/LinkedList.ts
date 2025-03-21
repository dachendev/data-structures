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

  *[Symbol.iterator]() {
    let currentNode = this.firstNode;
    while (currentNode) {
      yield currentNode.value;
      currentNode = currentNode.next;
    }
  }

  toArray(): TValue[] {
    return [...this];
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
    for (const currentValue of this) {
      if (currentValue === value) {
        return true;
      }
    }
    return false;
  }

  popFirst(): TValue | undefined {
    if (!this.firstNode) {
      return undefined;
    }

    const popNode = this.firstNode;
    this.firstNode = this.firstNode.next;
    if (!this.firstNode || !this.firstNode.next) {
      this.lastNode = this.firstNode;
    }
    this.size--;
    return popNode.value;
  }

  popLast(): TValue | undefined {
    if (!this.firstNode) {
      return undefined;
    }

    if (!this.firstNode.next) {
      const popNode = this.firstNode;
      this.firstNode = this.lastNode = null;
      this.size--;
      return popNode.value;
    }

    let currentNode = this.firstNode;
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }

    const popNode = currentNode.next;
    currentNode.next = null;
    this.lastNode = currentNode;
    this.size--;
    return popNode.value;
  }

  clear(): void {
    this.firstNode = null;
    this.lastNode = this.firstNode;
    this.size = 0;
  }
}
