import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import ProductStar from '../../ProductStar/ProductStar';
import { productContext } from '../../ProductContext/ProductContext';

export default function ProductCard({item}) {
    const {deleteProduct, useAuth} = React.useContext(productContext)
    const currentUser = useAuth()
  



    let icons = (
      <CardActions disableSpacing>
          {currentUser?.email === "admin1@gmail.com" ? (
              <Link to={`edit/${item.id}`}>
                  <IconButton>
                    <EditIcon/>
                  </IconButton>
              </Link>
            ) : null
          } 

          {currentUser?.email === "admin1@gmail.com" ? (
                <IconButton onClick={() => deleteProduct(item.id)}>
                <DeleteIcon />
                </IconButton>
            ) :null
          }

          {/* <IconButton onClick={() => {
            addToCart(item)  
          }} 
            color = {checkProductInCart(item.id) ? 'success' : 'primary'}  
          >
            <ShoppingBagIcon />
          </IconButton> */}
      </CardActions>
    )
  return (
    <>
          <Card sx={{ maxWidth: 306, minWidth: 306 }}>
            <Link to={`/detail/${item.id}`} style={{textDecoration: 'none', color: 'black'}}> 
              <CardMedia 
                width='300px'
                height='250px'
                component="img"
                image={item.image}
                alt={item.title}
              /> 

                <Typography sx={{paddingTop: '5px', fontSize: '20px', textAlign: 'center'}}>
                  {item.name}
                </Typography>  
              <Typography sx={{fontSize: '20px', color: 'black', textAlign: 'center', paddingTop: '20px'}}>
                {item.type}
              </Typography>
            {currentUser?.email === "admin1@gmail.com" ? ( 
              <Typography sx={{fontSize: '13px', paddingTop: '5px', textAlign: 'center'}}>
                {item.description}
              </Typography>
              ): null
            }
            </Link>
            <div style={{display: 'flex', justifyContent: 'center', paddingBottom: '10px'}}>
                {icons}
              </div>
              {/* <div style={{display: 'flex', justifyContent: 'center', paddingBottom: '10px'}}>
                <ProductStar/>
              </div> */}
        </Card>
        </>     
  );
}
