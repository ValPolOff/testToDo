import { ReactNode, memo } from "react";
import Styles from './Pagination.module.css';

interface ModalType {
    children?: ReactNode;
    textTask:{
        id: number;
        text: string;
        time: string;
        performance: boolean;
    }[];
    setTextTask: (obj:{ id: number; text: string; time: string; performance:boolean}[]) => void;
  }

export default function Pagination (props: ModalType) {
    const count = 0;
    const chunkSize = 5;
    const res = [];
    for (let i = 0; i < props.textTask.length; i += chunkSize) {
        const chunk = props.textTask.slice(i, i + chunkSize);
        res.push(chunk);
    }
    console.log(res)
    console.log(res[count])
    return (
        <>
            <button onClick={() => {(count-1);console.log(count)}}>-</button>
            <button onClick={() => count+1}>+</button>
        </>
    )
}
  