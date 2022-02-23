import React from 'react';
import { Grid, TextField } from '@mui/material';
import useForm from './useForm';

import './App2.css'

function App2(props) {
    const username = useForm('a')
    const email = useForm('a')
    const password = useForm('a')

    return (
        <div className='wrapper_app2'>
            <Grid>
                <TextField
                    label="username"
                    value={username.value}
                    onChange={username.onChange}
                    // {...username}
                     />
            </Grid>
            <Grid>
                <TextField label="email"{...email} />
            </Grid>
            <Grid>
                <TextField label="password" type="password"{...password}
                />
            </Grid>
        </div>
    );
}

export default App2;
