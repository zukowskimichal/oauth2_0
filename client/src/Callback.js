import { useParams,useNavigate  } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import queryString from 'query-string';
import {getToken, login} from './AuthMethod';
import sjcl from 'sjcl';
import CryptoJS from 'crypto-js';
import { useGlobal } from './GlobalProvider'; 

const {code} = queryString.parse(window.location.search);


const Callback = ({location}) => {
  const [posts, setPosts] = useState([]);
  const [callbackData,setCallbackData] = useState("none");
  
  // fix padding according to the new format
  // b64str = b64str.padRight(b64str.length + (4 - b64str.length % 4) % 4, '=');
  
  
  useEffect(() => {
    try {
      (() => {
      const myString = 'foobar123';
      // setGlobalParam('globalParam');
      // console.log('global param: '+ globalParam)
      // console.log('global param '+ !globalParam)
      // if(!globalParam) {
      //   setGlobalParam(() =>'globalParam');
      //   const myBitArray = sjcl.hash.sha256.hash(myString);
      //   const myHash = ""+sjcl.codec.base64url.fromBits(myBitArray);
      //   console.log('hash : ' + myHash)
      //   login(myHash)
      // } 
        getToken(code, myString)
        .then(res => {
          if (res.status != 200) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
            .then(res => setCallbackData(JSON.stringify(res)));
            console.log(callbackData)
          })();
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const navigate = useNavigate();

  // console.log('token response '+ tokenResponse);
  // Do something with the parameter, like making subsequent calls
  // For demonstration, we'll just display it here
  return (<div>
    <h2>Code grant: </h2>
  <div>{code}</div>
  <h2>Json token</h2>
  <div>{callbackData}</div>
  <div>
    <button onClick={() =>{ 
      navigate('/')}}>Continue</button>
    </div>
  </div>);

}


// const Callback = ({location}) => {
//   const [callbackData,setCallbackData] = useState("none");
//   // const {state} = queryString.parse(window.location.search);
//   // console.log('parameters ' + state)
//   // const tokenResponse = getToken(code);
//   // const resp = getToken(code).then(res => res.json());


//   useEffect(()=> {
//     getToken(code)
//     .then(res => res.json())
//     .then(res => setCallbackData(JSON.stringify(res)));
//     console.log(callbackData)

//   },[code])
//   const navigate = useNavigate();

//   // console.log('token response '+ tokenResponse);
//   // Do something with the parameter, like making subsequent calls
//   // For demonstration, we'll just display it here
//   return (<div>
//     <h2>Code grant: </h2>
//   <div>{code}</div>
//   <h2>Json token</h2>
//   <div>{callbackData}</div>
//   <div>
//     <button onClick={() =>{ 
//       navigate('/')}}>Continue</button>
//     </div>
//   </div>);
//   };

export default Callback;
