import classNames from "classnames/bind";
import styles from "./square_avatar.css";
const cx = classNames.bind(styles);

function SquareAvatar({ url, size, onclick }) {
    return (
        <img
            className={cx("img_noti")}
            src={url}
            style={{ width: `${size}px`, height: `${size}px` }}
            onClick={onclick}
            alt=""
        />
    );
}

export { SquareAvatar };
