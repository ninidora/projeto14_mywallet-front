import axios from 'axios';

import React, { useContext, useState } from 'react';

import { SCMainContainer } from "../00_SignIn/styles_SignIn.js";
import { SCHeader, SCContent, SCInOutReport, SCCredit, SCDebit, SCBalance, SCNewEntries, SCNewEntry } from "./styles_Home.js";

import { AiOutlinePlusCircle as PlusIcon, AiOutlineMinusCircle as MinusIcon } from "react-icons/ai";
import { RiLogoutBoxRLine as LogOutIcon } from "react-icons/ri";

export default function Home() {

    return (
        <SCMainContainer>
            <SCHeader>
                <h1>Olá, USERNAME</h1>
                <LogOutIcon />
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
                        <PlusIcon />
                        <p>Nova Entrada</p>
                    </SCNewEntry>
                    <SCNewEntry>
                        <MinusIcon /> <p>Nova Saída</p>

                    </SCNewEntry>

                </SCNewEntries>

            </SCContent>




        </SCMainContainer>
    );
}