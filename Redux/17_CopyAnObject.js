const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'ONLINE':
            // Don't mutate state here or the tests will fail
            let sourceObject = {  status: 'online'};
            let newObject = Object.assign({}, state, sourceObject)
            return newObject;
        default:
            return state;
    }
};

const wakeUp = () => {
    return {
        type: 'ONLINE'
    }
};

const store = Redux.createStore(immutableReducer);
