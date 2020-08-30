

// RECURSION


// Factorial (!)
//  4! = 4 * 3 * 2 * 1 = 24
//  3! = 3 * 2 * 1 = 6


function factorial(num) {
    if(num === 1) {
        // console.log("num === 1:", num);
        return num;
    } else {
        // console.log("num:", num);
        // console.log(num * factorial(num -1));
        return num * factorial(num -1);
    } 
}

// factorial(4);
// console.log(factorial(4));

function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function(value) {
    if(value <= this.value) {
        if(!this.left) this.left = new BST(value);
        else this.left.insert(value);
    } 
    else if(value > this.value) {
        if(!this.right) this.right = new BST(value);
        else this.right.insert(value);
    }
};

BST.prototype.contains = function(value) {
    if(value === this.value) {
        return true;
    }
    else if(value < this.value) {
        if(!this.left) return false;
        else return this.left.contains(value);
    }
    else if(value > this.value) {
        if(!this.right) return false;
        else return this.right.contains(value);
    }
};


BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
    if(order === 'pre-order') iteratorFunc(this.value);
    if(this.left)  this.left.depthFirstTraversal(iteratorFunc, order);
    if(order === 'in-order') iteratorFunc(this.value);
    if(this.right) this.right.depthFirstTraversal(iteratorFunc, order);
    if(order === 'post-order') iteratorFunc(this.value);
};

BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
    let queue = [this]; 
    
    while(queue.length) {
        let treeNode = queue.shift();
        iteratorFunc(treeNode);
        if(treeNode.left) queue.push(treeNode.left);
        if(treeNode.right) queue.push(treeNode.right);
    }
};

BST.prototype.getMinVal = function(iterator) {
    let nodeList = [];
    // iterator(this);
    while(this) {
        let treeNode = this.shift();
        nodeList.push(treeNode);
        iterator(nodeList);
    }
}

BST.prototype.getMaxVal = function(iteratorFunc) {
    
}


// function log(value) { // For depth first traversal
//     console.log(value);
// }

function log(node) { // For breadth first traversal
    console.log(node.value);
}


let bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

// console.log(bst.right.right);
// console.log(bst.contains(15));

// bst.depthFirstTraversal(log, 'post-order');
// bst.breadthFirstTraversal(log);

bst.getMinVal(log);
