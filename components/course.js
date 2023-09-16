import React from "react";
import styles from "./styles.module.css"
function Course(){
    return (
        <div className={styles.course}>
            <img src="computer.png" alt="" className={styles.course__img}></img>
            <div>
                <h3>HƯỚNG DẪN HỌC REACT JS</h3>
                <span>Posted by Nguyen Nhan | Th2 23.2016 | Javascript</span>
                <span>React | <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p></span>
                <p>Hướng dẫn học React js sao cho hiệu quả. Nếu bạn mới làm quen với React hoặc phần font-end mới...</p>
                <button>Read More</button>
            </div>
        </div>
    )
}
export default Course;