class Node<TValue> {
  constructor(
    public value: TValue,
    public next: Node<TValue> | null = null,
  ) {}
}

export class LinkedList<TValue> {
  firstNode: Node<TValue> | null;
  size: number;

  constructor() {
    this.firstNode = null;
    this.size = 0;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  insertAtBeginning(value: TValue): void {
    const newNode = new Node(value);
    if (!this.firstNode) {
      this.firstNode = newNode;
    } else {
      newNode.next = this.firstNode;
      this.firstNode = newNode;
    }
    this.size++;
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
