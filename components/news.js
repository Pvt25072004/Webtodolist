import styles from "./styles.module.css"
function News(){
    return (
        <div className={styles.news}>
            <h3>BÀI VIẾT MỚI</h3>
            <div className={styles.news__flex}>
                <img src="meeting.png" alt=""></img>
                <h5>Hãy sống với sever the Earth</h5>
            </div>
            <p>
                T11 28 2017 | Công nghệ. Hệ điều hành. Máy chủ web. Mới trường phát triển.
            </p>
        </div>
    )
}
export default News