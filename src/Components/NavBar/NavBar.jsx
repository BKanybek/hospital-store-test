import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { productContext } from '../../ProductContext/ProductContext';
import { Container, Nav, Navbar, NavDropdown,} from 'react-bootstrap';
import './Navbar.css';
import Logo from '../Images/symbol-of-caduceus.jpg'
import { equipmentContext } from '../../ProductContext/EquipmentContext';



export default function NavBar() {
    const { useAuth, logout } = React.useContext(productContext)
    const { cartLength, getCartLength, getStarLength, starLength } = React.useContext(equipmentContext)
    const [ searchParams, setSearchParams ] = useSearchParams()
    const[ searchVal, setSearchVal ] = React.useState(searchParams.get('q') ? searchParams.get('q') : '')
    const currentUser = useAuth()
    async function handleLogOut(){
      try {
        await logout()
      } catch(error) {
        console.log(error);
      }
    }

    React.useEffect(() => {
        setSearchParams({
            'q': searchVal,
            '_limit': 3,
            '_page': 1
        })
    }, [searchVal])

    React.useEffect(() => {
      getStarLength()
  }, [])

    React.useEffect(() => {
      getCartLength()
    }, [])

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
        
      <Link  style={{textDecoration: 'none'}} to={!currentUser ? '/login' : '#' }>
        <MenuItem disabled={currentUser ? true : false}  onClick={handleMenuClose}>Login</MenuItem>
      </Link>
        
      <Link style={{textDecoration: 'none'}} to={!currentUser ? '/register' : '#'}>
        <MenuItem  disabled={currentUser ? true : false} onClick={handleMenuClose}>Register</MenuItem>
      </Link>
      {currentUser ? (
                      <Button variant='success' disabled={!currentUser} onClick={handleLogOut}>Выйти</Button>
                      ) : null
                    }
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    
    >
        <Link to='/cart' style={{color: 'white'}}>
        <IconButton sx={{color: 'black'}} color="inherit">
            <Badge badgeContent={cartLength} color="secondary">
                <ShoppingCartIcon sx={{display: 'flex', justifyContent: 'center'}} />
            </Badge>
        </IconButton>
        </Link>

        <Link to='/favorite' style={{color: 'red'}}>
 
           <IconButton color='inherit'>
                <Badge badgeContent={starLength} color="secondary">
                    <FavoriteIcon/>
                </Badge>
            </IconButton>
        </Link>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  
  return (
    <div>
              <Navbar className='navbar' expand="lg">
  <Container fluid>
    <div><img style={{width: '50px', height: '50px'}} src={Logo} alt="" /></div>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav style={{ paddingLeft: '10px'}}
        className="me-auto my-2 my-lg-0"
        navbarScroll
      >
        <Nav.Link style={{fontWeight: '800', color: 'black'}} href="/">Home</Nav.Link>
        <Nav.Link style={{fontWeight: '800', color: 'black'}}  href="/list2">Equipment</Nav.Link>
        <Nav.Link style={{fontWeight: '800', color: 'black'}}  href="/list">Specialists</Nav.Link>
        <NavDropdown style={{fontWeight: '800', color: 'black'}}  title="More" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/comment">Reviews</NavDropdown.Item>
          <NavDropdown.Item href="/contact">Contacts</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
           About us
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Box sx={{ flexGrow: 1 }} /> 
     
                    <Box sx={{ display: { md: 'd-flex' } }}>
                      <Link to='/cart'>
                            <IconButton>
                                <Badge badgeContent={cartLength} color='secondary' sx={{paddingTop: '10'}}>
                                    <ShoppingCartIcon sx={{color: 'black', marginTop: '5px'}}/>
                                </Badge>
                            </IconButton>
                      </Link>
                      <Link to='/favorite' style={{color: 'white'}}>
                        <IconButton>
                           <Badge badgeContent={starLength} color='secondary'>
                              <FavoriteIcon sx={{color: 'black'}}/>
                           </Badge>
                        </IconButton>
                      </Link>
                        <IconButton
                          size="large"
                          edge="end"
                          aria-label="account of current user"
                          aria-controls={menuId}
                          aria-haspopup="true"
                          onClick={handleProfileMenuOpen}
                          color="inherit"
                        >
                          <AccountCircle sx={{marginTop:'3px'}} />
                        </IconButton>
                      </Box>
                      {renderMobileMenu}
                      {renderMenu}   
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
}

