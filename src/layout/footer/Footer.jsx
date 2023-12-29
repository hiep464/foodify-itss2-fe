import React from 'react';
// components/Footer/Footer.js
import { MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from 'mdb-react-ui-kit';

import logo from '../../acess/logo.svg';

import './Footer.css';

const Footer = () => {
    return (
        <MDBFooter bgColor='#F9F9F9' className='small text-center text-lg-start ' >
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          </section>
          <section className='' >
            <MDBContainer className='text-center text-md-start mt-7'>
              <MDBRow className='mt-3 justify-content-center'> 
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-3 text-center'>
                  <h6 className='text-with-shadow  fw-bold mb-1'>
                    
                  <img src={logo} alt="" /> </h6>
                  <p>
                  Chúng tôi sẽ luôn đồng hành và đưa đến bạn những điều tuyệt vời nhất</p>
                </MDBCol>
                <MDBCol md="3" lg="2" xl="1" className='mx-auto mb-md-20 mb-3'>
                  <h6 className='text-dark small  fw-bold mb-4'>Tastebite</h6>
                  <p>
                    <a href='/' className='text-gray'>
                    About us
                    </a>
                  </p>
                  <p>
                    <a href='/' className='text-gray'>
                    Careers
                    </a>
                  </p>
                  <p>
                    <a href='/' className='text-gray'>
                    Contact us
                    </a>
                  </p>
                  <p>
                    <a href='/' className='text-gray'>
                    Feedback
                    </a>
                  </p>
                </MDBCol>
    
                <MDBCol md="3" lg="2" xl="1" className='mx-auto mb-md-0 mb-3'>
                  <h6 className='text-dark small  fw-bold mb-4'>Legal</h6>
                  <p>
                    <a href='/' className='text-gray '>
                    Terms
                    </a>
                  </p>
                  <p>
                    <a href='/' className='text-gray '>
                    Conditions
                    </a>
                  </p>
                  <p>
                    <a href='/' className='text-gray '>
                    Cookies
                    </a>
                  </p>
                  <p>
                    <a href='/' className='text-gray '>
                    Copyright
                    </a>
                  </p>
                </MDBCol>
    
                <MDBCol md="3" lg="2" xl="1" className='mx-auto mb-md-0 mb-3'>
                  <h6 className='text-dark small  fw-bold mb-4'>Follow</h6>
                  <p className='text-gray'>
                    
                  Facebook                  </p>
                  <p className='text-gray'>
                    
                  Twitter                  </p>
                  <p className='text-gray'>
                  Instagram                  </p>
                  <p className='text-gray'>
                  Youtube                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
    
          <div className='text-center p-4' >
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-top'>
          
            <div className='me-5 d-none d-lg-block'>
              <span>© 2023 Foodify - All rights reserved</span>
            </div>
    
            <div>
              <a href='/' className='me-4 text-dark'>
                <MDBIcon fab icon="facebook" />
              </a>
              <a href='/' className='me-4 text-dark'>
                <MDBIcon fab icon="instagram" />
              </a>
              <a href='/' className='me-4 text-dark'>
                <MDBIcon fab icon="twitter" />
              </a>
              
              <a href='/' className='me-4 text-dark'>
                <MDBIcon fab icon="youtube" />
              </a>
              
            </div>
          </section>
          </div>
        </MDBFooter>
      );
  
};

export default Footer;
