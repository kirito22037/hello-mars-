class Queue {
    constructor() {
      // Array is used to implement a Queue
      this.data = [];
    }
  
    // Functions to be implemented 
    // enqueue(item) 
    // dequeue() 
    // front() 
    // isEmpty() 
  
    // Adds an element to the queue
    enqueue(item) {
      this.data.push(item);
    }
    // removing element from the queue 
    // returns underflow when called  
    // on empty queue 
  
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.data.shift();
    }
  
    // front function 
    front() {
      // returns the Front element of  
      // the queue without removing it. 
      if (this.isEmpty())
        return "No elements in Queue";
      return this.data[0];
    }
  
    // isEmpty function 
    isEmpty() {
      // return true if the queue is empty. 
      return this.data.length === 0;
    }

    printQueue() 
    { 
        var str = ""; 
        for(var i = 0; i < this.data.length; i++) 
            str += `${this.data[i].row} , ${this.data[i].col}` +" "; 
        return str; 
    } 
  }
  
module.exports = Queue;