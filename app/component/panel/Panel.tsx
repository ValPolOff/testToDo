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
        {id:2, text:"Task 3", time: '12:10:00', performance:false},
        {id:2, text:"Task 4", time: '12:10:00', performance:false},
        {id:2, text:"Task 5", time: '12:10:00', performance:false},
        {id:2, text:"Task 6", time: '12:10:00', performance:false},
        {id:2, text:"Task 7", time: '12:10:00', performance:false},
    ]);
    //-------------
    //useEffect(() => {setTextTask})

    const { isOpen, toggle } = useModal();
    const [value,setValue] = useState('');
    const [name,setName] = useState('All');
    const [sort,setSort] = useState(3)
    const [count,setCount] = useState(0)
    const sortData = () =>{
        const a = textTask.sort((a,b)=>
        a.time>b.time ? 1:-1)
        console.log(a)
        setTextTask(a)
    }
 
    const Today = '12:10:00'
    useEffect(()=>{
        console.log('OK')
        
        setTextTask(textTask)
    },[textTask])
    
    /*function sliceIntoChunks() {
        
        const chunkSize = 10;
        const res = [];
        for (let i = 0; i < textTask.length; i += chunkSize) {
            const chunk = textTask.slice(i, i + chunkSize);
            res.push(chunk);
        }
        console.log(res)
        return res;
    }*/


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
                
                <button className={s.panelData} onClick={() => {sortData(),setSort(4)}}>
                    <Image alt='data' src='arrows 1.svg' width={27} height={27} />
                    Data
                </button>
                <button className={s.panelAddTask} onClick={() => {toggle();setValue('1')}}>
                    <Image alt='Add task' src='Vector (1).svg' width={25} height={25} />
                    Add task
                </button>
                </div>

                
                <div className={s.text}>

                    
                    <div className={s.pagination}>
                            <button onClick={() => setCount(count-1<0? count:count-1)}>
                                <Image src='1695739192.svg' width={25} height={25} alt='a' className={s.revers}/>
                            </button>
                            <div className={s.count}>{count+1}</div>
                            <button onClick={() => setCount( count+1 > Math.floor(textTask.length/5) ? Math.floor(textTask.length/5):count+1)} >
                                <Image src='1695739192.svg' width={25} height={25} alt='b' />
                            </button>
                    </div>
                        {   
                            sort === 1 ? (textTask.filter((e)=>e.performance===false).slice(0+4*count,5+4*count).map((text1,index)=>{ 
                                
                                return (
                                    
                                   
                                    <TaskToDo index={index} text1={text1} setObjTask={setTextTask} objTask = {textTask} />
                                    
                                    )})
                            ) : sort === 2 ? (textTask.filter((e)=>e.performance===true).slice(0+4*count,5+4*count).map((text1,index)=>{
                                return (
                                    <TaskToDo index={index} text1={text1} setObjTask={setTextTask} objTask = {textTask} />)})
                            ) : sort === 4 ? (textTask.slice(0+4*count,5+4*count).map((text1,index)=>{
                                return (
                                    <TaskToDo index={index} text1={text1} setObjTask={setTextTask} objTask = {textTask} />)})
                            ) : sort === 5 ? (textTask.filter((e)=>e.time === Today).slice(0+4*count,5+4*count).map((text1,index)=>{
                                    return (
                                        <TaskToDo index={index} text1={text1} setObjTask={setTextTask} objTask = {textTask} />)})
                            ) : (
                                textTask.slice(0+4*count,5+4*count).map((text1,index)=>{
                                    return (
                                        <TaskToDo index={index} text1={text1} setObjTask={setTextTask} objTask = {textTask} />)})
                            )
                        }

                </div>
            
            </div>
            
            <PopUpSort isOpen={isOpen} toggle={toggle} name={setName} value={value} task={setTextTask} objTask = {textTask} sort={sort} setSort={setSort}/>
            <ModalSave isOpen={isOpen} toggle={toggle} task={setTextTask} objTask = {textTask} value={value}/>
        </div>
    )
}