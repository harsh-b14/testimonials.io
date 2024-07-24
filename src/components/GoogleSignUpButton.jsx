// import React, { useEffect } from 'react';
// import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
// import axios from 'axios';
// import { initializeGoogleSignIn } from '../utils/googleAuth';

// const GoogleSignUpButton = () => {
//   const clientId = "863438307177-pritp613man52ieef0m068dvob631gs4.apps.googleusercontent.com";

//   useEffect(() => {
//     initializeGoogleSignIn(clientId).then(
//       (auth2) => {
//         console.log('Google Auth initialized:', auth2);
//       },
//       (error) => {
//         console.error('Google Auth initialization error:', error);
//       }
//     );
//   }, [clientId]);
  

//   const onSuccess = (response) => {
//     console.log('Login Success:', response);
//     const googleUser = gapi.auth2.getAuthInstance().currentUser.get();
//     const profile = googleUser.getBasicProfile();
//     console.log(profile);
//     // const profile = {
//     // //   name: response.profileObj.name,
//     //   email: response.profileObj.email,
//     //   googleId: response.profileObj.googleId,
//     //   imageUrl: response.profileObj.imageUrl,
//     // };

//     axios.post('http://localhost:8000/user/googlesignup', profile)
//       .then((res) => {
//         console.log('Profile created:', res.data);
//       })
//       .catch((err) => {
//         console.error('Error creating profile:', err);
//       });
//     };

//     const onFailure = (response) => {
//         console.log('Login Failed:', response);
//     };

// //   return (
// //     <GoogleLogin
// //       clientId={clientId}
// //       buttonText="Sign Up with Google"
// //       onSuccess={onSuccess}
// //       onFailure={onFailure}
// //       cookiePolicy={'single_host_origin'}
// //       render={renderProps => (
// //         <button
// //             onClick={renderProps.onClick} disabled={renderProps.disabled}
// //             // onClick={onSignIn}
// //                 type="button"
// //                 className="relative inline-flex w-full items-center justify-center px-3.5 py-2.5  text-white transition-all duration-200 hover:bg-[rgba(210,215,228,0.3)] hover:text-black focus:bg-gray-500 focus:text-black focus:outline-none bg-[rgba(217,217,217,0)] border-solid border-[#6881a4] border-4 rounded-[16px] hover:border-[#8B94AD] font-['Raleway']"
// //             >
// //                 <span className="mr-2 inline-block ">
// //                     <svg
// //                         className="h-6 w-6 white"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         viewBox="0 0 24 24"
// //                         fill="currentColor"
// //                     >
// //                         <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
// //                     </svg>
// //                 </span>
// //                 Signup with Google
// //         </button>
// //       )}
// //     />
// //   );

//     return(
//         <GoogleOAuthProvider clientId={clientId}>
//             <GoogleLogin
//                 onSuccess={onSuccess}
//                 onError={onFailure}
//             />
//         </GoogleOAuthProvider>
//     )
// };

// export default GoogleSignUpButton;

import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleSignUpButton = () => {
  const clientId = '863438307177-pritp613man52ieef0m068dvob631gs4.apps.googleusercontent.com';

  const onSuccess = async (response) => {
    console.log('Login Success:', response);

    try {
      const { data } = await axios.post('http://localhost:8000/user/googlesignup', {
        token: response.credential,
      });

      console.log('Profile created:', data);
      // Handle success (e.g., store tokens, redirect to dashboard)
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
        onError={onError}
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            Sign Up with Google
          </button>
        )}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleSignUpButton;
