const INCREMENT = "INCREMENT"; // Define a constant for increment action types
const DECREMENT = "DECREMENT"; // Define a constant for decrement action types

const counterReducer = (state=0, action)=>{
    switch (action.type){
        case INCREMENT:
            state = state+1
            return state;
        case DECREMENT:
            state = state-1
            return state
        default:
            return state;
    }
}; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = ()=>{
    return {
        type : INCREMENT
    }
}; // Define an action creator for incrementing

const decAction = () => {
    return {
        type: DECREMENT
    }
}; // Define an action creator for decrementing

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers
