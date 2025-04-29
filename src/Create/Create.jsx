import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import "./Create.css";
import React, { useState } from "react";
import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  // @ts-ignore
  backgroundColor: theme.palette.hamo.main,
  "&:hover": {
    // @ts-ignore
    backgroundColor: theme.palette.hamo.main,
    scale: "0.99"
  },
}));

const Create = () => {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
    const navigate=useNavigate()


  // Why <<<component="form">>> ?
  return (
    <Box sx={{ width: "380px" }} component="form">
      <TextField onChange={(eo) => {
        settitle(eo.target.value)
      }
      }
      value={title}
      required
        fullWidth={true}
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
      />

      <TextField
      onChange={(eo) => {
        setprice(Number(eo.target.value))
      }
      }
      required
      value={price}
        fullWidth={true}
        label="Transaction Title"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />

      <ColorButton onClick={() => {
        setprice(0)
        settitle("")
      navigate("/")
        fetch("http://localhost:3001/mydata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({title,price}),
          // ...
        });
        
      }
      
      } sx={{ mt: "22px" }} variant="contained">
        Submit <ChevronRight />
      </ColorButton>
    </Box>
  );
};

export default Create;
