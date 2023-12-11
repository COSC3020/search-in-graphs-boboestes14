function depthFirstSearch(grap, startNod, targetNod) {
    ans = depthFirstSearch2(grap, startNod, targetNod)
    if(ans[0] != -1){
        return ans
    }
    return []
}

function depthFirstSearch2(graph, startNode, targetNode) {
    let cha = graph
    cha[startNode].push("v")
    if(startNode == targetNode){
        return [targetNode];
    }
    
    for(let n = 0; n < cha[startNode].length-1; n++){
        if(cha[cha[startNode][n]][cha[cha[startNode][n]].length-1] != "v"){
            a = [startNode].concat(depthFirstSearch2(cha, cha[startNode][n], targetNode))
            if(a[a.length-1] != -1){
                return a}
            a.pop()
        }
    }
    return [-1];
}