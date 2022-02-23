import React from 'react';
import { AppBar, Button, TextField, Toolbar } from '@mui/material';


class Statefull extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            add: 0
        }
    }

    componentDidMount() {
        console.log('initial value', this.state)
    }

    componentDidUpdate() {
        document.title = this.state.input
        console.log('updated value', this.state)
    }

    handleChange = (e) => {
        this.setState({ input: e.target.value })
    }

    handleAdd = () => {
        this.setState({ add: this.state.add + 1 })
    }

    render() {
        const { input, add } = this.state

        return (
            <div className='wrapper_app2'>
                <AppBar className='app2'>
                    <Toolbar>
                        <TextField
                            variant="outlined"
                            className='input'
                            value={input}
                            onChange={this.handleChange}
                        />

                    </Toolbar>
                    <Button
                        variant="contained"
                        className="button"
                        onClick={() => this.handleAdd()}
                    >
                        Increment {add}
                    </Button>
                </AppBar>
            </div>
        )
    }
}

export default Statefull