import '../assets/styles/index.css';
import styled from 'styled-components';

const SCMainContainer = styled.div`
    width: 95vw;
    height: 95vh;
    display: flex;
    margin: 5px;
    flex-direction: column;
    align-items: center;
    background-color: #8C11BE;
`;

const SCLettering = styled.div`
    height: 50px;
    margin: auto auto 24px auto;
    display: flex;
    
    & h1 {
        font-family: 'Saira Stencil One', cursive;
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF;
    }
`;


const SCSignInForm = styled.form`
    width: 90%;
    /* height: 245px; */
    margin: 0 auto auto auto;
    display: flex;
    flex-direction: column;
    
`;

const SCFormInput = styled.input`
    width: 100%;
    height: 58px;
    margin: 0 auto 13px auto;
    border-radius: 5px;
    background-color: #FFFFFF;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
`;

const SCWideButton = styled.div`
    display: flex;
    height: 58px;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    
    & p {        
        margin: auto;
        color: #FFFFFF;
    }

    & a {
        text-decoration: none;
        margin: auto;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
    }
`;

const SCSubmitButton = styled.button`
    width: 100%;
    height: 58px;
    margin: 0 auto 13px auto;
    border-radius: 5px;
    background-color: #A328D6;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    border: none;
`;

export { SCMainContainer, SCLettering, SCSignInForm, SCFormInput, SCWideButton, SCSubmitButton };