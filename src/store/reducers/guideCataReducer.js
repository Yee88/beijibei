export var guideCataReducer=(preState=[],action)=>{
    let {type,payload}=action;
    switch(type){
        case "getCata":
            var newlist=[...payload];
            console.log(newlist)
            return newlist;
        // case "Showcata":
        // 	return payload;
        // case "Hidecata":
       	// 	return payload;
        default:
            return preState;
    }
}