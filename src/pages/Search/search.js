import classNames from "classnames/bind";
import styles from "./search.css";
import { AiOutlineSearch } from "react-icons/ai";
const cx = classNames.bind(styles);
function Search() {
  return (
    <div className={cx("search-wrapper")}>
      <h2>Tìm kiếm</h2>
      <div className={cx("search-box")}>
        <AiOutlineSearch />
        <input type="text" placeholder="Tìm kiếm" />
      </div>

      <h4>Gần đây</h4>
    </div>
  );
}

export default Search;
