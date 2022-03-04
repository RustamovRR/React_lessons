import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useModalStyles } from './style';

export default function InfoModal({ data, open, setOpen }) {
    const classes = useModalStyles()

    const infoData = [
        { title: 'Poytaxt:', value: data.capital },
        { title: 'Qita:', value: data.region },
        { title: 'Pul birliklari:', value: data.currencies?.map((item) => item.name) },
        { title: 'Aholisi:', value: data.population },
        { title: 'Maydoni:', value: data.area },
        { title: 'Tillari:', value: data?.languages?.map((item) => item.name).join(', ') },
        { title: 'Chegaralari:', value: data?.borders?.map((item) => item).join(', ') },
    ]

    return (
        <div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.box}>
                    <Typography variant="h6" component="h2" className={classes.title} >
                        {data.name}
                    </Typography>
                    {
                        infoData.map((item) => (
                            <Typography key={item.title}>
                                <span className={classes.itemKey}>{item.title}</span> {item.value}
                            </Typography>
                        ))
                    }
                </Box>
            </Modal>
        </div>
    );
}
