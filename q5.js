let count = 0;

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
      count++;
      return;
    }
    let x = this.head;
    while (x.next) {
      x = x.next;
    }
    x.next = newNode;
    count++;
  }

  removeMiddle() {
    let y = this.head;
    let c = Math.floor(count/2) ;
    while (c -1 > 0) {
      y = y.next;
      c--;
    }
    y.next = y.next.next;

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

console.log(count);

list.removeMiddle();
