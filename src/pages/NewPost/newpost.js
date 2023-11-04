import classNames from "classnames/bind";
import styles from "./newpost.css";

const cx = classNames.bind(styles);
function NewPost() {
  return (
    <div className={cx("home-wrapper")}>
      <h2>NewBox</h2>
    </div>
  );
}

export default NewPost;
