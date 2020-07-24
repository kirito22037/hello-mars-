class Queue {
    constructor() {
      this.data = [];
    }
   
    // Adds an element to the queue
    enqueue(item) {
      this.data.push(item);
    }
    
    
    // removing element from the queue 
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.data.shift();
    }
  
    // returns the Front element of
    front() { 
      if (this.isEmpty())
        return "No elements in Queue";
      return this.data[0];
    }
  
    // isEmpty function 
    // return true if the queue is empty.
    isEmpty() {
       
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
  
export default Queue;