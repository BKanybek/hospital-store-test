import * as React from 'react';
import Footer from '../Footer/Footer';
// import './Home.css'
// import NavBar from '../NavBar/NavBar';
import Services from '../Services/Services';
import MainImg from '../Images/istockphoto-1312765142-170667a.jpg'
import Slider from './Slider/Slider';
import './Home.css'
import Banner from './Banner/Banner';
// import { IconButton } from '@mui/material';
import { productContext } from '../../ProductContext/ProductContext';
import { Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import InfoBlog from './Slider/InfoBlog.jsx/InfoBlog';





const Home = () => {
    const { useAuth } = React.useContext(productContext)
    const currentUser = useAuth()
    return (
        <div style={{}}>
             {currentUser?.email === "admin1@gmail.com" ? (
                <div style={{ width: '100%', height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'between', flexDirection: 'column'}}>
                    <span style={{margin: '8px', color: 'black', fontSize: '30px', fontWeight: '600'}}>Добро пожаловать</span>
                    <span  style={{ color: 'black', fontSize: '30px', fontWeight: '600'}}>Администратор</span>
                    <div>
                        <Link to='/add'>
                            <Button style={{margin: '20px', color: 'blue', fontSize: '20px', border: 'solid 2px'}}>
                                Добавить новых сотрудников
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <Link to='/add2'>
                            <Button style={{margin: '20px', color: 'blue', fontSize: '20px', border: 'solid 2px'}}>
                                Добавить новое оборудование
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            ) :null
          }
            <Banner/>
            <Services/>
            <br/>
            <Slider/>
            <InfoBlog/>
            <Footer/>
        </div>
    );
};

export default Home;