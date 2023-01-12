import React from "react";
import Film from "./Cards/Film";
import s from './Movies.module.css'


const Movies = () => {
    return (
        <div className={s.container}>
            <div className={s.movies}>
                <Film />
            </div>
        </div>
    )
}


export default Movies