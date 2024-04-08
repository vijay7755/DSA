# Trees
Trees are data structure that consists of nodes in parent/child relationship.
Each node represents one or more node.
Each node can point to child only. (It can't point back to parent or siblings).
Always have one root. The top node is the root

# Comparison of Trees and Lists
Lists - Linear
Trees - Non-Linear

# Tree Terminology
### Root
The top node in a tree
### Child
A node directly connected to another node when moving away from the root
### Parent
The converse notaion of a child.
### Siblings
A group of nodes with the same parent.
### Leaf
A node with no children
### Edge
The connection between one node and another


# Trees use cases
* HTML DOM
* Network Routing
* Abstract Syntax Trees
* Artificial intelligence
* COmputer FIle System
* JSON

# Binary Search Tree
In Binary search tree, each node can have maximum of only two nodes. (Can be two, on or Zero. Not more than two).
Every node to the left of parent node will always be less than the parent node
Every node to the riht of parnet node will always be greater than the paren tnode

# Big O Notatation
## Time Complexity
* Insertion - O(log n)
* Searching - O(log n)
2x number of nodes = 1 extra step
4x number of nodes = 2 extra steps
8x number of nodes = 3 extra steps

