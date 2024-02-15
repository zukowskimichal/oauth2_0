import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const LoginPopup = () => {

  const [authorizationContent, setAuthorizationContent] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/login');
      setAuthorizationContent(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return(<div dangerouslySetInnerHTML={{ __html: authorizationContent }} />
);
};

export default LoginPopup;
