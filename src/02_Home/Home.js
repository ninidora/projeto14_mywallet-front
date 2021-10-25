import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../services/contexts/UserContext.js';

import { getUserTransactions } from "../services/api/Api.js";
import Transaction from "./Transaction.js";

import { SCMainContainer } from "../00_SignIn/styles_SignIn.js";
import { SCHeader, SCContent, SCInOutReport, SCListEntry, SCBalance, SCNewEntries, SCNewEntry } from "./styles_Home.js";

import { AiOutlinePlusCircle as PlusIcon, AiOutlineMinusCircle as MinusIcon } from "react-icons/ai";
import { RiLogoutBoxRLine as LogOutIcon } from "react-icons/ri";

export default function Home() {
    const { userToken } = useContext(UserContext);
    const [transactions, setTransactions] = useState([""]);

    useEffect(() => {
        const transactionsPromise = getUserTransactions(userToken);
        transactionsPromise
            .then((res) => setTransactions(res.data))
            .catch(alert);
    }, []);



    return (
        <SCMainContainer>
            {console.log(userToken)}
            {console.log(transactions)}
            <SCHeader>
                <h1>Olá, USERNAME</h1>
                <LogOutIcon />
            </SCHeader>
            <SCContent>
                <SCInOutReport entriesArray={transactions}>
                    {transactions.map((transaction) =><Transaction transaction={transaction}></Transaction>) }

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