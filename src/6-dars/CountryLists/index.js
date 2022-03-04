import { Button, Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../Context';
import CountryCard from '../CountryCard';
import CircularProgress from '@mui/material/CircularProgress';

export default function CountryLists() {
    const [alignment, setAlignment] = useState('name');
    const { searchValue, countries, setCountries } = useContext(GlobalContext)

    useEffect(() => {
        handleSearch()
        handleSort()
    }, [searchValue, alignment])

    const handleSearch = () => {
        setCountries(countries.filter((item) => item.name.toLowerCase().includes(searchValue)))
    }

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const handleSort = () => {
        if (alignment == 'name') {
            setCountries(countries.sort((a, b) => {
                const nameA = a.name.toLowerCase()
                const nameB = b.name.toLowerCase()
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            }))
        } else {
            setCountries(countries.sort((a, b) => b[alignment] - a[alignment]))
        }
    }

    return (
        <>
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
                style={{
                    margin: 20
                }}
                onClick={(e) => handleSort(e.target.value)}
            >
                <ToggleButton value="name" aria-label="left aligned">
                    Nomi bo'yicha
                </ToggleButton>
                <ToggleButton value="area" aria-label="centered" >
                    Maydoni bo'yicha
                </ToggleButton>
                <ToggleButton value="population" aria-label="right aligned">
                    Aholisi bo'yicha
                </ToggleButton>
            </ToggleButtonGroup>

            <Grid container columns={{ xs: 4, sm: 8, md: 24 }}>
                {countries.length ? (
                    countries.map((item) => (
                        <Grid item md={6}>
                            <CountryCard
                                item={item}
                            />
                        </Grid>
                    ))
                ) : (
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '30vh'
                        }}
                    >
                        <CircularProgress />
                    </div>
                )}
            </Grid>
        </>
    );
}
