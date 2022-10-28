class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const list = new DoublyLinkedList();
list.push('HELLO1');
list.push('HELLO2');
list.push('HELLO3');
list.push('HELLO4');
list.push('HELLO5');
list.push('HELLO6');
list.push('HELLO7');
list.push('HELLO8');
list.push('HELLO9');
list.push('HELLO10');
