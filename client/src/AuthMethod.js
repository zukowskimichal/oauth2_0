import axios from "axios";

const login = async () => {
    
  const response = fetch('http://localhost:3000/oauth2/authorize?'
  +'client_id=oidc-client'
  +'&response_type=code'
  +'&redirect_uri=http://localhost:3000/callback'
  +'&scope=openid'
  +'&state=asd'
  +'&code_challenge=QmocKMYbe6JY-jzDALp806vBHA1LWF085KFdbyLW02M'
  +'&code_challenge_method=S256',
  {redirect: "manual",
maxRedirects: 1});
  
  window.location.replace((await response).url);
};

const getToken = (code) => {
  console.log('code: '+ code);

const formData = new URLSearchParams();
formData.append('grant_type', 'authorization_code');
formData.append('client_id', 'oidc-client');
formData.append('code', code);
formData.append('redirect_uri', 'http://localhost:3000/callback');
formData.append('code_challenge_method', 'S256');
formData.append('code_verifier', 'foobar123');


  return fetch('http://localhost:3000/oauth2/token',{
    body: formData,
    method: 'POST'});

  // return JSON.stringify(response);
}

export {login,getToken};