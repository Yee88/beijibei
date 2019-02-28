export var communityListReducer = (prevState=[],action)=>{
    

    let {type,payload,loading} = action;
    
    switch(type){
        case "communityList":
            

            return [...prevState,...payload]
        case "removeList":

            return prevState
        default:
            return prevState;
    }

    // return prevState;//返回一个新状态
}
