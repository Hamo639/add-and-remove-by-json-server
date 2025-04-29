import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Appbar from "./Materialui/Appbar";
import Drawerr from "./Materialui/Drawer";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const drawerWidth = 240;

const Root = () => {
  const [showdrawer, setshowdrawer] = useState("none");
  const [drawertype, setdrawertype] = useState("permanent");
  const [mode, setmymode] = useState(
    localStorage.getItem("currentmode") === null
      ? "light"
      : localStorage.getItem("currentmode") === "light"
      ? "light"
      : "dark"
  );
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode: mode,
      // @ts-ignore
      hamo: {
        main: "#64748B",
        contrastText: "#fff",
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Appbar
        {...{drawerWidth,setshowdrawer,setdrawertype}}
        
        />

        <Drawerr
        {...{drawerWidth,setmymode,mode,showdrawer,drawertype,setshowdrawer,setdrawertype}}
        
        />

        <Box
          component="main"
          sx={{
            ml: { md: `${drawerWidth}px` },
            display: " flex",
            justifyContent: "center",
            mt: "66px",
          }}
          // className="border"
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;
