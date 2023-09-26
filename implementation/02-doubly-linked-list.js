// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
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

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // the time complexity of the addToHead method is O(1), which is constant time.

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
    
        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
    
        this.length++;

        // Write your hypothesis on the time complexity of this method here
        //The time complexity of the addToTail method is O(1), which is constant time. This is because regardless of the size of the linked list, the method performs a fixed number of operations to add a new node to the tail. 
    }

    removeFromHead() {

         // Remove node at head
        
         if (!this.head) {
            return undefined; // Empty list, nothing to remove
          }
          
          const removedNode = this.head;
          this.head = this.head.next;
          
          if (this.head) {
            this.head.prev = null; // Update prev pointer on the new head
          } else {
            this.tail = null; // Removed the only node in the list
          }
          
          removedNode.next = null;
          removedNode.prev = null;
          
          this.length--;
          return removedNode.value;

        // Write your hypothesis on the time complexity of this method here
        //The time complexity of the removeFromHead method is O(1), which is constant time. This is because regardless of the size of the linked list, the method performs a fixed number of operations to remove the node at the head
    }

    removeFromTail() {
        // Remove node at tail
        
        if (!this.head) {
            return undefined; // Empty list, nothing to remove
        }
        
        if (!this.head.next) {
            // Only one node in the list
            const removedNode = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return removedNode.value;
        }
        
        let curr = this.head;
        let prev = null;
        
        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }
        
        prev.next = null;
        this.tail = prev;
        this.length--;
        
        return curr.value;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if (this.head === null) {
            // List is empty
            return undefined;
          }
      
          return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        //the time complexity of the peekAtHead() method would still be O(1), meaning it has a constant time complexity.
    }

    peekAtTail() {
        // Return value of tail node
        if (this.tail === null) {
            // List is empty
            return undefined;
          }
      
          return this.tail.value;
        
        
        // Write your hypothesis on the time complexity of this method here
         //the time complexity of the peekAtHead() method would still be O(1), meaning it has a constant time complexity.
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
