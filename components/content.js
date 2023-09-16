import styles from "./styles.module.css"
import Course from "./course"
import React from "react";
function Content(){
    return (
        <div className="content">
            <h1> SERIES: REACT JS: TỪ CƠ BẢN ĐẾN NÂNG CAO</h1>
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
        </div>
    )
}
export default Content;