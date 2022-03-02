import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import { GlobalContext } from './Context';
import { TablePagination } from '@mui/material';

export default function UsersList() {
    const {
        users,
        dataInfo,
        setSelectedUser,
        page,
        rowsPerPage,
        handleChangePage,
        handleChangeRowsPerPage
    } = useContext(GlobalContext)

    const handleSelect = (data => {
        setSelectedUser(data)
    })

    return (
        <>
            <TablePagination
                component="div"
                count={100}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <h1>Results {dataInfo?.results}</h1>
            <span>Page {dataInfo?.page}</span>
            <List className='list'>
                {users.length
                    ? users.map((item) => (
                        <Link
                            key={item.email}
                            to={`/${item.email}`}
                            className='list_link'
                            onClick={() => handleSelect(item)}
                        >
                            <ListItem >
                                <ListItemAvatar>
                                    <Avatar src={item.picture.medium} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={`${item.name.first} ${item.name.last}`}
                                    secondary={item.phone}
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
        </>
    );
}