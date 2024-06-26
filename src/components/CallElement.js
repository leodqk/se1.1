import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { faker } from "@faker-js/faker";
import StyledBadge from "./StyledBadge";
import {
  ArrowDownLeft,
  ArrowUpRight,
  VideoCamera,
  Phone,
} from "phosphor-react";
import { useDispatch } from "react-redux";

const CallLogElement = ({ img, name, incoming, missed, online, id }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: "100%",

          borderRadius: 1,

          backgroundColor: theme.palette.background.paper,
        }}
        p={2}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={2}>
            {" "}
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt={name} src={img} />
              </StyledBadge>
            ) : (
              <Avatar alt={name} src={img} />
            )}
            <Stack spacing={0.3}>
              <Typography variant="subtitle2">{name}</Typography>
              <Stack spacing={1} alignItems="center" direction={"row"}>
                {incoming ? (
                  <ArrowDownLeft color={missed ? "red" : "green"} />
                ) : (
                  <ArrowUpRight color={missed ? "red" : "green"} />
                )}
                <Typography variant="caption">Yesterday 21:24</Typography>
              </Stack>
            </Stack>
          </Stack>
          <IconButton sx={{ fontSize: "18px" }}>
            <Phone color="green" />
          </IconButton>
          {/* <Phone />

            <VideoCamera /> */}
        </Stack>
      </Box>
    </>
  );
};

const CallElement = ({ img, name, id, handleClose }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",

        borderRadius: 1,

        backgroundColor: theme.palette.background.paper,
      }}
      p={2}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={2}>
          {" "}
          <Avatar alt={name} src={img} />
          <Stack spacing={0.3} alignItems="center" direction={"row"}>
            <Typography variant="subtitle2">{name}</Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <IconButton
          // onClick={() => {
          //   dispatch(StartAudioCall(id));
          //   handleClose();
          // }}
          >
            <Phone style={{ color: theme.palette.primary.main }} />
          </IconButton>

          <IconButton
          // onClick={() => {
          //   dispatch(StartVideoCall(id));
          //   handleClose();
          // }}
          >
            <VideoCamera style={{ color: theme.palette.primary.main }} />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};
export { CallElement, CallLogElement };
