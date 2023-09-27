import React, { ReactNode, useState } from "react";
import s from './Modal.module.css'
import Image from "next/image";
import useModal from "@/app/hook/useModal";

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
    deleteIndex:number;
    setObjTask: (obj:{ id: number; text: string; time: string; performance:boolean}[]) => void;
    objTask: {
        id: number;
        text: string;
        time: string;
        performance: boolean;
    }[];
    value:string;
    //value: (obj:string) => void;
    /*butt: string;//
    name: (obj:string) => void;
    task: (obj:string[]) => void;*/
  }

export default function ModalDelete (props: ModalType) {
    //const { isOpen, toggle } = useModal();
    
    const DeleteTask = () => {
      const obj = [...props.objTask];
      obj.splice(props.deleteIndex,1);
      return obj
    }
    return (
        <>
          {props.isOpen && props.value == '2' && (
            <div className={s.modalOverlay} onClick={props.toggle}>
              <div onClick={(e) => e.stopPropagation()} className={s.modalBox}>
                {props.children}
                <div>
                  <div className={s.h1}>Delete task</div>
                  <span className={s.areYou}>Are you sure about deleting this task?</span>
                  <div className={s.blockH1}>
                    <button className={s.delete} onClick={() => {props.setObjTask(DeleteTask())}}>
                      <Image alt='okTask' src='material-symbols_today (1).svg' width={25} height={25} />
                      Delete
                    </button>
                    <button className={s.close} onClick={props.toggle}>
                      <Image alt='noTask' src='material-symbols_today.svg' width={25} height={25} />
                      Close
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}
        </>
        )
}