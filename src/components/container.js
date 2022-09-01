import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import CardComponent from "./card";
import "../App.css";
import Steppers from "./stepper";
import InputBox from "./inputbox";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";

export default function Container() {
  const [title, setTitle] = useState("Welcome! First things first...");
  const [subtitle, setSubtitle] = useState("You can always change them later.");
  const [buttonText, setButtonText] = useState("Create workspace");
  const [activeStep, setActiveStep] = useState(0);
  const [planSelected, setPlanSelected] = useState(false);
  const [selectedPlanType, setSelectedPlanType] = useState("");
  const [contactDetails, setContactDetails] = useState({
    fullName: "",
    displayName: "",
  });
  const [workSpaceDetails, setWorkSpaceDetails] = useState({
    name: "",
    url: "",
  });
  useEffect(() => {
    if (activeStep === 1) {
      setTitle("Let's set up a home for all your work");
      setSubtitle("You can always create another workspace later.");
    } else if (activeStep === 2) {
      setTitle("How are you planning to use Eden?");
      setSubtitle("We'll streamline your setup experience accordingly.");
    } else if (activeStep === 3) {
      setTitle("Congratulations, Eden!");
      setSubtitle("You have completed onboarding, you can start using Eden!");
      setButtonText("Launch Eden!.");
    }
  }, [activeStep]);
  const onDetailsChange = (e) => {
    const { name, value } = e.target;
    setContactDetails((pre) => ({ ...pre, [name]: value }));
  };
  const onWorkSpaceDetailsChange = (e) => {
    const { name, value } = e.target;
    setWorkSpaceDetails((pre) => ({ ...pre, [name]: value }));
  };
  const SelectAccountTypePersonal = (e) => {
    e && setPlanSelected(true);
    setSelectedPlanType("personal");
  };
  const SelectAccountTypeTeam = (e) => {
    e && setPlanSelected(true);
    setSelectedPlanType("team");
  };
  const contentInput = () => {
    if (activeStep === 0) {
      return (
        <Grid container spacing={2}>
          {[
            { name: "Full name", value: "fullName", placeHolderValue:"Steve john" },
            { name: "Display Name", value: "displayName", placeHolderValue:"Steve" },
          ].map((el) => (
            <InputBox
              details={contactDetails}
              input={el}
              onChange={onDetailsChange}
            />
          ))}
        </Grid>
      );
    } else if (activeStep === 1) {
      return (
        <Grid container spacing={2}>
          {[
            { name: "Workspace Name", value: "name", placeHolderValue:"Eden" },
            { name: "Workspace URL(optional)", value: "url", placeHolderValue:"Example"  },
          ].map((el) => (
            <InputBox
              details={workSpaceDetails}
              input={el}
              onChange={onWorkSpaceDetailsChange}
            />
          ))}
        </Grid>
      );
    } else if (activeStep === 2) {
      return (
        <div className="work">
          <Card
            className="workitem"
            onClick={(e) => SelectAccountTypePersonal(e)}
            sx={{
              border: selectedPlanType === "personal" && "2px solid #5851D3",
            }}
          >
            <CardActionArea>
              <CardContent>
                <Typography variant="h4" component="div" align="left">
                  <Box sx={{ fontWeight: "bold" }}>
                    <PersonIcon />
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  color="gray"
                  align="left"
                >
                  <Box sx={{ fontWeight: "bold", mt: 1, mb: 1 }}>My self</Box>
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  color="slategray"
                  align="left"
                >
                  <Box sx={{ fontWeight: "bold" }}>
                    Write better. Think more clearly.Stay organized
                  </Box>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            className="workitem"
            onClick={(e) => SelectAccountTypeTeam(e)}
            sx={{
              border: selectedPlanType === "team" && "1.5px solid #5851D3",
            }}
          >
            <CardActionArea>
              <CardContent>
                <Typography variant="h4" component="div" align="left">
                  <Box sx={{ fontWeight: "bold" }}>
                    <GroupIcon />
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  color="gray"
                  align="left"
                >
                  <Box sx={{ fontWeight: "bold", mt: 1, mb: 1 }}>
                    With my team
                  </Box>
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  color="slategray"
                  align="left"
                >
                  <Box sx={{ fontWeight: "bold" }}>
                    Wikis, docs, tasks & projects, all in one place.
                  </Box>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      );
    }
  };
  return (
    <>
      <div className="center mb">
        <Typography variant="h5" component="span">
          <Box sx={{ fontWeight: "bold" }}>Eden</Box>
        </Typography>
      </div>
      <Steppers activeStep={activeStep} />
      <CardComponent
        title={title}
        subtitle={subtitle}
        content={contentInput()}
        buttonText={buttonText}
        contactDetails={contactDetails}
        setActiveStep={setActiveStep}
        workSpaceDetails={workSpaceDetails}
        setWorkSpaceDetails={setWorkSpaceDetails}
        activeStep={activeStep}
        planSelected={planSelected}
      />
    </>
  );
}
