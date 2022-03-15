import React, { useContext, useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import './Slider.css';
import { Link, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { productContext } from '../../../ProductContext/ProductContext';
import { height } from '@mui/system';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];



const Slider = () => {
    const { products, getProducts } = useContext(productContext)
    const [searchParams, setSearchParams] = useSearchParams()
    const [limit, setLimit] = useState()
    const [page, setPage] = useState(searchParams.get('_page') ? searchParams.get("_page") : 1)


    useEffect(() =>{
        setSearchParams({
            '_limit': limit,
            "_page": page
        })
    }, [limit, page])


    useEffect(() => {
        getProducts()
    }, [])

    
    return (
      <>
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
          <h1 style={{padding: '0 15px', margin: '30px 0'}}>Our Doctors</h1>
        </div>
            <div className='Slider' >
              <Carousel breakPoints={breakPoints} >
                  {
                    products ? (
                      products.map((item, index) => (
                        <Item  key={index}> 
                          <Card>
                            <Link to={`/detail/${item.id}`} style={{textDecoration: 'none', color: 'black'}}> 
                              <CardMedia
                                sx={{width: '250px', height: '160px'}}
                                component="img"
                                image={item.image}
                                alt={item.name}
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                  {item.name}
                                </Typography>
                              </CardContent>
                              <CardContent>
                                <Typography >
                                    {item.type}
                                </Typography>
                              </CardContent>
                            </Link>
                        </Card>
                        </Item>
                    ))
                  ): (<h1>Loading...</h1>)
                }
              </Carousel>
            </div>
      </>
    );
};

export default Slider;