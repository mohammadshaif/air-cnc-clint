import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const GuestCount = () => {
    const [adults, setAdults] = useState(0)
    const [child,setChild] = useState(0)
    const [baby, setBaby] = useState(0)
    
           
            
    return (
        <div className='guest-count'>
            <Container>
                <span>Guests</span>
                <Row>
                    <Col style={{borderBottom:'1px solid #ecececc2 ',paddingBottom:'10px'}}>
                        <strong>{adults} ADULTS, </strong>
                        <strong>{child} CHILD, </strong>
                        <strong>{baby} BABY </strong>

                    </Col>
                </Row>
                <Row className='mt-5' >
                    <Col >
                            <h6>ADULTS</h6>
                    </Col>
                    <Col>
                        <Row>
                        <Col md={4}></Col>
                            <Col md={8}>
                                <Row>
                                    <Col><button className='guests' onClick={()=>setAdults(adults-1)}>-</button></Col>
                                    <Col> <strong> {adults} </strong></Col>
                                    <Col><button onClick={()=>setAdults(adults+1)}>+</button></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='mt-2' >
                    <Col >
                            <h6 style={{marginBottom:'0px'}}>CHILD</h6>
                            <span>Age 2-12</span>
                    </Col>
                    <Col>
                        <Row>
                        <Col md={4}></Col>
                            <Col md={8}>
                                <Row>
                                    <Col><button className='guests' onClick={()=>setChild(child-1)}>-</button></Col>
                                    <Col> <strong> {child} </strong></Col>
                                    <Col><button onClick={()=>setChild(child+1)}>+</button></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='mt-2' >
                    <Col >
                            <h6 style={{marginBottom:'0px'}}>BABIES</h6>
                            <span>Younger then 2</span>
                    </Col>
                    <Col>
                        <Row>
                        <Col md={4}></Col>
                            <Col md={8}>
                                <Row>
                                    <Col><button className='guests' onClick={()=>setBaby(baby-1)}>-</button></Col>
                                    <Col> <strong> {baby} </strong></Col>
                                    <Col><button onClick={()=>setBaby(baby+1)}>+</button></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='mt-5 apply' >
                    <button>APPLY</button>
                </Row>
            </Container>
        </div>
    );
};

export default GuestCount;