import { Button, Typography, Box } from "@mui/material";
import React from "react";
import "../App.css";

const Card = ({
  title,
  subtitle,
  content,
  buttonText,
  contactDetails,
  setActiveStep,
  workSpaceDetails,
  activeStep,
  planSelected,
}) => {
  const ChangeActiveStep = () => {
    if (activeStep === 0) {
      contactDetails.fullName &&
        contactDetails.displayName !== "" &&
        setActiveStep(1);
    } else if (activeStep === 1) {
      workSpaceDetails.name !== "" && setActiveStep(2);
    } else if (activeStep === 2) {
      planSelected !== false && setActiveStep(3);
    }
  };
  return (
    <div className="subdiv">
      <div className="center">
        <Typography variant="h5" component="div">
          <Box sx={{ fontWeight: "bold" }}>{title}</Box>
        </Typography>
      </div>
      <div className="mt center section">
        <Typography variant="body2" color="lightslategrey">
          <Box sx={{ fontWeight: "medium" }}>{subtitle}</Box>
        </Typography>
      </div>
      <div className="details center section">
        <div className="mt2">{content}</div>
        <div className="mt">
          <Button
            className="buttonstyles"
            sx={{ backgroundColor: "#5851D3" }}
            fullWidth
            variant="contained"
            onClick={ChangeActiveStep}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
