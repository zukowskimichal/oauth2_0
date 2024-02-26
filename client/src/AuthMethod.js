import axios from "axios";


async function login(code_challenge){
  const code_challenge_param = "&code_challenge=" + code_challenge;
   const response = fetch('http://localhost:3000/oauth2/authorize?'
  +'client_id=oidc-client'
  +'&response_type=code'
  +'&redirect_uri=http://localhost:3000/callback'
  +'&scope=USER'
  +'&state=asd'
  // + code_challenge_param
  +'&code_challenge=QmocKMYbe6JY-jzDALp806vBHA1LWF085KFdbyLW02M'
  +'&code_challenge_method=S256',
  {redirect: "manual",
maxRedirects: 1})
.then(res => res.url);
  window.location.replace( await response);
};

const getToken = async (code, code_verifier) => {
  console.log('code: '+ code);

const formData = new URLSearchParams();
formData.append('grant_type', 'authorization_code');
formData.append('client_id', 'oidc-client');
formData.append('code', code);
formData.append('redirect_uri', 'http://localhost:3000/callback');
formData.append('code_challenge_method', 'S256');
formData.append('code_verifier', code_verifier);


  return fetch('http://localhost:3000/oauth2/token',{
    body: formData,
    method: 'POST'});

}

export {login,getToken};
