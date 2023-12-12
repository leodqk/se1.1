import React from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";
import StyledBadge from "../StyledBadge";
import { useTheme } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import { ToggleSideBar } from "../../redux/slices/app";
import { useDispatch } from "react-redux";

const Header = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box
      p={2}
      sx={{
        height: 72,
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.default,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack
        alignItems={"center"}
        direction="row"
        justifyContent={"space-between"}
        sx={{ width: "100%", height: "100%" }}
      >
        <Stack
          onClick={() => {
            dispatch(ToggleSideBar());
          }}
          direction={"row"}
          spacing={2}
          marginTop={"10px"}
          paddingBottom={"4px"}
        >
          <Box>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar
                sx={{ width: "30px", height: "30px", objectFit: "cover" }}
                alt={faker.name.fullName}
                src={faker.image.avatar()}
              />
            </StyledBadge>
            <Stack spacing={0}>
              <Typography variant="subtitle2">
                {faker.name.fullName()}
              </Typography>
              <Typography variant="caption">Online</Typography>
            </Stack>
          </Box>
        </Stack>

        <Stack direction="row" alignItems={"center"} spacing={3}>
          <IconButton>
            <VideoCamera />
          </IconButton>

          <IconButton>
            <Phone />
          </IconButton>

          <IconButton>
            <MagnifyingGlass />
          </IconButton>

          <Divider orientation="vertical" flexItem />

          <IconButton>
            <CaretDown />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
