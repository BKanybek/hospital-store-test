   
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { styled } from '@mui/material/styles'
import {Box, Grid, Paper, FormControl, RadioGroup,    FormControlLabel, Radio, Button, Slider 
} from '@mui/material'
import { equipmentContext } from '../../../../ProductContext/EquipmentContext';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const FilterEquipments = () => {
    const search = new URLSearchParams(window.location.search)
    const navigate = useNavigate()
    const { getEquipments} = useContext(equipmentContext)
    const [type, setType] = useState(search.get('type') || '') 
    const [price, setPrice] = useState(search.get('price_lte') || 0)

    const [searchParams, setSearchParams] = useSearchParams()


    const filterEquipments = (key, value) => {
        search.set(key, value)
        let newPath = `${window.location.pathname}?${search.toString()}`
        navigate(newPath)
        setType(search.get('type') || '')
        setPrice(+search.get('price_lte' || 0))
        getEquipments()
    }

    const handleChangeType = (e, value) => {
        search.set(e, value)
        let newPath = `${window.location.pathname}?${search.toString()}`
        navigate(newPath)
        setType(search.get('type') || '')
        getEquipments()
    }

    const resetFilter = () => {
        navigate('/')
        setType('')
        setPrice(0)
        setSearchParams({
            '_limit': 6,
            "_page": 1
        })
        getEquipments()
    }
    
    
    return (
        <Box sx={{ flexGrow: 1, display: 'flex', paddingTop: '10px'}}>
            <Grid container spacing={1} sx={{display: 'flex', justifyContent: 'center', paddingTop: '50px', boxShadow: 'none', margin: '0 10px'}}>
                <Grid>
                    <Paper sx={{boxShadow: 'none', display: 'flex', flexDirection: 'column'}}>
                        <FormControl component='fieldset'>
                            <RadioGroup    
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                aria-label='gender' 
                                // name='gender1' 
                                value={type} 
                                onChange={(e) => handleChangeType("type", e.target.value)}
                            >
                                <FormControlLabel 
                                    value='equipments'
                                    control={<Radio/>}
                                    label="Equipments"
                                />
                                <FormControlLabel
                                    value='drug'
                                    control={<Radio/>}
                                    label="Drug"
                                />
                                <FormControlLabel
                                    value='accessories'
                                    control={<Radio/>}
                                    label="Accessories"
                                />
                            </RadioGroup>
                        </FormControl>
                        
                        <Grid sx={{display: 'flex', justifyContent: 'center'}}> 
                            <Slider sx={{color: 'black'}}
                                onChange={(e) => filterEquipments('price_lte', e.target.value)} valueLabelDisplay='auto' max={100000}
                                value={price}
                                step={500}
                            />
                        </Grid>
                        <Button sx={{background: 'black'}} onClick={resetFilter}
                            variant='contained'>
                            Reset
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
            
        </Box>
    );
};

export default FilterEquipments;
