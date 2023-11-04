import classNames from "classnames/bind";
import styles from "./noti.css";

const cx = classNames.bind(styles);
function Noti() {
  return (
    <div className={cx("home-wrapper")}>
      <h2>Noti</h2>
    </div>
  );
}

export default Noti;
