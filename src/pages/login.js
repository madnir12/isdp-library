import {FcGoogle} from 'react-icons/fc'
import { useNavigate,Link } from 'react-router-dom';
import React,{useState} from 'react'
import {getAuth,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";
import {app} from '../assets/config/firebaaseconfig'
import PreLoader from '../comps/PreLoader'
import { signinWidthGoogle } from '../assets/config/firebaaseconfig';
import {BiError} from 'react-icons/bi'

function Login() {
  const [password, setPassword] = useState()
const [email, setEmail] = useState()
  const [isLogin, setIsLogin] = useState("checking")
  const [errorDisplay, setErrorDisplay] = useState(false)
  const navigate = useNavigate()
  const auth = getAuth(app);
  const handleLogin = ()=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorDisplay(true)
  });
  }
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLogin(true)
      
    } else {
            setIsLogin(false)
      console.log("not login")
    }
  }); 
  if(isLogin == true){  navigate("/")}
  else if(isLogin == false) {
    return (
      <div className="background">
                <div className="front-div">
                          <img className='img-abs' src="https://pngimg.com/uploads/book/book_PNG51090.png" alt="" />
                        <div className="headings-container">

                        <h2>Welcome To ISDP Library</h2>
                        <h3>Let's Login to continue  </h3>
                        <div className="form-container">
                          <div className="error-message" style={{display: errorDisplay ? "flex" : "none"}}>
                            <BiError/>
                            <h5>There is an issue with email or password</h5>
                          </div>
                          <form action="" onSubmit={(event)=> event.preventDefault()}>
                                    <span>
                                              
                                    <label htmlFor="email">Email</label>
                                    <input type="text" id='email' onChange={(e)=> setEmail(e.target.value)} />
                                    </span>
                                    <span>

                                    <label htmlFor="password">Password</label>
                                    <input type="password" id='password' onChange={(e)=> setPassword(e.target.value)}/>
                                    </span>
                                    <button onClick={()=> handleLogin()} className='login'>Login</button>
                                    <button onClick={()=> signinWidthGoogle()}><FcGoogle/> Continue Width Google</button>
                                    <h4>Or</h4>
                                    <Link to="/signup"><button>Create New Account</button></Link>
                          </form>
                          </div>  
                        </div>
                </div>
      </div>
)
  } 
  return isLogin === "checking" && <PreLoader/>
  
}

export default Login