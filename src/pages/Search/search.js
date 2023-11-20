import classNames from "classnames/bind";
import styles from "./search.css";
import { MdCancel } from "react-icons/md";
const cx = classNames.bind(styles);
function Search() {
  return (
    <div className={cx("search-wrapper")}>
      <h2>Tìm kiếm</h2>
      <div className={cx("search-box")}>
        <MdCancel className={cx("cancel-icon")} />
        <input type="text" placeholder="Tìm kiếm" />
      </div>

      <div className={cx("search-content")}>
        <p>Không có nội dung tìm kiếm</p>
      </div>
    </div>
  );
}

export default Search;