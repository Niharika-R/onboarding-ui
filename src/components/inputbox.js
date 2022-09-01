import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const InputBox = ({ input, details, onChange }) => {
  return (
    <Grid item xs={12} key={input.value}>
      <Grid container spacing={0.5}>
        <Grid item xs={12}>
          <Typography variant="body2" color="gray" align="left">
            <Box sx={{ fontWeight: "bold" }}>{input.name}</Box>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <input
            type="text"
            placeholder={input.placeHolderValue}
            className="inputbox"
            value={details[input.value]}
            onChange={onChange}
            name={input.value}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InputBox;
