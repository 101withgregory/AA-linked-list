const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
            const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
        // If the queue is empty, update both head and tail to the new node
        this.head = newNode;
        this.tail = newNode;
        } else {
        // Add the new node to the end of the queue
        this.tail.next = newNode;
        this.tail = newNode;
        }
         this.length ++
         return this.length;
        // Write your hypothesis on the time complexity of this method here
        // method would have a time complexity of O(1), which means it operates in constant time.
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if (!this.head) {
            return null; // Empty queue, nothing to dequeue
          }
      
          const removedNode = this.head;
          this.head = this.head.next;
          removedNode.next = null;
          removedNode.prev = null;
      
          if (this.length === 1) {
            // Removed the only node in the queue
            this.head = null;
            this.tail = null;
          }
          this.length--;
          return removedNode.value;
        
        // Write your hypothesis on the time complexity of this method here
        // it operates in O(1) constant time complexity.
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
