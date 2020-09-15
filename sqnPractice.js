// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    /* If the stack is empty, then the node will be the
           top of the stack */
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    /* If the stack is empty, then the node will be the
           top of the stack */
    if (this.top === null) {
      return undefined;
    }
    /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
    const poppedData = this.top;
    this.top = poppedData.next;

    return poppedData.data;
    //remove the top node from the stack and MAKE sure to return the data
  }
}

const stack = new Stack();

console.log("STACK STUFF")
stack.push("Zuko");
stack.push("Katara");
stack.push("Aang");
console.log("This is the stack: ", stack);

const Aang = stack.pop();
console.log("The first pop is ", Aang);

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data,null);

    //updating the queue
    if (this.first === null) {
      this.first = node;
    }
    //updating the node
    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    //whoever is first is found
    const node = this.first;
    //then the node becomes the first and whatever is first is removed from the line.
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}


console.log("QUEUE STUFF")

const queue = new Queue();
queue.enqueue("Tim")
queue.enqueue("Gab")
queue.enqueue("Bobby")
queue.enqueue("Marlo")
console.log( "This is the Queue ", queue)

const removed = queue.dequeue("Bobby")
console.log("I have taken someone out of the queue ", removed) 