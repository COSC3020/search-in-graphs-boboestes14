function depthFirstSearch(graph, startNode, targetNode) {
    graph[startNode].push("v")
    if(startNode == targetNode){
        return [targetNode];
    }
    
    for(let n = 0; n < graph[startNode].length-1; n++){
        if(graph[graph[startNode][n]][graph[graph[startNode][n]].length-1] != "v"){
            a = [startNode].concat(depthFirstSearch(graph, graph[startNode][n], targetNode))
            if(a[a.length-1] != -1){
                return a}
            a.pop()
        }
    }
    return [-1];
}