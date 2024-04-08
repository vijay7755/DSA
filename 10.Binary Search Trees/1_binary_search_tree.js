class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        var node = new Node(val);
        if(!this.root) {
            this.root = node;
            return this;
        }
        var current = this.root;
        while(true) {
            if(val === current.value) return undefined;
            
            if(val < current.value) {
                if(current.left === null) {
                    current.left = node
                    return this
                }
                current = current.left
            } else {
                if(current.right === null) {
                    current.right = node
                    return this
                }
                current = current.right
            }
        }
    }

    find(val) {
        if(this.root === null) return false
        var current = this.root
        var found = false
        if(val === this.root.value) return true
        while(current && !found) {
            if(val < current.value) {
                current = current.left
            } else if(val > current.value) {
                current = current.right
            } else {
                found = true
            } 
        }
        if(!found) return "value not found!";
        return current;
    }

    // Tree traversal
    
    BFS() {
        var queue = [];
        var data = [];
        var node = this.root;

        queue.push(node)
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        return data // [10, 6, 15, 3, 8, 11, 20]
    }

    DFSPreOrder() {
        var data = [];
        var current = this.root;

        function traverse(node) {
            data.push(node.value)
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current)
        return data; // [10, 6, 3, 8, 15, 11, 20]
    }

    DFSPostOrder() {
        var data = [];
        var current = this.root;

        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }

        traverse(current)
        return data // [3, 8, 6, 11, 20, 15, 10]
    }

    DFSInOrder() {
        var data = [];
        var current = this.root;

        function traverse(node) {
            if(node.left) traverse(node.left)
            data.push(node.value)
            if(node.right) traverse(node.right)
        }
        traverse(current)
        return data; // [3, 6, 8, 10, 11, 15, 20]
    }
}

var tree = new BinarySearchTree();
// tree.root = new Node(10)
// tree.root.left = new Node(7)
// tree.root.right = new Node(15)

// tree.insert(10);
// tree.insert(6);
// tree.insert(15);
// tree.insert(3);
// tree.insert(8);
// tree.insert(20);
// tree.insert(11);