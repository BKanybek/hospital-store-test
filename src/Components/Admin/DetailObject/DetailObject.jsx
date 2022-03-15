import {  Paper, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../../../ProductContext/ProductContext';
import './DetailObject.css'


const DetailObject = () => {
    const {id} = useParams()
    const { detail, getDetail } = useContext(productContext)
    console.log(detail, 'detail')
    useEffect(() => {
        getDetail(id)
    }, [id])


    return (
        <>
            <Paper style={{  
                backgroundImage: `url('https://phonoteka.org/uploads/posts/2021-04/1619713229_31-phonoteka_org-p-fon-dlya-prezentatsii-bolnitsa-32.jpg')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }} sx={{width: '100%', height: '75vh', boxShadow: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center',}}>
                <Typography className='title' variant='h2' style={{textAlign: 'center', paddingBottom: '20px'}}>О специалисте</Typography>
                {
                    detail ? (
                        <div  style={{ background: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'start', padding: 20,  flexWrap: 'wrap'}}>
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
                                <Typography sx={{paddingBottom: '25px'}} variant='h4'>{detail.name}</Typography>
                                <Typography sx={{paddingBottom: '10px'}} variant='h5'>{detail.type}</Typography>
                                <Typography variant='h5'>{detail.description}</Typography>
                                <div style={{display: 'flex'}}>
                                    {/* <IconButton sx={{paddingLeft: '50px'}} onClick={() => {
                                        addToCart(detail)  
                                        }} 
                                        color = {checkProductInCart(detail.id) ? 'success' : 'primary'}  
                                        >
                                        <ShoppingBag />
                                    </IconButton> */}
                                </div>
                            </div>
                        </div>
                    ): (<h1> Loading . . .</h1>)
                }
            </Paper>
        </>
    );
};

export default DetailObject;








