import Register from "./register";
import News from "./news";
import styles from "./styles.module.css"
import React from 'react'
function Introduce(){
    return (
        <div className="introduce">
            <Register />
            <News />
        </div>
    )
}
export default Introduce;