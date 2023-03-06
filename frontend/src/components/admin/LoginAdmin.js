import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate as UseNavigate } from 'react-router-dom';
 
const LoginAdmin = () => {
    const Navigate = UseNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            Navigate("/UserList")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(

                        <form class='w3-center' style={{padding:"100px"}}>                                              
                            <div>
                                <input class="w3-input w3-border"
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>
                            <br/>
                            <div>
                                <input class="w3-input w3-border"
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                            <br/>        
                            <div>
                                <button class="w3-button w3-block w3-section w3-blue w3-ripple w3-padding"                           
                                    onClick={onLogin}                                        
                                >      
                                    Login                                                                  
                                </button>
                            </div>                               
                        </form>
    )
}
 
export default LoginAdmin;