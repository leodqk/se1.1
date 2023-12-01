import classNames from "classnames/bind";
import styles from "./noti.css";
import { CircleAvatar } from "../../component/CircleAvatar/CircleAvatar";
import { SquareAvatar } from "../../component/SquareAvatar/SquareAvatar";

const cx = classNames.bind(styles);
function Noti() {
  return (
    <div className={cx("noti-wrapper")}>
      <h2>Thông báo</h2>
      <div className={cx("noti-content")}>
        <p>Hôm nay</p>
        <div className={cx("noti-status")}>
          <div className={cx("avatar-with-text")}>
            <CircleAvatar
              url={"https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/356823130_1749760528817072_401657410106319200_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHQBaghPhVLuA4KZ0mm-nXuuH9-yO26Lk64f37I7bouThYtT_vVm2NppdYdMGzjQGeGYg3RTwbc1b03qKh9yXCl&_nc_ohc=yLclErrFJdUAX8-xQ-C&_nc_ht=scontent.fhan20-1.fna&oh=00_AfApbZT1DKSkNw6GzmDehmuapslUSPSy8lk-YG2tWU5wlg&oe=656503F0"}
              size={40}
            />
            <p className="centered-text">Khải đần đã thêm 1 ảnh mới </p>
            <SquareAvatar
              url={"https://instagram.fhan14-3.fna.fbcdn.net/v/t51.2885-15/405237334_2115490632170974_238738042350611939_n.jpg?stp=dst-jpg_e35_s1080x1080&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDEwNzIuc2RyIn0&_nc_ht=instagram.fhan14-3.fna.fbcdn.net&_nc_cat=110&_nc_ohc=3K5jUzxI4skAX837PDN&edm=ACWDqb8BAAAA&ccb=7-5&_nc_e2o=s&oh=00_AfAT_OfONgPVM4-ktqjz6EA1Yx4TK6SBWruNTPeks6tHJQ&oe=656F18A1&_nc_sid=ee9879"}
              size={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Noti;
