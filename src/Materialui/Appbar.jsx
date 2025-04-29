import { Menu } from "@mui/icons-material";
import { Toolbar, AppBar, Avatar, Typography, IconButton, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Appbar = ({ drawerWidth, setshowdrawer, setdrawertype }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  
  return (
    <AppBar
      position="static"
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)`, xs: "100%" },
        ml: { md: `${drawerWidth}px`, xs: null },
        backgroundImage: "linear-gradient(to right, #FF5722, #FF7043, #FF9800)", // 🔥🔥🔥 Gradient ناري حقيقي
        backgroundColor: "transparent",
        color: "#FFFFFF",
      }}
    >
      <Toolbar>
        <IconButton
          onClick={() => {
            setshowdrawer("block");
            setdrawertype("temporary");
          }}
          sx={{
            display: { xs: "block", md: "none" },
            color: "#FFFFFF" // خلي الأيقونة لونها أبيض برضو
          }}
        >
          <Menu />
        </IconButton>

        <Typography
          onClick={() => navigate("/")}
          sx={{
            flexGrow: 1,
            "&:hover": { fontSize: "16.5px" },
            cursor: "pointer",
          }}
          color="inherit"
        >
          My expenses
        </Typography>

        <Typography mr={2} variant="body1" color="inherit">
          Hamoashraf
        </Typography>

        <Avatar alt="Remy Sharp" src="./image/hamo.jpg" />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
