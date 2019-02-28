export var usesListReducer = (prevState=[],action)=>{
    

    let {type,payload} = action;

    switch(type){
        case "addList":
            

            return [...prevState,...payload]
        case "removeList":

            return prevState
        default:
            return prevState;
    }

    // return prevState;//返回一个新状态
}
