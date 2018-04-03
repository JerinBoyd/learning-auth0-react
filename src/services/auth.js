import auth0 from 'auth0-js';

class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'jerin.auth0.com',
        clientID: 'HkYN582PD0y5FvqNRGqP1QuLCr2_a8jl',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'https://jerin.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
      });
    
      login() {
        this.auth0.authorize();
      }
    }


    export default Auth;