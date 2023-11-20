import classNames from "classnames/bind";
import styles from "./sidebar.css";
import Logo from "../Image/logo/logo";
import NavItem from "../NavItem/nav_item";
import {
  IconHome,
  IconHomeActive,
  IconSearch,
  IconSearchActive,
  IconExplore,
  IconExploreActive,
  IconReels,
  IconReelsActive,
  IconMess,
  IconMessActive,
  IconNotification,
  IconNotificationActive,
  IconNewPost,
  IconSettingMenu,
} from "../Icon/index";

import { CircleAvatar } from "../CircleAvatar/CircleAvatar";
import { useState } from "react";
const cx = classNames.bind(styles);

const Sidebar = () => {
  const [GetactiveIcon, setActiveIcon] = useState();
  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };
  // handleIconClick(false);
  return (
    <div className={cx("sidebar-wrapper")}>
      <div className={cx("logo")}>
        <Logo />
      </div>
      <div className={cx("nav-item-wrap")}>
        <NavItem
          icon={<IconHome />}
          activeIcon={<IconHomeActive />}
          title="Home"
          // isActive={GetactiveIcon}
          // onClick={() => {
          //   handleIconClick(true);
          // }}
          path={"/"}
        />
        <NavItem
          icon={<IconSearch />}
          activeIcon={<IconSearchActive />}
          title="Tìm kiếm"
          // isActive={GetactiveIcon}
          // onClick={() => {
          //   handleIconClick(true);
          // }}
          path={"/search"}
        />
        <NavItem
          icon={<IconExplore />}
          activeIcon={<IconExploreActive />}
          title="Khám phá"
          isActive={false}
          onClick={() => console.log("Explore Tab")}
          path={"/explore"}
        />
        <NavItem
          icon={<IconReels />}
          activeIcon={<IconReelsActive />}
          title="Reels"
          isActive={false}
          onClick={() => console.log("Reels Tab")}
          path={"/reels"}
        />
        <NavItem
          icon={<IconMess />}
          activeIcon={<IconMessActive />}
          title="Tin nhắn"
          isActive={false}
          onClick={() => console.log("Mess Tab")}
          path={"/message"}
        />
        <NavItem
          icon={<IconNotification />}
          activeIcon={<IconNotificationActive />}
          title="Thông báo"
          isActive={false}
          onClick={() => console.log("Noti Tab")}
          path={"/noti"}
        />
        <NavItem
          icon={<IconNewPost />}
          // activeIcon={<IconNotificationActive />}
          title="Bài viết mới"
          isActive={false}
          onClick={() => console.log("New Post Tab")}
          path={"/newpost"}
        />
        <NavItem
          icon={
            <CircleAvatar
              url={
                "https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/371355184_1040730407302896_2169877240743341590_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGg_ivcFXdEsWcg6hC6Q7_dsSlr3VuZcLaxKWvdW5lwttC-jcRauh9VPtvRN_NebfOn_ROL2l9vrAIJM3AgPXu2&_nc_ohc=c4qm36-1vvUAX-hXhj-&_nc_ht=scontent.fhan5-10.fna&oh=00_AfD0Q6e1IgQ4pq7Lumg-PLx1i1MR6qc1t_alUF9GRE6-Eg&oe=65417D57"
              }
              size={24}
            />
          }
          // activeIcon={<IconNotificationActive />}
          title="Trang cá nhân"
          isActive={false}
          onClick={() => console.log("New Post Tab")}
        />
      </div>
      <div className={cx("more-wrap")}>
        <NavItem
          icon={<IconSettingMenu />}
          // activeIcon={<IconNotificationActive />}
          title="Xem Thêm"
          isActive={false}
          onClick={() => console.log("Menu Tab")}
        />
      </div>
    </div>
  );
};

export default Sidebar;
