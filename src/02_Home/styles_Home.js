import '../assets/styles/index.css';
import styled from 'styled-components';

const SCHeader = styled.div`
    height: 50px;
    width: 100%;
    margin: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #FFFFFF;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-size: 26px;
    & h1 {
        margin: auto auto auto 0px;
        font-weight: 700;
        line-height: 31px;
    }
`;

const SCContent = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 400;
`;

const SCInOutReport = styled.ul`
    width: 90%;
    height: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
`;

const SCListEntry = styled.li`
    width: 90%;
    height: 20px;
    display: flex;
    color: ${props =>( props.amount >= 0 ? '#03AC00' : '#C70000')};
`;

const SCBalance = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    & h1 {
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
    }
`;

const SCNewEntries = styled.div`
    width: 90%;
    height: 20%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FFFFFF;
    font-size: 17px;
    font-weight: 700;
`;

const SCNewEntry = styled.div`
    width: 45%;
    height: 100%;
    background-color: #A328D6;
    border-radius: 5px;
`;


export { SCHeader, SCContent, SCInOutReport, SCListEntry, SCBalance, SCNewEntries, SCNewEntry };