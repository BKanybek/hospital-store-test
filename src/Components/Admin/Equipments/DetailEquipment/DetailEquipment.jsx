import { ShoppingBag } from '@mui/icons-material';
import { IconButton, Paper, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { equipmentContext } from '../../../../ProductContext/EquipmentContext';

// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import ImgCard from '../ImgCard/'

const DetailEquipment = () => {
    const {id} = useParams()
    const { detail, getDetail,  checkEquipmentInCart, addToCart } = useContext(equipmentContext)
    useEffect(() => {
        getDetail(id)
    }, [id])

    return (
        <>
            <Paper  sx={{width: '100%', height: '100%', padding: "100px 0", boxShadow: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center',}}>
                <Typography variant='h2' style={{textAlign: 'center', paddingBottom: '20px'}}>Medical equipment</Typography>
                {
                    detail ? (
                        <div  style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'start', padding: 20,  flexWrap: 'wrap'}}>
                            <div>
                                <img width='320' src={detail.image}/>
                            </div>
                            <div style={{
                                width: '450px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex=start',
                                textAlign: 'start',
                                justifyContent: 'center',
                                padding: '0 30px',
                            }}>
                                <Typography sx={{paddingBottom: '25px'}}  variant='h4' sx={{py: 2}}>{detail.title}</Typography>
                                <Typography sx={{paddingBottom: '25px'}}  variant='h5'>{detail.type}</Typography>
                                <Typography variant='h5'>{detail.description}</Typography>
                                <div style={{display: 'flex'}}>
                                    <Typography variant='h5' sx={{py: 2}}>$ {detail.price}</Typography>
                                    <IconButton sx={{marginLeft: '50px'}} onClick={() => {
                                        addToCart(detail)  
                                        }} 
                                        color = { checkEquipmentInCart(detail.id) ? 'success' : 'primary'}  
                                        >
                                        <ShoppingBag />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    ): (<h1> Loading . . .</h1>)
                }
            </Paper>
        </>
    );
};

export default DetailEquipment;








