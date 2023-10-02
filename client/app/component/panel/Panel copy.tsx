"use client"
//import "./styles.css";

import useModal from "../../hook/useModal";

import Image from 'next/image'
import s from './Panel.module.css'
//import Modal from '../Modal/Modal'
import React, { ReactNode, createContext, useContext, useState, useEffect } from 'react';
import { document } from "postcss";
import TaskToDo from "../TaskToDo/TaskToDo";
import ModalSave from "../Modal/ModalSave";
import PopUpSort from "../PopUpSort/PopUpSort";
import ModalDelete from "../Modal/ModalDelete";
import Pagination from "../Pagination/Pagination";
import PopUp from "../PopUp/PopUp";




export default function Panel() {
    
    //const [textTask, setTextTask] = useState(['Task']);
    //INITIAL STATE
    const [textTask, setTextTask] = useState([
        {id:1, text:"Task 1", time: '12:30:00', performance:false},
        {id:2, text:"Task 2", time: '12:10:00', performance:false},
        {id:3, text:"Task 3", time: '12:10:00', performance:false},
        {id:4, text:"Task 4", time: '12:10:00', performance:false},
        {id:5, text:"Task 5", time: '12:10:00', performance:false},
        {id:6, text:"Task 6", time: '12:10:00', performance:false},
        {id:7, text:"Task 7", time: '12:10:00', performance:false},
        {id:8, text:"Task 8", time: '12:30:00', performance:false},
        {id:9, text:"Task 9", time: '12:10:00', performance:false},
        {id:10, text:"Task 10", time: '12:10:00', performance:false},
        {id:11, text:"Task 11", time: '12:10:00', performance:false},
        {id:12, text:"Task 12", time: '12:10:00', performance:false},
        {id:13, text:"Task 13", time: '12:10:00', performance:false},
        {id:12, text:"Task 12", time: '12:10:00', performance:false},
        {id:13, text:"Task 13", time: '12:10:00', performance:false},
        
    ]);
    //-------------
    //useEffect(() => {setTextTask})

    const { isOpen, toggle } = useModal();
    const [value,setValue] = useState('');
    const [name,setName] = useState('All');
    const [sort,setSort] = useState(3)
    const [count,setCount] = useState(0)
    const [countPag,setCountPag] = useState(0)
    const [sortDataValue,setsortDataValue] = useState(false)
    const sortData = () =>{
        sortDataValue === true ? setsortDataValue(false) : setsortDataValue(true);
        /*const a = textTask.sort((a,b)=>
        sortDataValue === true ? a.time>b.time ? 1:-1 : b.time>a.time ? 1:-1)
        console.log(a)
        setTextTask(a)*/
    }
    
    const Today = '12:10:00'
    useEffect(()=>{
        //console.log('OK')
        console.log(textTask,'1')
        setTextTask(textTask)
    },[textTask])
    
        const [valuePage,setValuePage] = useState('')
        const handleKeyDown = (event:any) => {
            if (event.key === 'Enter') {
            //console.log('Ent')
            //console.log(+valuePage > Math.floor(textTask.length/5) ? Math.floor(textTask.length/5) : +valuePage-1)
            setCount((+valuePage >= Math.ceil(textTask.length/5) ? Math.ceil(textTask.length/5)-1 : +valuePage-1 < 0 ? +valuePage:+valuePage-1))

            } else if (event.key === 'Escape') {
            //console.log('Esc')
            setValuePage('')
            
            }
      };

      const handleKeyDownPag = (event:any) => {
        if (event.key === "ArrowRight") {
        console.log("ArrowRight")
        //console.log(+valuePage > Math.floor(textTask.length/5) ? Math.floor(textTask.length/5) : +valuePage-1)
        setCount(( count+1 >= Math.ceil(textTask.length/5) ? Math.ceil(textTask.length/5)-1:count+1))

        } else if (event.key === 'ArrowLeft') {
        //console.log('Esc')
        
        setCount(count-1<0? count:count-1)
        
        }
  };

      useEffect(()=>{
        console.log(sort)
        setSort(sort)
      },[sort])
      //console.log(count+1 > Math.floor(textTask.length/5) ? Math.floor(textTask.length/5):count+1)
      //console.log(count + 'count')
    return (
        <div>
            <div className={s.panel}>
                <div>
                    <button className={s.panelToday} onClick={()=>{setSort(5)}}>
                        <Image alt='today' src='Vector.svg' width={22} height={22} />
                        <div>Today</div>
                    </button>
                    <button  className={value === '2' ? s.panelAll2 : s.panelAll} onClick={() => {toggle();setValue('2')}}>
                        {value === '2' ? (<Image src='done 1 (1).svg' width={25} height={25} alt='yes'/>) : (<Image alt='all' src='done 1.svg' width={27} height={27} />) }
                        {name}
                    </button>
                    <button className={s.panelData} onClick={() => {sortData(),sort === 4 ? setSort(6) : setSort(4),setsortDataValue(true)}}>
                        <Image alt='data' src='arrows 1.svg' width={27} height={27} />
                        Data
                    </button>
                    <button className={s.panelAddTask} onClick={() => {toggle();setValue('1')}} autoFocus>
                        <Image alt='Add task' src='Vector (1).svg' width={25} height={25} />
                        Add task
                    </button>
                </div>

                <div className={s.text}>
                    
                    {textTask.length === 1 ? (<></>) : 
                    (<div className={s.pagination}>
                            <button onClick={() => setCount(count-1<0? count:count-1)} onKeyDown={handleKeyDownPag}>
                                <Image src='1695739192.svg' width={25} height={25} alt='a' className={s.revers}/>
                            </button>
                            <div className={s.count}>{count+1 === Math.ceil(textTask.length/5) ? Math.ceil(textTask.length/5) : count+1}</div>
                            <button onKeyDown={handleKeyDownPag} onClick={() => setCount( count+1 >= Math.ceil(textTask.length/5) ? Math.ceil(textTask.length/5)-1:count+1)} >
                                <Image src='1695739192.svg' width={25} height={25} alt='b' />
                            </button>
                    </div>)}
                        
                        {   
                            sort === 1 ? (textTask.filter((e)=>e.performance===false).slice(0+5*count,5+5*count).map((text1,index)=>{ 
                                
                                return (
                                
                                    <TaskToDo index={index} text1={text1} setObjTask={setTextTask} objTask = {textTask} />
                                    
                                    )})
                            ) : sort === 2 ? (textTask.filter((e)=>e.performance===true).slice(0+5*count,5+5*count).map((text1,index)=>{
                                return (
                                    <TaskToDo index={index} text1={text1} setObjTask={setTextTask} objTask = {textTask} />)})
                            ) : sort === 4 ? (textTask.sort((a,b)=>b.time>a.time ? 1:-1).slice(0+5*count,5+5*count).map((text1,index)=>{
                                return (
                                    <TaskToDo index={index} text1={text1} setObjTask={setTextTask} objTask = {textTask} />)})
                            ) : sort === 5 ? (textTask.filter((e)=>e.time === Today).slice(0+5*count,5+5*count).map((text1,index)=>{
                                    return (
                                        <TaskToDo index={index} text1={text1} setObjTask={setTextTask} objTask = {textTask} />)})
                            ) : sort === 6 ? (textTask.sort((a,b)=>a.time>b.time ? 1:-1).slice(0+5*count,5+5*count).map((text1,index)=>{
                                return (
                                    <TaskToDo index={index} text1={text1} setObjTask={setTextTask} objTask = {textTask} />)})
                            ):(
                                textTask.slice(0+5*count,5+5*count).map((text1,index)=>{
                                    return ( 
                                        <TaskToDo index={index} text1={text1} setObjTask={setTextTask} objTask = {textTask} /> )})
                            )
                        }
                        
                </div>
                <div className={s.inputPageTitle}>Enter page</div>
            <input className={s.inputPage} onKeyDown={handleKeyDown} value={+valuePage >= Math.ceil(textTask.length/5)+1 ? Math.ceil(textTask.length/5) : +valuePage < 1 ? '' : +valuePage} onChange={(event) => setValuePage(event.target.value)}></input>
            </div>
            
            <PopUpSort isOpen={isOpen} toggle={toggle} name={setName} value={value} task={setTextTask} objTask = {textTask} sort={sort} setSort={setSort}/>
            <ModalSave isOpen={isOpen} toggle={toggle} task={setTextTask} objTask = {textTask} value={value}/>
        </div>
    )
}