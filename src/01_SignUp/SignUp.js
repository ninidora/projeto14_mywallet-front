import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import {UserContext} from '../services/contexts/UserContext.js';

import { SCMainContainer, SCLettering, SCSignInForm, SCFormInput, SCWideButton, SCSubmitButton } from "../00_SignIn/styles_SignIn.js";


export default function SignUp() {
    const { userData, setUserData } = useContext(UserContext);

    return (
        <SCMainContainer>
            <SCLettering>
                <h1>MyWallet</h1>
            </SCLettering>

            <SCSignInForm>
                <SCFormInput required type="text" placeholder="Nome" />
                <SCFormInput required type="text" placeholder="E-mail" />
                <SCFormInput required type="password" placeholder="Senha" />
                <SCFormInput required type="password" placeholder="Confirme a senha" />
                <SCWideButton>
                    <SCSubmitButton type="submit">
                        <p>Cadastrar</p>
                    </SCSubmitButton>

                </SCWideButton>
                <SCWideButton><Link to="/">
                    <p>Já tem uma conta? Entre agora!</p>
                </Link></SCWideButton>

            </SCSignInForm>
        </SCMainContainer>
    );
}