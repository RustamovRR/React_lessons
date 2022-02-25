import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';

export default function UsersList() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=5')
            .then((res) => res.json())
            .then((res) => setUsers(res.results))
    }, [])
    console.log(users)

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {users.length
                ? users.map((user) => (
                    <ListItem key={user.registered.date}>
                        <ListItemAvatar>
                            <Avatar src={user.picture.medium} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={`${user.name.first} ${user.name.last}`}
                            secondary={user.email}
                        />
                    </ListItem>
                )) : (
                    <div className='progress'>
                        <CircularProgress />
                    </div>
                )
            }
        </List>
    );
}