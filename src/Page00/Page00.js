import axios from 'axios';

//import { Link, useHistory } from 'react-router-dom';
import React, { useContext, useState } from 'react';
//import LoggedUserContext from '../contexts/LoggedUserContext';


//import {  } from "./styles_Page00.js";


export default function Page00() {
    //const { userInfo, setUserInfo } = useContext(LoggedUserContext);
    //const history = useHistory();
    //const [localData, setLocalData] = useState({ email: "", password: "" });

    /*
    function SignInUser(event) {
        event.preventDefault();
        setIsLoading(true);
        
        const logInPromise = axios.post(SIGNIN_URL, localData);
        logInPromise.then(promiseThen);
        logInPromise.catch(promiseCatch);
    };
    */
    /*
    function promiseThen(response) {
        const { id, name, image, email, token } = response.data;
        setUserInfo({ ...userInfo, id, name, image, email, token });
        setIsLoading(false);
        history.push("/habitos");
    }
    function promiseCatch(error) {
        alert(`Erro ${error.response.status}: ${error.response.data.message}`);
    }
    */
    return (
        <>
            {/* <Logo src={TrackItLogo} /> */}

            <LoginFields onSubmit={SignInUser} >
                <InputField required type="text" placeholder="email" value={localData.email} onChange={(event) => setLocalData({ ...localData, email: event.target.value })} />

                <WideButton>
                    <SignInButton type="submit" >
                        <p> Entrar </p>
                    </SignInButton>
                </WideButton>
                <WideButton>
                    <SignUpButton ><Link to="/cadastro">
                        <p>
                            Não tem uma conta? Cadastre-se!
                        </p>
                    </Link></SignUpButton>
                    <h3>{isLoading ? 'loading...' : ""}</h3>
                </WideButton>
            </LoginFields>
        </>
    );
}