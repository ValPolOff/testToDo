"use client"
//import "./styles.css";

import useModal from "../../hook/useModal";

import Image from 'next/image'
import s from './TaskToDo.module.css'
//import Modal from '../Modal/Modal'
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { document } from "postcss";
import PopUp from "../PopUp/PopUp";
import { text } from "node:stream/consumers";

interface ModalType {
    children?: ReactNode;
    index:number;
    text1:{
        id: number;
        text: string;
        time: string;
        performance: boolean;
    };
    setObjTask: (obj:{ id: number; text: string; time: string; performance:boolean}[]) => void;
    objTask: {
        id: number;
        text: string;
        time: string;
        performance: boolean;
    }[];

  }

export default function TaskToDo (props:ModalType) {
    const [doIt, setDoIt] = useState(false)
    const { isOpen, toggle } = useModal();
    
    
    useEffect(()=>{
        
        props.setObjTask(props.objTask)
    },[props.text1])

    const F = () => {
        //doIt === true ? (props.setObjTask([...props.objTask, props.objTask[props.index].performance = true])) : (props.perfomance([props.objTask]));
        props.text1.performance === true ? props.text1.performance=false : props.text1.performance=true
        /*const Ad = props.objTask.map((e,i)=>{ i === props.index ? e.performance===true ? e.performance=false : e.performance=true : e.performance ;
        return e
        } ) */  
            console.log(props.index)    
            console.log(props.text1)
            //props.setObjTask(props.objTask)
    }
        //const TaskName = 
        
        return (
            <>
            <div key={props.index}>
                    <div className={s.task}>
                        <div className={s.task1}>
                            <button onClick={() => {setDoIt(doIt ? false: true),F()}}>  
                                {props.text1.performance===true ? (<Image alt='ok' src='Check_ring.svg' width={25} height={25} />):(<Image alt='ok' src='Group.svg' width={25} height={25} />)}
                            </button>
                            {<div>{props.text1.text.length > 20 ? props.text1.text.substring(0,20) + '...': props.text1.text}</div>}
                        </div>

                        <div className={s.task2}>
                            {<div >{props.text1.time}</div>}
                            <button onClick={() => { toggle(); /*setValue('3'); /*setDoDont(true)*/ }}>
                                <Image alt='settings'  src='Vector (2).svg' width={4} height={4} />
                            </button>
                            
                        </div>

                        
                    
                    </div>
                    <PopUp isOpen={isOpen} toggle={toggle} deleteIndex={props.index} setObjTask={props.setObjTask} objTask = {props.objTask} index={props.index}/>
                    <div className={s.popup}>
                        
                    </div>
                    
            </div>
            
            </>
        ) 
}