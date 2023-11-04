import classNames from "classnames/bind";
import styles from "./inbox.css";

const cx = classNames.bind(styles);
function Inbox() {
  return (
    <div className={cx("home-wrapper")}>
      <h2>Inbox</h2>
    </div>
  );
}

export default Inbox;
