import { Box, useTheme } from "@mui/system";
import "./Home.css";
import React, { useEffect, useState } from "react";
import { Paper, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const Home = () => {
  const theme=useTheme()
  let total = 0;
  const [mydata, setmydata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/mydata")
      .then((response) => response.json())
      .then((data) => setmydata(data));
  });
  return (
    <Box>
      {mydata.map((item) => {
        total += item.price;
        return (
          <Paper
            key={item.id}
            sx={{
              position: "relative",
              width: "366px",
              display: "flex",
              justifyContent: "space-between",
              mt: "22px",
              pt: "27px",
              pb: "7px",
            }}
          >
            <Typography sx={{ ml: "16px", fontSize: "1.3em" }} variant="h6">
              {item.title}
            </Typography>
            <Typography
              sx={{
                mr: "33px",
                fontWeight: 500,
                fontSize: "1.4em",
                opacity: "0.8",
              }}
              variant="h6"
            >
              ${item.price}
            </Typography>

            <IconButton
              onClick={() => {
                fetch(`http://localhost:3001/mydata/${item.id}`, {
                  method: "DELETE",
                });
                const newarr=mydata.filter((ittem) => {
                  return ittem.id !== item.id 
                }
                )
                setmydata(newarr)
              }}
              sx={{ position: "absolute", top: "0", right: "0" }}
            >
              <Close sx={{ fontSize: "20px" }} />
            </IconButton>
          </Paper>
        );
      })}

      <Typography
        sx={{ color:theme.palette.primary, margin: "auto", textAlign: "center", mt: "40px" }}
        variant="h6"
        color="initial"
      >
        👉you spend ${total}
      </Typography>
    </Box>
  );
};

export default Home;
