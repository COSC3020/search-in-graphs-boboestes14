[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12560452&assignment_repo_type=AssignmentRepo)
# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the source to the target (not
the list of nodes that you looked at during the search). Start with the template
I provided in `code.js` and test your new function. I have not provided any test
code, but you can base yours on test code from other exercises.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Runtime Analysis
The worst-case big $\Theta$ complexity of my implementation would be v + n. This is 
because my implementation can at most go over every vertice twice minus one, and we have to travel over and mark every node at least once. This is because it can't travel back to a node it's already visited, except when backtracking. The only node it will travel to once will be the ending node. So the complexity would be 2v-1+2n-3, but after getting rid of constants we get v + n as the big $\Theta$ complexity. 


## Bonus

Implement and analyze breadth-first search.
