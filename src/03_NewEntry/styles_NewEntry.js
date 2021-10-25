import '../assets/styles/index.css';
import styled from 'styled-components';
import { SCListEntry } from '../02_Home/styles_Home';

const SCNewTransaction = styled.form`
    width: 90%;
    margin: 0 auto auto auto;
    display: flex;
    flex-direction: column;
`;

const SCNewValue = styled.input`
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

    const SCSubmitNewEntry = styled.div`
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







export { SCNewTransaction, SCNewValue, SCSubmitNewEntry}