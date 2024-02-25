import logo from './logo.svg';
import './App.css';
import { SHA256 } from 'crypto-js';
import { CryptoJS } from 'crypto-js';
import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Main from './Main';
import LoginPopup from './LoginPopup';
import axios from 'axios';
import Callback from './Callback';
import { GlobalProvider } from './GlobalProvider';




const App = () => {
  const [authenticated, setAuthenticated] = useState(false);


  const authSuccess = useCallback(() => {
    setAuthenticated(true)
  });



  return (
    <GlobalProvider>

    <Router>
      <Routes>
        {/* Route to Main if authenticated, otherwise route to Login */}
        <Route path='/callback' element={<Callback location={window.location}/>}/>
        <Route
          path="/"
          element={authenticated? <Main />: <LoginPopup/>}
          />
        <Route  path="/login" element={ <LoginPopup />}/>
        </Routes>
    </Router>
          </GlobalProvider>
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
