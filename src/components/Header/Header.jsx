import React from "react";
import s from './Header.module.css'




const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header_content}>
                <a href="#" className={s.header_logo}>  KosmosFilms </a>
                <form>
                    <input type="text" className={s.header_search} placeholder='Поиск' />
                </form>
            </div>
        </header>
    )
}


export default Header