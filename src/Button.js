import React, { Component } from 'react';

class Button extends Component {

    constructor(props) {
        super(props)
        this.state = {
            location: 'Uzbekistan'
        }
    }

    componentDidMount() {
        console.log(this.state.location)
    }

    componentDidUpdate() {
        console.log(this.state.location)
    }

    componentWillUnmount() {
        alert('component is unmountend')
    }

    handleClick = () => {
        // this.state.location = 'Rossiya'
        this.setState({ location: 'Rossiya' })
    }

    render() {

        return (
            <div
                className={`button ${this.props.isCanceled ? 'canceled' : ''}`}
                onClick={() => this.handleClick()}
            >
                {this.state.location}
            </div>
        )
    }
}

export default Button