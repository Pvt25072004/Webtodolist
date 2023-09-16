
import styles from "./styles.module.css"
function Register(){
    return (
        <div className="register">
            <h3>ĐĂNG KÝ NHẬN BÀI VIẾT MỚI</h3>
            <p>Công nghệ đang thay đổi nhanh chóng hãy vươn ra thế giới với những bài viết chất lượng từ Fullstack bạn cần</p>
            <input placeholder="TÊN CỦA BẠN"></input><br/>
            <input placeholder="EMAIL CỦA BẠN"></input>
            <p><input type="checkbox"></input>I agree to the above terms</p>
            <button>ĐĂNG KÝ</button>
            <p>Bạn sẽ nhận được email thông báo khi có bài viết mới không spam vì mình cũng rất ghét !</p>
        </div>
    )
}
export default Register;