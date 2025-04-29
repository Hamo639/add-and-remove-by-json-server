import {
  Divider,
  Drawer,
  List,

  useTheme,
  IconButton,
  Box,
} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";


import {
  Brightness4,
  Brightness7,
  Create,
  Home,
  Logout,
  Person2,
  Settings,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

const Drawerr = ({ drawerWidth, setmymode,mode,showdrawer,drawertype,setshowdrawer,setdrawertype }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const location=useLocation();
  const myList = [
    { text: "Home", icon: <Home />, path: "/" },
    { text: "Create", icon: <Create />, path: "/create" },
    { text: "Profile", icon: <Person2 />, path: "/profile" },
    { text: "Settings", icon: <Settings />, path: "/settings" },
  ];
  return (
    <Box component="nav">
    <Drawer
      sx={{
        display:{xs:showdrawer,md:"block"},
        width: `${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}px`,
          boxSizing: "border-box",
        },
      }}
      variant={drawertype}
      anchor="left"
      open={true}
      onClose={() => {
        setshowdrawer("none")
        setdrawertype("permanent")
      }
      }
      
    >
    



      <List>

      <ListItem sx={{ display: "flex" , justifyContent: "center", mb: "14px"}} disablePadding>

      <IconButton
     
        onClick={() => {
          localStorage.setItem("currentmode",mode)
          setmymode(theme.palette.mode === "light" ? "dark" : "light");
        }}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? <Brightness7 sx={{color: "orange"}} /> : <Brightness4 />}
      </IconButton>
      </ListItem>



      <Divider />


        {myList.map((item) => {
          return(
            <ListItem key={item.path} sx={{background:location.pathname===item.path?"gray":null}} disablePadding>

            <ListItemButton
            onClick={() => {
              navigate(item.path);
            }}
          >
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
          </ListItem>

          )
        }
        )}


        
      </List>
    </Drawer>
    </Box>
  );
};

export default Drawerr;