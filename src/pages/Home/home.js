import classNames from "classnames/bind";
import styles from "./home.css";
import SideBar from "../../component/SideBar/sidebar";

const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx("home-wrapper")}>
      <SideBar />
      <div className="content">Content</div>
    </div>
  );
}

export default Home;
