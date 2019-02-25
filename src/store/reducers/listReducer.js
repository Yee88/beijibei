export var listReducer=(preState=[],action)=>{
    let {type,payload}=action;
    switch(type){
        case "addlist":
        var newlist=[...preState,...payload];
        return newlist;
        case "removelist":
        var newlist=[...preState,...payload];
        return newlist;
        default:
        return preState;
    }
}