// Link: https://challenge.makerpass.com/c/1c3ba217e15098cfa933a04be0f98110

// Description:
// Implement a stack with the following restrictions and methods:

// Restrictions:
// * Do not use an array as storage

// Methods:
// * size should return an integer representing the number of elements in the stack.
// * peek should return the top item of the stack without removing it. If the stack is empty, it should return null.
// * push should add an item to the top of the stack. It should also accept multiple arguments and push them to the stack in order. It should return the topmost value of the stack after the pushing.
// * pop should remove an item off the top of the stack and returned the removed value.

// Code:

var Stack = function(initialValue) {
  this.storage = {}; //top of stack is the end
  this.count = 0;
  if(initialValue){
    this.storage[this.count] = initialValue;
    this.count++;
  }
};

Stack.prototype.size = function() {
  return this.count;
};

Stack.prototype.peek = function() {
  return (this.count) ? this.storage[this.count-1] : null;
};

Stack.prototype.push = function() {
  let args =[...arguments];
  args.forEach( (elem) => {
    this.storage[this.count] = elem;
    this.count++;
  });
  return (this.count) ? this.storage[this.count-1] : null;
};

Stack.prototype.pop = function() {
  if(this.count <= 0)
    return null;
  if(this.count > 0){
    tmp = this.storage[this.count-1];
    delete this.storage[this.count-1];
    this.count--;
    return tmp;
  }
  
};
