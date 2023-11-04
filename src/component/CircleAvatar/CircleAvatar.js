import classNames from "classnames/bind";
import styles from "./circle_avatar.css";
const cx = classNames.bind(styles);

function CircleAvatar({ url, size, onclick }) {
  return (
    <img
      className={cx("avt")}
      src={url}
      style={{ width: `${size}px`, height: `${size}px` }}
      onClick={onclick}
      alt=""
    />
  );
}

export { CircleAvatar };
