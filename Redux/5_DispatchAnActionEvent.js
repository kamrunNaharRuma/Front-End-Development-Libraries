const store = Redux.createStore(
    (state = {login: false}) => state
);

const loginAction = () => {
    return {
        type: 'LOGIN'
    }
};

store.dispatch(loginAction())
// Dispatch the action here:

function c2saiful() {

}




// store.js

const state = {
    name: "omran",
    uni: "Bonton Connect"
};

export const store = createStore(function reduce(state, action) {
    if (action.type === 'CHANGE-MENTOR') {
        return {
            ...state,
            name: action.mentor
        };
    }

    return state;
}, state);





// MyComp.js

function s2p(s) {
    return {
        mentorName: s.name
    };
}

function d2p(d) {
    return {
        changeMentor: d({ type: 'CHANGE-MENTOR', mentor: 'saiful' })
    };
}

function MyComp(ps) {
    function c2saiful() {
    }

    return (
        <div>
            <span>{ps.name} - {ps.mentorName}</span>
            <button onClick={c2saiful}>Change Mentor To Saiful Sir</button>
        </div>
    )
}

const WC = connect(s2p, d2p)(MyComp);




// App.js

<WC name="ruma"/>
