export var navbarReducer=(preState=true,action)=>{
    let {type,payload}=action;
    switch (type){
        case "Shownavbar":
        return payload;
        case "Hidenavbar":
        return payload;
        default:
        return preState;
    }
}