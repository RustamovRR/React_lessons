import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Drawer from '@mui/material/Drawer';

const LeftMenu = (props) => {
    const { open, setOpen } = props
    const handleClose = () => setOpen(false)

    return (
        <Drawer
            elevation={100}
            open={open}
            onClose={handleClose}
        >
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/dashboard'>Dashboard</Link>
        </Drawer>
    )
}

export default LeftMenu