import { Grid , Box} from '@mui/material';
import React, { useContext, useEffect } from 'react';
// import { productContext } from '../../../Contexts/ProductContext';
import { equipmentContext } from '../../../ProductContext/EquipmentContext';
import CommentsCard from './CommentsCard';
const CommentList = () => {
    const {comments, getStream} = useContext(equipmentContext)
    useEffect(() => {
        getStream()
    },[])
    return (
        <Box sx={{flexGrow: 1, margin:4}}>
            < Grid sx={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center'}}>
                {
                    comments ? (
                        comments.map((item,index) =>(
                            <Grid
                            margin='20px'
                            key={index}
                            >
                                <CommentsCard item={item}  key={index}/>
                                {/* style={{}} */}
                            </Grid>
                        ))
                    ) : (<h1>Loading...</h1>)
                }
            </ Grid>
        </Box>
       
    );
};
export default CommentList;




// import React, { useContext, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { equipmentContext } from '../../../ProductContext/EquipmentContext';
// import { Avatar, Button, Card, CardActions, CardContent, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
// import './CommentsStyle/CommentsLIst.css';
// import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
// import FeedRoundedIcon from '@mui/icons-material/FeedRounded';
// import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';


// const CommentsList = (item) => {
//     const {deleteComment, comments, getStream  } = useContext(equipmentContext)
//     const navigate = useNavigate()
//     console.log(item);

  
//     useEffect(() => {
//         getStream()
//     }, [])

//     let icons = (
//         <CardActions disableSpacing>
//             <IconButton onClick={() => deleteComment(item.id)}>
//                 <HighlightOffRoundedIcon/>
//             </IconButton>
//             <Link to='/addcoment'>
//             <Button style={{background: 'alpha', color: 'black'}}> <FeedRoundedIcon/> Add new comment </Button>
//             </Link>
//             <Link to={`/test/${item.id}`}>
//                 <IconButton>
//                 <BorderColorTwoToneIcon/>
//                 </IconButton>
//             </Link>
//         </CardActions>
//     )    

//     return (
//         <div style={{background: 'dimGray', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
//                   {
//                         comments ? (
//                             comments.map((item, index) => (  
//                                     <div key={item.id} className="container profile-page">
//                                     <div className="row">
//                                         <div className="">
//                                             <div className="card profile-header" >
//                                             <div className="body">
//                                                 <div className="row">
//                                                     <div className="">
//                                                         <div className="profile-image float-md-right">
//                                                         <img
//                                                             src="https://bootdey.com/img/Content/avatar/avatar7.png"
//                                                             alt=""
//                                                         />
//                                                         </div>
//                                                     </div>
//                                                     <div className="">
//                                                         <h4 className="">
//                                                         <strong>{item.id}</strong>
//                                                         </h4>
//                                                         <p className='text-comments'>{item.body}</p>
//                                                     </div>
//                                                     {icons} 
//                                                 </div>
//                                             </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     </div>
                               
//                                 ))
//                             ) : (<h1>Loading...</h1>)
//                     }   
//         </div>
//     );
// };

// export default CommentsList;











// </>
//     <List key={index} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//     <ListItem alignItems="flex-start">
//       <ListItemAvatar>
//         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//       </ListItemAvatar>
//       <ListItemText
//         primary="Brunch this weekend?"
//         secondary={
//           <React.Fragment>
//             <Typography
//               sx={{ display: 'inline' }}
//               component="span"
//               variant="body2"
//               color="text.primary"
//             >
//               {item.id}
//             </Typography>
//             {" — I'll be in your neighborhood doing errands this…"}
//           </React.Fragment>
//         }
//       />
//     </ListItem>
//   </List>               
