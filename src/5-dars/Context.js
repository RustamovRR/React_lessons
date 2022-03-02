import React, { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [dataInfo, setDataInfo] = useState(null)
    const [selectedUser, setSelectedUser] = useState(null)
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const URL = `https://randomuser.me/api/?page=${page}&results=${rowsPerPage}`

    useEffect(() => {
        fetchUsers()
    }, [page, rowsPerPage])
    console.log(page)

    const fetchUsers = async () => {
        const fetchRes = await fetch(URL)
        const data = await fetchRes.json()
        setUsers(data.results)
        setDataInfo(data.info)
    }

    const handleDelete = (email) => {
        setUsers(users.filter((item) => item.email !== email))
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const state = {
        users,
        dataInfo,
        setUsers,
        selectedUser,
        setSelectedUser,
        handleDelete,
        page,
        rowsPerPage,
        handleChangePage,
        handleChangeRowsPerPage
    }

    return (
        <GlobalContext.Provider value={state}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider