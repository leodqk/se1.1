import classNames from "classnames/bind";
import styles from "./inbox.css";
import { CircleAvatar } from "../../component/CircleAvatar/CircleAvatar";

const cx = classNames.bind(styles);
function Inbox() {
  return (
    <div className={cx("home-wrapper")}>
      <h2>Inbox</h2>
      <CircleAvatar
        url={
          "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-1/375453776_1693391297831058_7252749887600126334_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ER8zvWFm2e8AX9y6ISi&_nc_ht=scontent-hkg4-1.xx&oh=00_AfDBggmcRV7M3x3fdQsQNdOWYUCT9EK9muk4sbSlKtQL9w&oe=655B8D29"
        }
        size={"56"}
      />
    </div>
  );
}

export default Inbox;
