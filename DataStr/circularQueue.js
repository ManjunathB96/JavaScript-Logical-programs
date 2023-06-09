<<<<<<< HEAD
class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentlength = 0;
    this.rear = -1;
    this.front = -1;
  }
  isFull() {
    return this.currentlength === this.capacity;
  }
  isEmpty() {
    return this.currentlength === 0;
  }
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentlength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }
  dequeue() {
    if (!this.isEmpty()) {
      const ele = this.items[this.front];

      this.items[this.front] = null;

      this.front = (this.front + 1) % this.capacity;

      this.currentlength -= 1;

      if (this.isEmpty()) {
        this.rear = -1;
        this.front = -1;
      }

      return ele;
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const cQueue = new CircularQueue(5);

cQueue.enqueue(10);
cQueue.enqueue(20);
cQueue.enqueue(30);
cQueue.enqueue(40);
cQueue.enqueue(50);
cQueue.enqueue(111);

console.log(cQueue.peek());
console.log(cQueue.dequeue());
console.log(cQueue.peek());
cQueue.print()


  /*
                            10
                         /      \
                        5         15
                      /   \              
                     3      7

                     */
=======
class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentlength = 0;
    this.rear = -1;
    this.front = -1;
  }
  isFull() {
    return this.currentlength === this.capacity;
  }
  isEmpty() {
    return this.currentlength === 0;
  }
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentlength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }
  dequeue() {
    if (!this.isEmpty()) {
      const ele = this.items[this.front];

      this.items[this.front] = null;

      this.front = (this.front + 1) % this.capacity;

      this.currentlength -= 1;

      if (this.isEmpty()) {
        this.rear = -1;
        this.front = -1;
      }

      return ele;
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const cQueue = new CircularQueue(5);

cQueue.enqueue(10);
cQueue.enqueue(20);
cQueue.enqueue(30);
cQueue.enqueue(40);
cQueue.enqueue(50);
cQueue.enqueue(111);

console.log(cQueue.peek());
console.log(cQueue.dequeue());
console.log(cQueue.peek());
cQueue.print()
>>>>>>> 4ec36c39a4083795e3e20b54e0f7a8742bc393aa
