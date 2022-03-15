import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { equipmentContext } from '../../../../ProductContext/EquipmentContext';
import { Link } from 'react-router-dom';



const EquipmentAdd = () => {
    const [values, setValues] = React.useState({  
        title: '',
        image: '',
        price: '',
        type: '',
        description: '',
    })
    

    const { addEquipment } = React.useContext(equipmentContext)
    
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
        addEquipment({...values, price: +values.price})
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
        <h1 style={{textAlign: 'center'}}>Добавить Товар</h1>
        <div style={{display: 'flex', justifyContent: 'space-around', color: 'black'}}>
            <div style={{margin: '10px'}}>
                <img width='300' src={values.image ? values.image : 'https://avatars.mds.yandex.net/i?id=db5407790c705bcbf366a5e267f9d325-4291590-images-thumbs&n=13'} />
            </div>
            <div style={{
                width: '450px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingBottom: '20px'
            }}>
                <form  autoComplete='off' style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TextField style={{padding: '10px'}} name='title' onChange={handleInp} value={values.title} variant='outlined' label='Title'/>
                    <TextField style={{padding: '10px'}} name='image' onChange={handleInp} value={values.image} variant='outlined' label='Image'/>
                    <TextField style={{padding: '10px'}} name='price' onChange={handleInp} value={values.price} variant='outlined' label='Price'/>
                    <TextField style={{padding: '10px'}} name='type' onChange={handleInp} value={values.type} variant='outlined' label='Type'/>
                    <TextField style={{padding: '10px'}} name='description' onChange={handleInp} value={values.description} variant='outlined' label='Description'/>
                </form>
                <Link to='/list2'>
                  <Button onClick={handleSave} variant="contained" color='warning'>Добавить</Button>
                </Link>
            </div>
        </div>
      </Paper>
    </Box>
    );
};

export default EquipmentAdd;