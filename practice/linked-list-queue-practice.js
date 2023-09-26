// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;

    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        this.length++
        return this;
    }

    listLength() {
       // Returns the length of the list

        // O(n) time complexity implementation
        let curr = this.head;
        let count = 0;

        while (curr) {
            count++;
            curr = curr.next;
        }

        return count;

        // O(1) time complexity implementation
        // The list length is stored in the length property,
        // so we can simply return that value.
        // return this.length;
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        // Hypothesis: The time complexity of this method is O(n)

        let curr = this.head;
        let sum = 0;

        while (curr) {
            sum += curr.value;
            curr = curr.next;
        }

        return sum;
    }

    averageValue() {
        // Returns the average value of all the nodes

          // Hypothesis: The time complexity of this method is O(n)

          if (!this.head) {
            return 0; // To avoid division by zero if the list is empty
        }

        return this.sumOfNodes() / this.listLength();
    
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        if (n < 0 || n >= this.length) {
            return null; // Index out of bounds
        }

        let curr = this.head;
        let count = 0;

        while (count < n) {
            curr = curr.next;
            count++;
        }

        return curr;

        // Write your hypothesis on the time complexity of this method here
        //The time complexity of this method is O(n) because, in the worst case, we may need to traverse the entire list to reach the nth index. The time it takes to find the nth node grows linearly with the number of nodes in the list.
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
             // Hypothesis: The time complexity of this method is O(n)

        if (!this.head) {
            return null; // Empty list
        }

        let length = this.listLength();
        let midIndex = Math.ceil(length / 2);

        let curr = this.head;
        for (let i = 0; i < midIndex - 1; i++) {
            curr = curr.next;
        }

        return curr;

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list
        // Hypothesis: The time complexity of this method is O(n)

        let curr = this.head;
        let nextNode = null;
        let prev = null;

        while (curr) {
            nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }

        this.head = prev;
        return this;
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Hypothesis: The time complexity of this method is O(n)

        let prev = null;
        let curr = this.head;

        while (curr) {
            const nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }

        this.head = prev;
        return this;
    }
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Hypothesis: The time complexity of this method is O(n)

        if (!this.head) {
            return null; // Empty list
          }
        
          let length = 0;
          let curr = this.head;
        
          while (curr) {
            length++;
            curr = curr.next;
          }
        
          let midIndex = Math.ceil(length / 2);
          curr = this.head;
        
          for (let i = 0; i < midIndex -1 ; i++) {
            curr = curr.next;
          }
        
          return curr;
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Hypothesis: The time complexity of this method is O(n)

        if (!this.head) {
            return null; // Empty list
        }

        let curr = this.head;
        let prev = null;

        while (curr) {
            // Swap prev and next pointers
            let next = curr.next;
            curr.next = prev;
            curr.prev = next;

            // Move to the next node
            prev = curr;
            curr = next;
        }

        // Update the head and tail pointers
        this.head = prev;
        this.tail = this.head;

        return this;
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Hypothesis: The time complexity of this method is O(n)

        if (!this.head) {
            return null; // Empty list
        }

        let curr = this.head;
        let temp = null;

        // Swap prev and next pointers for each node
        while (curr) {
            temp = curr.prev;
            curr.prev = curr.next;
            curr.next = temp;
            curr = curr.prev; // Move to the next node
        }

        // Update the head and tail pointers
        this.tail = this.head;
        this.head = temp.prev;

        return this.head;
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
