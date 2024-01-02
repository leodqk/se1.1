import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Gear } from "phosphor-react";
import { Nav_Buttons, Profile_Menu } from "../../data";
import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch";
import { faker } from "@faker-js/faker";
import { useNavigate } from "react-router-dom";
import { LogoutUser } from "../../redux/slices/auth";
import { useDispatch } from "react-redux";

const getPath = (index) => {
  switch (index) {
    case 0:
      return "/app";

    case 1:
      return "/group";

    case 2:
      return "/call";

    case 3:
      return "/settings";

    default:
      break;
  }
};

const getMenuPath = (index) => {
  switch (index) {
    case 0:
      return "/profile";

    case 1:
      return "/settings";

    case 2:
      return "/auth/login";

    default:
      break;
  }
};

const SideBar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      p={"20px"}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        height: "100vh",
        width: "129px",
      }}
    >
      <Stack
        sx={{
          direction: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
          gap: "48px",
        }}
      >
        <Stack
          sx={{
            direction: "column",
            alignItems: "center",
            width: "100%",
            gap: "48px",
          }}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: "12px",
            }}
          ></Box>

          <Stack
            sx={{ direction: "column", gap: "20px", width: "max-content" }}
          >
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <Box
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: "12px",
                  }}
                >
                  <IconButton
                    sx={{ color: "#fff", width: "max-content" }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <Box
                  onClick={() => {
                    setSelected(el.index);
                  }}
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: "12px",
                  }}
                >
                  <IconButton
                    onClick={() => {
                      setSelected(el.index);
                      navigate(getPath(el.index));
                    }}
                    sx={{
                      color:
                        theme.palette.mode === "light"
                          ? "#000"
                          : theme.palette.text.primary,
                      width: "max-content",
                    }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              )
            )}
            <Divider sx={{ width: "48px" }} />
            {selected === 3 ? (
              <Box
                p={1}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: "12px",
                }}
              >
                <IconButton
                  sx={{
                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                >
                  <Gear></Gear>
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  navigate(getPath(3));
                  setSelected(3);
                }}
              >
                <Gear></Gear>
              </IconButton>
            )}
          </Stack>
        </Stack>

        <Stack sx={{ alignItems: "center", gap: "20px" }}>
          <AntSwitch
            onChange={() => {
              onToggleMode();
            }}
            defaultChecked
          />
          <Avatar
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            src={faker.image.avatar()}
          ></Avatar>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Stack spacing={1} px={1}>
              {Profile_Menu.map((el, idx) => (
                <MenuItem
                  onClick={() => {
                    handleClick(idx);
                  }}
                >
                  <Stack
                    onClick={() => {
                      if (idx === 2) {
                        dispatch(LogoutUser);
                      } else {
                        navigate(getMenuPath(idx));
                      }
                    }}
                    sx={{ width: 100 }}
                    direction="row"
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <span>{el.title}</span>
                    {el.icon}
                  </Stack>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
