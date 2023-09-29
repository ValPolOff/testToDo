import { ReactNode, memo, useEffect, useState } from "react";
import Styles from './Pagination.module.css';
import Image from "next/image";
import s from './Pagination.module.css'

interface ModalType {
    children?: ReactNode;
    textTask:number;
    count:number;
    setCount:(obj:number)=>void;
  }

export default function Pagination (props: ModalType) {


    return (
        <>
                    <div className={s.pagination}>
                            <button onClick={() => props.setCount(props.count-1<0? props.count:props.count-1)}>
                                <Image src='1695739192.svg' width={25} height={25} alt='a' className={s.revers}/>
                            </button>
                            <div className={s.count}>{props.count+1}</div>
                            <button onClick={() => props.setCount( props.count+1 > Math.floor(props.textTask/5) ? Math.floor(props.textTask/5):props.count+1)} >
                                <Image src='1695739192.svg' width={25} height={25} alt='b' />
                            </button>
                    </div>
                        
        </>
    )
}
  