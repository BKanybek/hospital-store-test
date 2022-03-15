import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { calcTotalPrice } from './CalcPrice/CalcPrice';
import { equipmentContext } from '../../ProductContext/EquipmentContext';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function Cart() {
    const { cart, getCart, changeEquipmentCount, deleteCartEquipment, } = React.useContext(equipmentContext)
    React.useEffect(() => {
        getCart() 
    }, [])


  return (
    <>
      <TableContainer  sx={{display: 'flex', flexWrap: 'wrap'}} component={Paper}>
        <Table  aria-label="customized table">
          <TableHead>
            <TableRow sx={{background: 'grey'}}>
              <StyledTableCell align='center'>Image</StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">Count</StyledTableCell>
              <StyledTableCell align="left">SupPrice</StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {cart.equipments ? (
                  <>
                  {cart.equipments .map((elem) => (
                    <StyledTableRow key={elem.item.id}>
                          <StyledTableCell align='center' component='th' scope='row'>
                              <img width="150" src={elem.item.image} />
                          </StyledTableCell>
                          <StyledTableCell align='center'>
                              {elem.item.title}
                          </StyledTableCell>
                          <StyledTableCell align='center'>
                            $  {elem.item.price}
                          </StyledTableCell>
                          <StyledTableCell align='center'>
                              <input style={{width: '70px'}}
                                  type='number'
                                  value={elem.count}  
                                  onChange={(e) => changeEquipmentCount(e.target.value, elem.item.id)}
                              />
                          </StyledTableCell>
                          <StyledTableCell align='left'>
                              {elem.subPrice}
                          </StyledTableCell>
                          <StyledTableCell align="center" onClick={() => deleteCartEquipment(elem.item.id)}>
                              <DeleteIcon/>
                          </StyledTableCell>
                    </StyledTableRow> 
                  ))}
                  </>
              ) : (null)} 
              <TableRow>
                  <TableCell rowSpan={3}/>
                  <TableCell colSpan={2}>
                      <Typography variant='h4'>Total:</Typography>
                  </TableCell>
                      {
                          cart.equipments ? (
                              <TableCell align='right'>
                                  <Typography variant='h5'>$ {calcTotalPrice(cart.equipments)}</Typography>
                              </TableCell>
                          ) : (null)
                      }
              </TableRow>
              <TableRow>
                  <TableCell colSpan={2} align='right'>
                    <Link style={{margin: '0 29px'}} to='/list2'>
                        <Button variant='contained' color='success'>
                            Back
                        </Button>
                      </Link>
                      
                    <Link to='/pay'>
                      <Button variant='contained' color='success'>
                          Pay
                      </Button>
                    </Link>
                    
                  </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

