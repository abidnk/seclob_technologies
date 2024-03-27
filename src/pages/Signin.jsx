import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink
}
from 'mdb-react-ui-kit';
import bg from "../assets/bg.svg"
import './Signin.css'
import { Link } from 'react-router-dom';

function Signin() {
   
  return (
    <MDBContainer fluid className="p-3 my-1" >

      <MDBRow>

        <MDBCol col='10' md='4'>
          <img src={bg} class="img-fluid" alt="Phone image" />
        </MDBCol>
<div className='col'> <MDBCol col='4' md='6'>

<h2 className="fw-bold mt-5">Sign In</h2>
<h6 className='text mb-4 mt-3'>Sign in to your account</h6>
<MDBTabs pills justify className='mb-2'>
  <MDBTabsItem className='mb-4'>
    <MDBTabsLink style={{ display: 'flex', alignItems: 'center' }}>
      <img src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png" alt="Google Logo" style={{ marginRight: '5px', width: '24px' }} />
      Sign in Google
    </MDBTabsLink>
  </MDBTabsItem>
  <MDBTabsItem>
    <MDBTabsLink style={{ display: 'flex', alignItems: 'center' }}>
    <img src=" https://i.pinimg.com/736x/3a/80/d0/3a80d08597eb583fc0784a694b56169a.jpg " alt="Apple Logo" style={{ marginRight: '5px', width: '17px' }} />
      Sign in Apple 
    </MDBTabsLink>
  </MDBTabsItem>
</MDBTabs>

<MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
<MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>


<div className="d-flex justify-content-between  mb-4">
  <a href="!#">Forgot password?</a>
</div>
<Link to={'home'}>
<MDBBtn className="mb-4 w-100" style={{backgroundColor:'#605BFF'}} size="lg">Sign in</MDBBtn>
</Link>


</MDBCol>
</div>
        

      </MDBRow>

    </MDBContainer>
  );
}

export default Signin;