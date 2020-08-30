

function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

// let LL = new LinkedList();
// let node1 = new Node(100, "node2", null);

// console.log(node1);

LinkedList.prototype.addToHead = function(value) {
    let newNode = new Node(value, this.head, null);
    
    if(this.head) this.head.prev = newNode;
    else this.tail = newNode;

    this.head = newNode;
};

// let ll = new LinkedList()
// ll.addToHead(100);
// ll.addToHead(200);
// ll.addToHead(300);
// console.log(ll);

LinkedList.prototype.addToTail = function(value) {
    let newNode = new Node(value, null, this.tail);

    if(this.tail) this.tail.next = newNode;
    else this.head = newNode;

    this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
    if(!this.head) return null;
    let val = this.head.value;
    this.head = this.head.next;

    if(this.head) this.head.prev = null;
    else this.tail = null;
    return val;
};

LinkedList.prototype.removeTail = function() {
    if(!this.tail) return null;
    let val = this.tail.value;
    this.tail = this.tail.prev;

    if(this.tail) this.tail.next = null;
    else this.head = null;
    return val;
    
};

LinkedList.prototype.search = function(searchValue) {
    let currentNode = this.head;

    while(currentNode) {
        if(currentNode.value === searchValue) return currentNode.value;
        currentNode = currentNode.next;
    }
    return null;
};

// Create method that returns index of Node

// MINE INITIAL FUNCTION
// LinkedList.prototype.indexOf = function(value) {
//     let currentNode = this.head;
//     let nodesArr = [];
//     let foundNodes = [];

//     if(currentNode) {
//         while(currentNode) {
//             nodesArr.push(currentNode);
//             currentNode = currentNode.next;
//         }  
//         for(const node of nodesArr) {
//             if(node.value === value) {
//                 foundNodes.push(nodesArr.indexOf(node));
//             }  
//         }
//         if(foundNodes.length > 0) return foundNodes;
//         else return null;
//     } return null;
// };

// REFACTORED AFTER VIEWING VIDEO
LinkedList.prototype.indexOf = function(value) {
    let currentNode = this.head;
    let foundIndexes = [];
    let index = 0;

    while(currentNode) {
        if(currentNode.value === value) foundIndexes.push(index);
        currentNode = currentNode.next;
        index++;
    } 
    if(foundIndexes.length !== 0) return foundIndexes;
    else return null;
};


let myLL = new LinkedList()
;
myLL.addToHead(123);
myLL.addToHead(70);
myLL.addToHead("Hello");
myLL.addToTail(19);
myLL.addToTail(70);
myLL.addToHead(123);
myLL.addToTail("World");
myLL.addToTail(20);
myLL.addToHead(123);

// console.log(myLL.search(10));
console.log(myLL.indexOf(70));
console.log(myLL.indexOf(19));
console.log(myLL.indexOf("World"));
console.log(myLL.indexOf(123));
console.log(myLL.indexOf(2123));