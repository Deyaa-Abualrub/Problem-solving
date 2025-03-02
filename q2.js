class QueueUsingStacks {
  constructor() {
    this.stack1 = []; // مكدس للإضافة
    this.stack2 = []; // مكدس للإزالة
  }

  enqueue(element) {
    this.stack1.push(element);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    if (this.stack2.length === 0) {
      return "none";
    }
  }

  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }

  // للحصول على حجم الطابور
  size() {
    return this.stack1.length + this.stack2.length;
  }

  // لطباعة عناصر الطابور
  printQueue() {
    // نستخدم slice() لإنشاء نسخة جديدة من stack2 ونعكسها دون تعديل المصفوفة الأصلية
    console.log([...this.stack2.slice().reverse(), ...this.stack1].join(" "));
  }
}

let queue = new QueueUsingStacks();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

queue.printQueue();
