import axios from 'axios';

import React, { useContext, useState } from 'react';

import { SCMainContainer } from "../00_SignIn/styles_SignIn.js";
import { SCHeader, SCContent, SCInOutReport, SCCredit, SCDebit, SCBalance, SCNewEntries, SCNewEntry } from "../02_Home/styles_Home.js";

export default function Home() {

    return (
        <SCMainContainer>
            <SCHeader>
                <h1>Nova "entrada/saída"</h1>
                
            </SCHeader>
            <SCContent>
                <SCInOutReport>
                    <SCCredit>
                        <p> DD-MM </p>
                        <p> _ description _ </p>
                        <p> amount </p>
                    </SCCredit>
                    <SCDebit>
                        <p> DD-MM </p>
                        <p> _ description _ </p>
                        <p> amount </p>
                    </SCDebit>
                    <SCCredit>
                        <p> DD-MM </p>
                        <p> _ description _ </p>
                        <p> amount </p>
                    </SCCredit>
                    <SCCredit>
                        <p> DD-MM </p>
                        <p> _ description _ </p>
                        <p> amount </p>
                    </SCCredit>
                    <SCDebit>
                        <p> DD-MM </p>
                        <p> _ description _ </p>
                        <p> amount </p>
                    </SCDebit>
                
                <SCBalance>
                    <h1> SALDO </h1>
                    <p>348,12</p>
                </SCBalance>
                </SCInOutReport>
                <SCNewEntries>
                    <SCNewEntry>
                        
                        <p>Nova Entrada</p>
                    </SCNewEntry>
                    <SCNewEntry>
                         <p>Nova Saída</p>

                    </SCNewEntry>

                </SCNewEntries>

            </SCContent>




        </SCMainContainer>
    );
}