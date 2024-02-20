import { useParams,useNavigate  } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import queryString from 'query-string';
import {getToken} from './AuthMethod';

const finalise = (navigate) => {
  navigate('/');
}

const Callback = ({location}) => {
  const {code} = queryString.parse(location.search);
  const [callbackData,setCallbackData] = useState("none");
  // const {state} = queryString.parse(window.location.search);
  // console.log('parameters ' + state)
  // const tokenResponse = getToken(code);
  useEffect(()=> {
    getToken(code)
    .then(res => res.json())
    .then(res => setCallbackData(JSON.stringify(res)));
    console.log(callbackData)

  },[code])
  const navigate = useNavigate();
  console.log("rendered ")

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
  };

export default Callback;
