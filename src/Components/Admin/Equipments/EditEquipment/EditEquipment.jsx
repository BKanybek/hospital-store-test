import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import{ Link, useParams } from 'react-router-dom';
import { equipmentContext } from '../../../../ProductContext/EquipmentContext';


export default function EditEquipment  () {
    const [values, setValues] = useState({
        title: '',
        image: '',
        price: '',
        type: '',
        description: ''
    })

    const { edit, editEquipment, saveEditedEquipment } = React.useContext(equipmentContext)
    const {id} = useParams()

    React.useEffect(()=>{
        editEquipment(id)
    }, [id])

    React.useEffect(() => {
        if(edit) {
            setValues(edit)
        }
    }, [edit])

    const handleEditInp = (e) => {
        let obj ={
            ...values,
            [e.target.name]: e.target.value
        }
        setValues(obj)
    }

    const handleSave = () => {
        saveEditedEquipment({...values, id})
    }



    return (
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m:'40px auto',
          maxWidth: 1000,
          height: 'auto',
          padding: '10px'
        },
      }}
    >
        <Paper elevation={3}>
            <h1>Изменить данные</h1>
                <div style={{
                    display: 'flex',
                    justifyContent:'space-around',
                    color: 'black'
                }}>
                    <div>
                        <img width='300' src={values.image} alt={values.title} />
                    </div>
                    <div style={{
                         width: '450 px',
                         display: 'flex',
                         alignItems:'center',
                         flexDirection: 'column',
                         justifyContent: 'center'
                    }}>
                        <form noValidate
                        autoComplete='off' style={{
                            display: 'flex', 
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <TextField 
                        style={{padding: '10px'}} name='title' 
                        onChange={handleEditInp} 
                        value={values.title} variant='outlined' 
                        label='Title'/>
                    <TextField 
                        style={{padding: '10px'}} name='image' 
                        onChange={handleEditInp} 
                        value={values.image} variant='outlined' 
                        label='Image'/>
                    <TextField 
                        style={{padding: '10px'}} name='price' 
                        onChange={handleEditInp} 
                        value={values.price} variant='outlined' 
                        label='Price'/>
                    <TextField 
                        style={{padding: '10px'}} name='type' 
                        onChange={handleEditInp} 
                        value={values.type} variant='outlined' 
                        label='Type'/>
                    <TextField 
                        style={{padding: '10px'}} name='description' 
                        onChange={handleEditInp} 
                        value={values.description} variant='outlined' 
                        label='Description'/>
                </form>
                <Link to='/list2'>
                    <Button onClick={handleSave} variant='contained' color='warning'>Save</Button>
                </Link>
                    </div>
            </div>
      </Paper>
    </Box>
  );
}

