class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

export default class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }

  /**
   * Remove all nodes from the list
   * @returns {void}
   */
  clear() {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }

  /**
   * Check if the list is empty
   * @returns {boolean} Whether the list is empty
   */
  isEmpty() {
    return !this._head && !this._tail && this.length === 0;
  }

  /**1
   * Add a node to the beginning of the list
   * @param {any} value - The value of the new node
   * @returns {void}
   */
  unshift(value) {
    const node = new Node(value);

    if (!this._head) {
      // List is empty
      this._head = node;
      this._tail = node;
    } else {
      node.next = this._head;
      this._head = node;
    }

    this.length++;
  }

  /**
   * Add a node to the end of the list
   * @param {any} value - The value of the new node
   * @returns {void}
   */
  push(value) {
    const node = new Node(value);

    if (!this._head) {
      // List is empty
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      node.previous = this._tail;
      this._tail = node;
    }

    this.length++;
  }

  /**
   * Insert a node at a specified index
   * @param {number} index - The index of the new node
   * @param {any} value - The value of the new node
   * @returns {void}
   */
  insertAt(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      // Insert at the beginning
      return this.unshift(value);
    }

    if (index === this.length) {
      // Insert at the end
      return this.push(value);
    }

    const node = new Node(value);

    let current = this._head;
    let currentIndex = 0;

    while (currentIndex < index) {
      current = current.next;
      currentIndex++;
    }

    // Insert the new node
    node.next = current;
    node.previous = current.previous;
    current.previous.next = node;
    current.previous = node;

    this.length++;
  }

  /**
   * Get the value of the first node in the list
   * @returns {any} The value of the first node
   */
  peek() {
    if (!this._head) {
      return null;
    }
    return this._head.value;
  }

  /**
   * Get the value of the last node in the list
   * @returns {any} The value of the last node
   */
  peekLast() {
    if (!this._tail) {
      return null;
    }
    return this._tail.value;
  }

  /**
   * Get the value of a node at a specified index
   * @param {number} index - The index of the node
   * @returns {any} The value of the node
   */
  at(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds");
    }

    let current = this._head;
    let currentIndex = 0;

    while (currentIndex < index) {
      current = current.next;
      currentIndex++;
    }

    return current.value;
  }

  /**
   * Remove a node from the beginning of the list and return its value
   * @returns {any} The value of the removed node
   */
  shift() {
    if (!this._head) {
      return null;
    }

    const node = this._head;

    if (this._tail === node) {
      // List has only one node
      this._head = null;
      this._tail = null;
    } else {
      this._head = node.next;
      this._head.previous = null;
    }

    this.length--;

    return node.value;
  }

  /**
   * Remove a node from the end of the list and return its value
   * @returns {any} The value of the removed node
   */
  pop() {
    if (!this._tail) {
      return null;
    }

    const node = this._tail;

    if (this._head === node) {
      // List has only one node
      this._head = null;
      this._tail = null;
    } else {
      this._tail = node.previous;
      this._tail.next = null;
    }

    this.length--;

    return node.value;
  }

  /**
   * Removes a node associated with the given value
   * @param {any} value - The value of the node
   * @returns {boolean} Whether the node was removed
   */
  remove(value) {
    if (!this._head) {
      return;
    }

    let current = this._head;

    while (current) {
      if (current.value === value) {
        if (!current.previous) {
          // Remove the head
          this.shift();
        } else if (!current.next) {
          // Remove the tail
          this.pop();
        } else {
          // Remove a node in the middle
          current.previous.next = current.next;
          current.next.previous = current.previous;

          this.length--;
        }

        return true;
      }

      current = current.next;
    }

    return false;
  }

  /**
   * Returns the value of the first node that satisfies the predicate
   * @param {(value: any) => boolean} predicate
   * @returns {any} The value of the first node that satisfies the predicate
   */
  find(predicate) {
    let current = this._head;
    while (current) {
      if (predicate(current.value)) {
        return current.value;
      }
      current = current.next;
    }

    return null;
  }

  /**
   * Check if all nodes in the list satisfy the predicate
   * @param {(value: any) => boolean} predicate
   * @returns {boolean} Whether all nodes in the list satisfy the predicate
   */
  every(predicate) {
    let current = this._head;
    while (current) {
      if (!predicate(current.value)) {
        return false;
      }
      current = current.next;
    }

    return true;
  }

  /**
   * Call the callback function for each node in the list
   * @param {(value: any) => void} callbackFn
   * @returns {void}
   */
  forEach(callbackFn) {
    let current = this._head;
    while (current) {
      callbackFn(current.value);
      current = current.next;
    }
  }
}
