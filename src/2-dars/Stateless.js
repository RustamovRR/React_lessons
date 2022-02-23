import React, { useEffect, useState } from 'react';
import { Grid, TextField } from '@mui/material';

import './App2.css'

function App2(props) {
    // const [forms, setForms] = useState({ username: 'a', email: 'a', password: 'a' })
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    // const handleChange = (e) => {
    //     setForms({ ...forms, [e.target.name]: e.target.value })
    // }
    // console.log(forms)

    return (
        <div className='wrapper_app2'>
            <Grid>
                <TextField
                    variant="outlined"
                    className='input'
                    name="username"
                    label="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Grid>
            <Grid>
                <TextField
                    variant="outlined"
                    className='input'
                    name="email"
                    label="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Grid>
            <Grid>
                <TextField
                    variant="outlined"
                    className='input'
                    name="password"
                    label="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Grid>
        </div>
    );
}

export default App2;
