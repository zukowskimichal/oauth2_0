
import React from 'react';
import {login} from './AuthMethod';


const LoginPopup = () => {
  return <div><button onClick={() => login()}>LOGIN</button></div>;
};

export default LoginPopup;
