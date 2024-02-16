import logo from './logo.svg';
import './App.css';
import { SHA256 } from 'crypto-js';
import { CryptoJS } from 'crypto-js';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Main from './Main';
import LoginPopup from './LoginPopup';
import axios from 'axios';
import Callback from './Callback';



const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    
    console.log('is auth '+ authenticated)
   
  }, [authenticated]);

  const handleLoginSuccess = () => {
    setAuthenticated(true);
  };


  return (
    <Router>
      <Routes>
        {/* Route to Main if authenticated, otherwise route to Login */}
        <Route
          path="/"
          element={authenticated ? <Main /> : <Navigate to="/login"  />}
        />
        <Route
          path="/login"
          element={<LoginPopup onLoginSuccess={handleLoginSuccess} />}
        />
        <Route path='/callback' element={<Callback onLoginSuccess={handleLoginSuccess}/>}/>
        <Route path='/callback**' element={<Callback onLoginSuccess={handleLoginSuccess}/>}/>
        <Route path='/callback/*' element={<Callback onLoginSuccess={handleLoginSuccess}/>}/>
        
        </Routes>
    </Router>
  );
};


// function App() {
//   const [inputText, setInputText] = useState('');
//   const [hashedText, setHashedText] = useState('');

//   const handleInputChange = (e) => {
//     setInputText(e.target.value);
//   };

//   const handleHashClick = () => {
//     console.log('input text ' + inputText);

//     const hashedValue = SHA256(inputText);
//     console.log('hasehed Value: '+ hashedValue)
//     const baseValue = base64UrlEncodeWithoutPadding(hashedValue);
//     console.log('baseValue Value: '+ baseValue)

//     setHashedText(baseValue);
//   };
  
//   return (
//     <div>
//       <input type="text" value={inputText} onChange={handleInputChange} />
//       <button onClick={handleHashClick}>Hash</button>
//       <div>
//         <strong>Hashed Value:</strong> {hashedText}
//       </div>
//     </div>
//   );
// }

// function getBytesASCII(inputString) {
//   const encoder = new TextEncoder('ascii');
//   return encoder.encode(inputString);
// }

// function base64UrlEncodeWithoutPadding(input) {
//   const base64 = btoa(input);
//   return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
// }

export default App;
