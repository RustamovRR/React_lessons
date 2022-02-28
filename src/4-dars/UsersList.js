import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';

export default function UsersList({ users, setUsers }) {

    useEffect(() => {
        fetch('https://breakingbadapi.com/api/characters')
            .then((res) => res.json())
            .then((res) => setUsers(res))
    }, [])

    return (
        <List>
            {users.length
                ? users.map((user) => (
                    <Link
                        key={user.char_id}
                        to={`/${user.char_id}`}
                        className='list_link'
                    >
                        <ListItem >
                            <ListItemAvatar>
                                <Avatar src={user.img} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={user.name}
                                secondary={user.nickname}
                            />
                        </ListItem>
                    </Link>
                )) : (
                    <div className='progress'>
                        <CircularProgress />
                    </div>
                )
            }
        </List>
    );
}