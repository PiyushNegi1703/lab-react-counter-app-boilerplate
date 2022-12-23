import React from 'react'

export default class CounterApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count : 0
        }
    }

    increment = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count : this.state.count - 1
        })
    }

    reset = () => {
        this.setState({
            count : 0
        })
    }

    render() {
        return(
            <div className='container'>
                <h1>Counter App</h1>

                <h2>{this.state.count}</h2>

                <div className='buttons'>
                    <button onClick={() => this.increment()}>+</button>
                    <button onClick={() => this.decrement()}>-</button>
                    <button onClick={() => this.reset()}>Reset</button>
                </div>
            </div>
        )
    }
}