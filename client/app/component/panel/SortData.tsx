import Image from "next/image";
import { ReactNode, useState } from "react";
import s from './Panel.module.css'


interface ModalType {
    children?: ReactNode;
    count:number;
    setCount: (obj:number) => void;
    textTask:{
        id: number;
        text: string;
        time: string;
        performance: boolean;
    }[];
    sort:number;

  }
export default function SortData (props:ModalType) {

    const Today = '12:10:00'
    let page:number;
    props.sort === 1 ? page = Math.ceil(props.textTask.filter((e)=>e.performance===false).length/5): 
    props.sort === 2 ? page = Math.ceil(props.textTask.filter((e)=>e.performance===true).length/5):
    props.sort === 4 ? page = Math.ceil(props.textTask.sort((a,b)=>b.time>a.time ? 1:-1).length/5):
    props.sort === 6 ? page = Math.ceil(props.textTask.sort((a,b)=>a.time>b.time ? 1:-1).length/5):
    props.sort === 5 ? page = Math.ceil(props.textTask.filter((e)=>e.time === Today).length/5):
    page = Math.ceil(props.textTask.length/5);

    const handleKeyDownPag = (event:any) => {
        if (event.key === "ArrowRight") {
        console.log("ArrowRight")
        props.setCount(( props.count+1 >= Math.ceil(props.textTask.length/5) ? Math.ceil(props.textTask.length/5)-1:props.count+1))
        } else if (event.key === 'ArrowLeft') {
        props.setCount(props.count-1<0? props.count:props.count-1)
        
        }
  };
  const [valuePage,setValuePage] = useState('')
  const handleKeyDown = (event:any) => {
      if (event.key === 'Enter') {
      props.setCount((+valuePage >= page ? page-1 : +valuePage-1 < 0 ? +valuePage:+valuePage-1))
      } else if (event.key === 'Escape') {
      setValuePage('')
      
      }
};

    
    return (
        <div>
            <div className={s.pagination}>
                <button onClick={() => props.setCount(props.count-1<0? props.count:props.count-1)} onKeyDown={handleKeyDownPag}>
                    <Image src='1695739192.svg' width={25} height={25} alt='a' className={s.revers}/>
                </button>
                <div className={s.count}>{props.count+1 === page ? page : props.count+1}</div>
                <button onKeyDown={handleKeyDownPag} onClick={() => props.setCount( props.count+1 >= page ? page-1:props.count+1)} >
                    <Image src='1695739192.svg' width={25} height={25} alt='b' />
                </button>
            </div>
            <div className={s.inputPageTitle}>Enter page</div>
            <input className={s.inputPage} onKeyDown={handleKeyDown} value={+valuePage >= page+1 ? page : +valuePage < 1 ? '' : +valuePage} onChange={(event) => setValuePage(event.target.value)}></input>
        </div>           
    
    )}
