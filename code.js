function depthFirstSearch(graph, startNode, targetNode, trueStartNode) {
    let cha = graph
    cha[startNode].push("v")
    if(startNode == targetNode){
        return [targetNode];
    }
    
    for(let n = 0; n < cha[startNode].length-1; n++){
        if(cha[cha[startNode][n]][cha[cha[startNode][n]].length-1] != "v"){
            a = [startNode].concat(depthFirstSearch(cha, cha[startNode][n], targetNode, trueStartNode))
            if(a[a.length-1] != -1){
                return a}
            a.pop()
        }
    }
    if(startNode == trueStartNode){
        return []
    }
    return [-1];
}