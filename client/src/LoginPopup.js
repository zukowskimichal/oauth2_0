import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const LoginPopup = ({onLoginSuccess}) => {

  const [authorizationContent, setAuthorizationContent] = useState(null);
  const fetchData = async () => {
    try {
        const loginPopup = window.open('http://localhost:3000/oauth2/authorize?client_id=oidc-client&response_type=code&redirect_uri=http://localhost:3000/callback&scope=openid&state=asd&code_challenge=QmocKMYbe6JY-jzDALp806vBHA1LWF085KFdbyLW02M&code_challenge_method=S256', 'Login', 'width=500,height=600');
    //   const response = axios.get('http://localhost:3000/oauth2/authorize?client_id=oidc-client&response_type=code&redirect_uri=http://localhost:3000/callback&scope=openid&state=asd&code_challenge=QmocKMYbe6JY-jzDALp806vBHA1LWF085KFdbyLW02M&code_challenge_method=S256')
    //   .then(respone => {
    //     respone.json()
    //   })
      
    //   setAuthorizationContent(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

return null;
//   return(<div dangerouslySetInnerHTML={{ __html: authorizationContent }} />
// );
};

export default LoginPopup;
