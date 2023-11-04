import classNames from "classnames/bind";
import styles from "./reels.css";

const cx = classNames.bind(styles);
function Reels() {
  return (
    <div className={cx("home-wrapper")}>
      <h2>Reels</h2>
    </div>
  );
}

export default Reels;
