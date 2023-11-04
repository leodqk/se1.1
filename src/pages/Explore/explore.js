import classNames from "classnames/bind";
import styles from "./explore.css";

const cx = classNames.bind(styles);
function Explore() {
  return (
    <div className={cx("home-wrapper")}>
      <h2>Explore</h2>
    </div>
  );
}

export default Explore;
