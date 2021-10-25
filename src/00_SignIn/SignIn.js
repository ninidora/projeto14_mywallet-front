import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {UserContext} from '../services/contexts/UserContext.js';

import { login } from "../services/api/Api.js";

import { SCMainContainer, SCLettering, SCSignInForm, SCFormInput, SCWideButton, SCSubmitButton } from "./styles_SignIn.js";


export default function SignIn() {
    const [userData, setUserData] = useState({email:"", password:""});
    const { userToken, setUserToken } = useContext(UserContext);
    
    const history = useHistory();

    useEffect(() =>{
        if(userToken !== "") {
            history.push("/home");
        }
    }, [userToken]);
    
    function userSignIn(event) {
        event.preventDefault();
        const loginPromise = login(userData);
        loginPromise
            .then((res) => setUserToken(res.data))
            .catch(alert);
    }

    return (
        <SCMainContainer>
            {/* {console.log(">> :", userToken)} */}
            <SCLettering>
                <h1>MyWallet</h1>
            </SCLettering>

            <SCSignInForm onSubmit={userSignIn}>
                <SCFormInput required type="text" placeholder="E-mail" value={userData.email} onChange={(event) => setUserData({ ...userData, email: event.target.value })} />
                <SCFormInput required type="password" placeholder="Senha" value={userData.password} onChange={(event) => setUserData({ ...userData, password: event.target.value })} />
                <SCWideButton>
                    <SCSubmitButton type="submit">
                        <p>Entrar</p>
                    </SCSubmitButton>
                </SCWideButton>
                
                <SCWideButton><Link to="/sign-up">
                    <p>Primeira vez? Cadastre-se</p>
                </Link></SCWideButton>

            </SCSignInForm>
        </SCMainContainer>
    );
}