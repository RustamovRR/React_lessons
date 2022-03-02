import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GlobalContext } from './Context';

export default function UserInfoCard() {
    const navigate = useNavigate()
    const { selectedUser, handleDelete } = useContext(GlobalContext)

    const handleBack = () => {
        navigate('/')
    }

    const handleRemove = (email) => {
        navigate('/')
        handleDelete(email)
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="300"
                image={selectedUser?.picture.large}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {selectedUser.name.first} {selectedUser.name.last}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {`${selectedUser.email} ${selectedUser.phone}`}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    onClick={handleBack}
                >
                    Back
                </Button>
                <Button
                    size="small"
                    color="error"
                    onClick={() => handleRemove(selectedUser.email)}
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}
