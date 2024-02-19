import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const LoginPopup = () => {

  const fetchData = async () => {
    
      const response = fetch('http://localhost:3000/oauth2/authorize?'
      +'client_id=oidc-client'
      +'&response_type=code'
      +'&redirect_uri=http://localhost:3000/callback'
      +'&scope=openid'
      +'&state=asd'
      +'&code_challenge=QmocKMYbe6JY-jzDALp806vBHA1LWF085KFdbyLW02M'
      +'&code_challenge_method=S256',
      {redirect: "manual"});
      
      window.location.replace((await response).url);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return null;
};

export default LoginPopup;
