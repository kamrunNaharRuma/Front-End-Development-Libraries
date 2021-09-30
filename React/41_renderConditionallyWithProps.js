class Results extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        {return this.props.fiftyFifty ? <h1>You Win!</h1> : <h1>You Lose!</h1>}

    }
}

class GameOfChance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => {
            // Complete the return statement:
            console.log(prevState)
            return {
                counter: prevState.counter+1
            }
        });
    }
    render() {
        const expression = Math.random() >= .5; // Change this line
        return (
            <div>
                <button onClick={this.handleClick}>Play Again</button>
                {<Results fiftyFifty={expression}/>}

                {/* Change code above this line */}
                <p>{'Turn: ' + this.state.counter}</p>
            </div>
        );
    }
}
