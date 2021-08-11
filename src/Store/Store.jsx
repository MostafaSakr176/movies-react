import { createStore } from "redux";


let inittialState = {
    counter:0
};


function reducer(prevState = inittialState , action){
    
    if (action.type === "increment") {
        

        return  {counter : prevState.counter + 1} 
        
    }

    return prevState

}


let store = createStore(reducer);


export default store