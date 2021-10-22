//import axios from 'axios';

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext.js';


import { SCMainContainer, SCLettering, SCSignInForm, SCFormInput, SCWideButton, SCSubmitButton } from "./styles_SignIn.js";


export default function SignIn() {
    const { userData, setUserData } = useContext(UserContext);

    function userSignIn(event) {
        event.preventDefault();
        console.log(userData);
        //const loginPromise = ...
    }


    return (
        <SCMainContainer>
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
                <SCWideButton><Link to="/sign-in">
                    <p>Primeira vez? Cadastre-se</p>
                </Link></SCWideButton>

            </SCSignInForm>

        </SCMainContainer>
    );
}