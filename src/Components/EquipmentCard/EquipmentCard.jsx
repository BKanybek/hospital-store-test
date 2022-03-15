import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { equipmentContext } from '../../ProductContext/EquipmentContext';
import { productContext } from '../../ProductContext/ProductContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RaitingStar from '../RaitingStar/RaitingStar';
// import ProductStar from '../../ProductStar/ProductStar';


export default function EquipmentCard({item}) {
    const {deleteEquipment, addToCart, addToStar, checkEquipmentsInStar, checkEquipmentInCart} = React.useContext(equipmentContext)
    const {useAuth} = React.useContext(productContext)
    const currentUser = useAuth()

    
    let icons = (
      <CardActions disableSpacing>
          {currentUser?.email === "admin1@gmail.com" ? (
              <Link to={`equip/${item.id}`}>
                  <IconButton>  
                    <EditIcon/>
                  </IconButton>
              </Link>
            ) : null
          } 

          {currentUser?.email === "admin1@gmail.com" ? (
                <IconButton onClick={() => deleteEquipment(item.id)}>
                <DeleteIcon />
                </IconButton>
            ) :null
          }

          <IconButton onClick={() => {
            addToCart(item)  
          }} 
            color = {checkEquipmentInCart(item.id) ? 'success' : 'primary'}  
          >
            <ShoppingBagIcon />
          </IconButton>
          <IconButton onClick={() => {
            addToStar(item) 
          }}
            color = {checkEquipmentsInStar(item.id) ? 'success' : 'primary'}
             >
              <FavoriteIcon/>
          </IconButton>
      </CardActions>
    )
  return (
    <>
          <Card sx={{ maxWidth: 306, minWidth: 306 }}>
            <Link to={`/equip/${item.id}`} style={{textDecoration: 'none', color: 'black'}}> 
              <CardMedia 
                 width='300px'
                 height='250px'
                component="img"
                image={item.image}
                alt={item.title}
              /> 
              {currentUser?.email === "admin1@gmail.com" ? (  
                <Typography sx={{paddingTop: '8px', fontSize: '20px', textAlign: 'center'}}>
                  {item.type}
                </Typography>  
                ): null
              }
              <Typography sx={{fontSize: '20px', color: 'black', textAlign: 'center', paddingTop: '20px'}}>
                {item.title}
              </Typography>
            {currentUser?.email === "admin1@gmail.com" ? ( 
              <Typography sx={{fontSize: '13px', paddingTop: '5px', textAlign: 'center'}}>
                {item.description}
              </Typography>
              ): null
            }
              <Typography sx={{fontSize: '25px', paddingTop: '5px', color: 'black',textAlign: 'center'}}>
                  $ {item.price}
              </Typography>  
            </Link>
            <div style={{display: 'flex', justifyContent: 'center', paddingBottom: '10px'}}>
                {icons}
              </div>
              <div style={{display: 'flex', justifyContent: 'center', paddingBottom: '10px'}}>
                <RaitingStar/>
              </div>
        </Card>
        </>     
  );
}
