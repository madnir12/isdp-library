import { useNavigate, Link } from 'react-router-dom';
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from '../assets/config/firebaaseconfig'
import PreLoader from '../comps/PreLoader'
import { FcGoogle } from 'react-icons/fc'
import { signinWidthGoogle } from '../assets/config/firebaaseconfig';
import { BiError } from 'react-icons/bi'

function SignUp() {
  const [isLogin, setIsLogin] = useState("checking")
  const navigate = useNavigate()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const [errorDisplay, setErrorDisplay] = useState(false)

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorDisplay(true)
        // ..
      });
  }
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLogin(true)

    } else {
      setIsLogin(false)
      console.log("not login")
    }
  });
  if (isLogin == true) { navigate("/") }
  else if (isLogin == false) {
    return (
      <div className="background">
        <div className="front-div">
          <img className='img-abs' src="https://pngimg.com/uploads/book/book_PNG51090.png" alt="" />
          <div className="headings-container">

            <h2>Welcome To ISDP Library</h2>
            <h3>Let's Fill The Fieds Below  </h3>
            <div className="form-container">
              <div className="error-message" style={{ display: errorDisplay ? "flex" : "none" }}>
                <BiError />
                <h5>There is an issue with email or password</h5>
              </div>
              <form action="" onSubmit={(event) => event.preventDefault()}>

                <span>

                  <label htmlFor="email">Email</label>
                  <input type="text" onChange={(e) => setEmail(e.target.value)} id='email' />
                </span>
                <span>

                  <label htmlFor="password">Password</label>
                  <input type="password" onChange={(e) => setPassword(e.target.value)} id='password' />
                </span>
                <button onClick={() => handleSignUp()} className='login'>Create Account</button>
                <button onClick={() => signinWidthGoogle()}><FcGoogle />Countinue Width Google</button>
                <h4>Or</h4>
                <Link to="/login" ><button>Login</button></Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return isLogin === "checking" && <PreLoader />

}

export default SignUp;