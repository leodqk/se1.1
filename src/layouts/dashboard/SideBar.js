import React, { useState } from "react";

import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Gear } from "phosphor-react";

import { Nav_Buttons } from "../../data";
import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch";
import { faker } from "@faker-js/faker";

const SideBar = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();

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
            {selected == 3 ? (
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
          <Avatar src={faker.image.avatar()}></Avatar>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
