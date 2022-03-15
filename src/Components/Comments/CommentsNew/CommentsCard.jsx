
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, IconButton, Paper, Skeleton} from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { equipmentContext } from '../../../ProductContext/EquipmentContext';
import CommentsEdit from './CommentsEdit'

export default function CommentsCard({item}) {
    const {deleteComment} = React.useContext(equipmentContext)
    

    const [show, setShow] = React.useState(false)

    const handleClose = () => setShow(false)
    
    const handleShow = () => setShow(true) 

    let icons = (
        <CardActions disableSpacing>
            <IconButton onClick={() => deleteComment(item.id)}>
                <DeleteOutlineIcon/>
            </IconButton>
            {/* <Link to={`/editcoment/${item.id}`}> */}
                <IconButton onClick={handleShow}>
                    <CreateOutlinedIcon/>
                </IconButton>
            {/* </Link> */}
        </CardActions>
    )    
  return (
    <Paper elevation={8} sx={{ width: '300px', height: '200px'}} >  
    {show ? (
        <CommentsEdit handleClose={handleClose} item={item} />
    ) : (
        <>
            <CardContent>
                <div style={{display: 'flex',}}>
                    <Avatar sx={{ marginRight: '20px', width: 60, height: 60 }} />
                    <div>
                        <Typography>
                            Гость
                        </Typography>
                        <Typography sx={{fontSize: '10px'}}>
                            {item.time}
                        </Typography>
                    </div>
                </div>
                <Typography sx={{ marginTop: '15px'}}>
                    {item.body}
                </Typography>
            
                
            </CardContent> 
            {icons} 
        </>
    )}
    </Paper>
  );
}