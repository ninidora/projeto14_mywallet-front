import React from 'react';

import { SCMainContainer, SCSubmitButton } from "../00_SignIn/styles_SignIn.js";
import { SCHeader, SCContent } from "../02_Home/styles_Home.js";
import { SCNewTransaction, SCNewValue, SCSubmitNewEntry} from "./styles_NewEntry.js";

export default function NewEntry() {

    return (
        <SCMainContainer>
            <SCHeader>
                <h1>Nova "entrada/saída"</h1>
                
            </SCHeader>
            <SCContent>
                <SCNewTransaction>
                <SCNewValue required type="text" placeholder="Valor" onChange={(event) => console.log(event.target.value)} />
                <SCNewValue required type="text" placeholder="Descrição" onChange={(event) => console.log(event.target.value)} />
               <SCSubmitNewEntry>
                    <SCSubmitButton type="submit">
                        <p>Salvar "entrada/saída"</p>
                    </SCSubmitButton>
                </SCSubmitNewEntry>
                
            </SCNewTransaction>               
            </SCContent>
        </SCMainContainer>
    );
}