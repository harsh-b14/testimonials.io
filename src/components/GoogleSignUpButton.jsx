import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Button from './Button';

const GoogleSignUpButton = () => {
  const clientId = '863438307177-pritp613man52ieef0m068dvob631gs4.apps.googleusercontent.com';

  const onSuccess = async (response) => {
    console.log('Login Success:', response);

    try {
      const { data } = await axios.post('http://localhost:8000/user/googlesignup', {
        token: response.credential,
      });
      console.log('Profile created:', data);
    } catch (error) {
      console.error('Error creating profile:', error);
    }
  };

  const onError = (response) => {
    console.log('Login Failed:', response);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={onSuccess}
        theme='filled_blue'
        size='large'
        shape='pill'
        type='standard'
        // logo_alignment='left'
        onError={onError}
        render={(renderProps) => (
          <Button 
            type="submit"
            onClick={renderProps.onClick} 
            disabled={renderProps.disabled}
          >
            Signup with Google
          </Button>
        )}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleSignUpButton;