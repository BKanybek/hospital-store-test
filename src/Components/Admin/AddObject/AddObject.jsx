import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { productContext } from '../../../ProductContext/ProductContext';

const AddObject = () => {
    const [values, setValues] = React.useState({
        name: '',
        type: '',
        description: '',
        image: '',
    })

    const { addProduct } = React.useContext(productContext)
    const navigate = useNavigate()

    const handleInp = (e) => {
      let obj = {
          ...values,
          [e.target.name]: e.target.value
      }
      setValues(obj)
  }

    const handleSave = () => {
        if(!values.image) values.image = ''
        addProduct({...values, price: +values.price})
        navigate('/')
    }

    return (
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: '40px auto',
          maxwidth: 1000,
          height: 'auto',
        },
      }}
    >
      <Paper elevation={3}>
        <h1 style={{textAlign: 'center'}}>Добавить персонал</h1>
        <div style={{display: 'flex', justifyContent: 'space-around', color: 'black'}}>
            <div style={{margin: '10px'}}>
                <img width='300' src={values.image ? values.image : 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_960_720.png' } />
            </div>
            <div style={{
                width: '450px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <form  autoComplete='off' style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TextField style={{padding: '10px'}} name='name' onChange={handleInp} value={values.name} variant='outlined' label='Name'/>
                    <TextField style={{padding: '10px'}} name='type' onChange={handleInp} value={values.type} variant='outlined' label='Type'/>
                    <TextField style={{padding: '10px'}} name='image' onChange={handleInp} value={values.image} variant='outlined' label='Image'/>
                    <TextField style={{padding: '10px'}} name='description' onChange={handleInp} value={values.description} variant='outlined' label='Description'/>
                </form>
                <Link to='/list'>
                 <Button onClick={handleSave} variant="contained" color='warning'>Добавить</Button>  
                </Link>
            </div>
        </div>
      </Paper>
    </Box>
    );
};

export default AddObject;