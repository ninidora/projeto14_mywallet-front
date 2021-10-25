import { SCListEntry } from "./styles_Home.js";
//import dayjs from 'dayjs';
export default function Transaction({ transaction }) {
    const {date, description, amount} = transaction;
    return (
        <>
            <SCListEntry signal={amount}> <p>{date}</p>
                <p> {description} </p>
                <p> {amount} </p></SCListEntry>




        </>
    )
};