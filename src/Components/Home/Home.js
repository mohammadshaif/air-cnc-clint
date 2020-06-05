import React from 'react';
import './Home.scss'
import { Container, Row, Col } from 'react-bootstrap';
import Locations from './Locations';
import DatePicker from './DatePicker';
import GuestCount from './GuestCount';
import ex1 from '../../images/ex1.png';
import ex2 from '../../images/ex2.png';
import ex3 from '../../images/ex3.png';
import ex4 from '../../images/ex4.png';
import ho1 from '../../images/ho1.png';
import ho2 from '../../images/ho2.png';
import ho3 from '../../images/ho3.png';
import star from '../../images/star.png';
import Header from '../Header/Header';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Container className='mt-5'>
            <h4>  Where do you want to go</h4>
                <Row className=' mt-3'>
                    <Col md={4}>
                        <div className='location-part '>
                            <h6>LOCATION</h6>
                            <Locations></Locations>
                        </div>
                        <div className='location-part'>
                            <div className="d-flex justify-content-around">
                                <span>Arrival</span>
                                <span>Departure</span>
                            </div>
                            <DatePicker></DatePicker>
                        </div>
                        <div className='location-part'>
                            <GuestCount></GuestCount>
                        </div>
                        <div className='search mb-5 mt-3'>
                                <a>Search</a>
                        </div>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col md={12} className="mt-2">
                            <h3>Experiences</h3>
                        <Row>
                            <Col className='details' md={3} >
                                <img src={ex1} alt=""/>
                                <h5>Nightlife · New York</h5>
                                <h1>Discover the city's party scene</h1>
                                <p>$35 per person</p>
                                <img className='starImg' src={star} alt=""/>
                            </Col>
                            <Col className='details' md={3}>
                                <img src={ex2} alt=""/>
                                <h5>Entertainment · Vancouver</h5>
                                <h1>Tour with an Enthusiastic Local!</h1>
                                <p>$3 per person</p>
                                <img  className='starImg'src={star} alt=""/>
                            </Col>
                            <Col className='details' md={3}>
                                <img src={ex3} alt=""/>
                                <h5>photo class · Los Angeles</h5>
                                <h1>Must Have L.A. Pictures!</h1>
                                <p>$39 per person</p>
                                <img className='starImg' src={star} alt=""/>
                            </Col>
                            <Col className='details' md={3}>
                                <img src={ex4} alt=""/>
                                <h5>photography · New York</h5>
                                <h1>Retro Photoshoot in NYC</h1>
                                <p>$49 per person</p>
                                <img className='starImg' src={star} alt=""/>
                            </Col>
                            
                        </Row>
                            </Col>
                            <Col md={12}>
                            <h3>Homes</h3>
                        <Row>
                            <Col className='details' md={4} >
                                <img src={ho1} alt=""/>
                                <h5>Nightlife · New York</h5>
                                <h1>Unique Cob Cottage</h1>
                                <p>$128 per person</p>
                                <img className='starImg' src={star} alt=""/>
                            </Col>
                            <Col className='details' md={4}>
                                <img src={ho2} alt=""/>
                                <h5>Nightlife · New York</h5>
                                <h1>The Joshua Tree House</h1>
                                <p>$250 per person</p>
                                <img  className='starImg'src={star} alt=""/>
                            </Col>
                            <Col className='details' md={4}>
                                <img src={ho3} alt=""/>
                                <h5>Nightlife · New York</h5>
                                <h1>A Pirate's Life For Me - Houseboat!</h1>
                                <p>$209 per person</p>
                                <img className='starImg' src={star} alt=""/>
                            </Col>
                        </Row>
                            </Col>
                        </Row>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default Home;