import React from 'react';
import Header from '../Header/Header';
import { Container, Row, Col } from 'react-bootstrap';
import './Login.scss'

const Login = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <h4 className='text-center mt-5'>Log In</h4>
                         <div className='location-part mt-5'>
                         <label className="level-input" for="inputGroupSelect01">Country/Region</label>
                         <div className="input-group">
                         
                            {/* <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Country/Region</label>
                            </div> */}
                            <select className="custom-select" id="inputGroupSelect01">
                                <option selected>Bangladesh(+88)</option>
                                <option value="1">India(+91)</option>
                                <option value="2">Nepal(+977)</option>
                                <option value="3">Bhutan(+975)</option>
                            </select>
                            </div>
                         </div>
                         <div className='location-part mt-4'>
                         <input type="text" className='number-in' placeholder='Phone Number' name="" id=""/>
                         </div>
                         <p  className="level-input mt-3" >We’ll call or text you to confirm your number. Standard message
                            and data rates apply.</p>
                            <div className='search mb-2 mt-3'>
                                <a>Continue</a>
                        </div>
                        <p  className="level-input text-center">Don’t have an account? Sign up</p>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;