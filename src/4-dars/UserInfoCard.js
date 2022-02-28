import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function UserInfoCard({ users, setUsers }) {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://breakingbadapi.com/api/characters/${id}`)
            .then((res) => res.json())
            .then((res) => setUser(res[0]))
    }, [])

    const handleBack = () => {
        navigate('/')
    }

    const handleDelete = () => {
        navigate('/')
        setUsers(users.filter((item) => item.char_id !== user.char_id))
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="300"
                image={user?.img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {user?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {`${user?.status} ${user?.birthday}`}
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
                    onClick={handleDelete}
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}
