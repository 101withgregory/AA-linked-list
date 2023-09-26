// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { 
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val); // Create a new node with the given value
        if (!this.head) {
          // If the list is empty, set the new node as the head
          this.head = newNode;
        } else {
          // If the list is not empty, set the next pointer of the new node to the current head
          newNode.next = this.head;
          // Set the new node as the head of the list
          this.head = newNode;
        }
        this.length++; // Increment the length of the list
        return this;

        // Write your hypothesis on the time complexity of this method here
        //Adding a node to the head involves creating a new node, updating the next pointer of the new node, and updating the head pointer of the list. These operations take a constant amount of time, regardless of the size of the list. Therefore, the time complexity of adding a node to the head is constant, O(1).
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        //Therefore, the time complexity of adding a node to the tail is O(n) because the time required is proportional to the length of the list.

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }

        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.length++
        return this;
    }

    removeFromHead() {
        // Remove node at head
        
        if (!this.head) {
            return undefined; // Empty list, nothing to remove
        }
        let removedNode = this.head;
        if(!this.head.next){
            this.head = null;
            this.length--;
            return removedNode.value;
        }

    
        this.head = this.head.next;
        removedNode.next = null;
        this.length--;
        return removedNode.value;
        // Write your hypothesis on the time complexity of this method here
        //The time complexity of the removeFromHead method is O(1), which is constant time. 
    }

    removeFromTail() {
        // Remove node at tail
        
        if (!this.head) {
            return undefined; // Empty list, nothing to remove
          }
         let removedNode;
          if (!this.head.next) {
            // Only one node in the list
            removedNode = this.head;
            this.head = null;
            this.length--;
            return removedNode.value;
          }
        
          let curr = this.head;
        
          while (curr.next.next !== null) {
            curr = curr.next;
          }
        
         removedNode = curr.next;
          curr.next = null;
          this.length--;
          return removedNode.value;
        // Write your hypothesis on the time complexity of this method here
        //The time complexity of this operation is still O(n), as it requires traversing the list to reach the node just before the tail.
    }

    peekAtHead() {
        // Return value of head node
        if (this.head) {
            return this.head.value;
          }
          return undefined; // Empty list, no head node

        // Write your hypothesis on the time complexity of this method here
        //Since accessing the value property of the head node can be done in constant time, the time complexity of peekAtHead() is O(1).
    }

    print() {
        // Print out the linked list
        let curr = this.head;
        while (curr !== null) {
          console.log(curr.value);
          curr = curr.next;
        }

        
        // Write your hypothesis on the time complexity of this method here
        //The time complexity of the print() method is O(n), where n is the number of nodes in the linked list. 
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
