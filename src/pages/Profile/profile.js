import classNames from "classnames/bind";
import styles from "./profile.css";

const cx = classNames.bind(styles);
function Profile() {
  return (
    <div className={cx("home-wrapper")}>
      <h2>Profile</h2>
    </div>
  );
}

export default Profile;
