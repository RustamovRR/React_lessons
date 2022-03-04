import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoModal from '../InfoModal';

const CountryCard = ({ item }) => {
    const [openModal, setOpenModal] = React.useState(false);

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={item.flags.png}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.capital} <br />
                        {item.subregion}<br />
                        {item.region}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => setOpenModal(true)}>
                        Open Info
                    </Button>
                    <Button size="small" color="error">Delete</Button>
                </CardActions>
            </Card>

            <InfoModal open={openModal} setOpen={setOpenModal} data={item}/>
        </>
    )
}

export default CountryCard