import classNames from "classnames";
import styles from "./nav_item.css";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function NavItem({ icon, activeIcon, title, isActive, onClick, path }) {
  return (
    <Link className={cx("nav-item")} to={path} onClick={onClick}>
      {isActive ? activeIcon : icon}

      <p
        className={cx("text-item")}
        style={{ fontWeight: isActive ? "600" : "normal" }}
      >
        {title}
      </p>
    </Link>
  );
}

export default NavItem;
