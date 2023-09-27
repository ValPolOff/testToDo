import React, { ReactNode, useState } from "react";
import s from './Modal.module.css'
import Image from "next/image";
import useModal from "@/app/hook/useModal";

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
    task: (obj:{ id: number; text: string; time: string; performance:boolean}[]) => void;
    value:string;
    objTask: {
      id: number;
      text: string;
      time: string;
      performance: boolean;
  }[];
    index:number;
  }

export default function ModalReName (props: ModalType) {
    //const { isOpen, toggle } = useModal();

    const [value,setValue] = useState('')
    
    const [taskN, setTask] = useState('')

    let pushText = () => {

        const A = [...props.objTask];
        A[props.index].text = taskN
        
        props.task(A)
      //([...props.objTask, {id:props.objTask.length+1, text:taskN, time:'12:00:00', performance:props.objTask[].performance}])
      
    }
      const [errorText, setErrorText] = useState('')
    return (
        <>
          {props.isOpen && props.value === '1' && (
            <div className={s.modalOverlay} onClick={() => {props.toggle(),setErrorText('')}}>
              <div onClick={(e) => e.stopPropagation()} className={s.modalBox}>
                {props.children}
                <div>
                  <div className={s.h1}>Rename task</div>
                  <input className={s.interTask} placeholder="    Enter text..." value={taskN} onChange={(event) => setTask(event.target.value)}></input>
                  <div className={s.blockH1}>
                    <button className={s.save} onClick={() => {taskN.length === 0 ? setErrorText('You have not entered text') : (pushText(),setErrorText(''),props.toggle(),setValue(''))}}>
                      <Image alt='okTask' src='Check_ring.svg' width={25} height={25} />
                      Save
                    </button>
                    <button className={s.close} onClick={() => {props.toggle(),setErrorText('')}}>
                      <Image alt='noTask' src='material-symbols_today.svg' width={25} height={25} />
                      Close
                    </button>
                  </div>
                  <div className={s.errorText}>{errorText}</div>
                  
          </div>
              </div>
              
            </div>
          )}
        </>
        )
}