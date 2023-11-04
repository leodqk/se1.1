import classNames from "classnames/bind";
import styles from "./login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";

const cx = classNames.bind(styles);

function Login() {
  return (
    <div className={cx("login-card")}>
      <div className={cx("column")}>
        <h1>Đăng nhập</h1>
        <p>After logining in, you can enjoy !</p>
        <form action="" className={cx("main-form")}>
          <Form className={cx("input-form")}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>

          <div className={cx("flex")}>
            <Button variant="primary">Đăng nhập</Button>{" "}
            <a href="">Quên mật khẩu?</a>
            <span>
              Chưa có tài khoản? <a href="">Đăng kí</a>
            </span>
          </div>
          <span>Hoặc đăng nhập bằng</span>
          <div className={cx("social-btn")}>
            <a href="">
              <BsFacebook />
            </a>
            <a href="">
              <BsGithub />
            </a>
            <a href="">
              <BsGoogle />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
