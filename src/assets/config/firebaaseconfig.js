// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { signOut,updateProfile,signInWithPopup,GoogleAuthProvider,getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTPG2_uTRxejN5cCYiHURukXboTITSOGw",
  authDomain: "sturdy-plateau-363702.firebaseapp.com",
  projectId: "sturdy-plateau-363702",
  storageBucket: "sturdy-plateau-363702.appspot.com",
  messagingSenderId: "43754792113",
  appId: "1:43754792113:web:fc86996404d9550461ae90",
  measurementId: "G-VD2WWDG0H9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export const signinWidthGoogle = ()=>{
  const provider = new GoogleAuthProvider(app);

  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log("login")
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
// geting user profile 
export const getProfile = ()=>{
  const loginUser = auth.currentUser;
if (loginUser !== null) {
  // The user object has basic properties such as display name, email, etc.
 const displayName = loginUser.displayName;
 const email = loginUser.email;
 const photoURL = loginUser.photoURL;
 const emailVerified = loginUser.emailVerified;
 

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = loginUser.uid;
  console.log(photoURL)
  return {
    profileName: displayName,
    profilePhoto: photoURL,
    profileEmail: email,
    profileVR: emailVerified,
    profileID: uid
   }
}

}
// ends geting user profile 
// this function will update user profile to initial user detail, name will be user profile image will be blanck profile image
export const updateProfileToInitialValues = ()=> {

  updateProfile(auth.currentUser, {
    displayName: "none",
    photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvIQEdbJs-ZGwXXa5GRQqd8qDGlQaUEaolA&usqp=CAU"
  }).then(() => {

  }).catch((error) => {

    // An error occurred
    // ...
  });

} // ends fuction to update inithal user profile
// this function will use to logout user
export const handleLogout = ()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
} // ends logout user fucntion