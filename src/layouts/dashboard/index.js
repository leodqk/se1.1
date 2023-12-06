import { useTheme } from "@mui/material/styles";
import { Box, Divider, IconButton, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";

const DashboardLayout = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        p={"16px"}
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

          <Stack sx={{ direction: "column", gap: "48px" }}>
            {Nav_Buttons.map((el) => (
              <IconButton key={el.index}>{el.icon}</IconButton>
            ))}
            <Divider />
            <IconButton>
              <Gear></Gear>
            </IconButton>
          </Stack>
        </Stack>
      </Box>

      <Outlet />
    </>
  );
};

export default DashboardLayout;
