import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import Banner1 from '../../Images/ifno4.jpg';
import Banner2 from '../../Images/Banner3.jpg';
import Banner3 from '../../Images/banner4.jpeg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
              <Link to='/list2'>
                  <img
                    className="image-banner"
                    src={Banner1}
                    alt="First slide"
                  />
              </Link>
                <Carousel.Caption>
                  <h3>New Equipments</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                  className="image-banner"
                  src={Banner2}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Headquarters</h3>
                  <p>Kyrgyzstan Bishkek </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Link to='/list'>
                <img
                  className="image-banner"
                  src={Banner3}
                  alt="Third slide"
                />
              </Link>

            <Carousel.Caption>
             
              <h3 style={{color: 'black', textShadow: '5px 9px 9px #0A0000'}}>Our Doctors</h3>
              <p  style={{color: 'black', textShadow: '5px 9px 9px #0A0000'}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    );
};

export default Banner;