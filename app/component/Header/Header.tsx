//import "./Header.module.css"
import Image from 'next/image'
import style from './Header.module.css'

export default function Header () {
    return (
        
        <header className={style.header}>
            <div className={style.toDo}>To Do</div>
            <div className={style.userName}>User Name</div>
            <Image src='bi_person-circle.svg' alt={style.imageProf}  width={40} height={40} />
        </header>
    )
}