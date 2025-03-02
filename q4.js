class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtEnd(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let x = this.head;
    while (x.next) {
      x = x.next;
    }
    x.next = newNode;
  }

  deleteNode(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let y = this.head;
    while (y.next.data !== data) {
      y = y.next;
    }

    if (y.next) {
      y.next = y.next.next;
    }
  }

  reverse() {
    let t1 = this.head;
    let t2 = this.head.next;
    let t3 = t2.next;

    while (t3 != null) {
      t2.next = t1;
      t1 = t2;
      t2 = t3;
      t3 = t3.next;
    }

    t2.next = t1;
    this.head.next = null;
    this.head = t2;

    let x = this.head;
    let result = "";
    while (x) {
      result += x.data + " -> ";
      x = x.next;
    }
    console.log(result + "null");
  }
}

const list = new LinkedList();
list.insertAtEnd(5);
list.insertAtEnd(11);
list.insertAtEnd(10);
list.insertAtEnd(22);
list.insertAtEnd(7);

list.reverse();
