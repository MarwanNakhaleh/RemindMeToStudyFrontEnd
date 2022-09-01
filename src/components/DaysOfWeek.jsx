import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";

const DaysOfWeek = ({ nextStep, handleChange, infoState }) => {
  const [mondayChecked, setMondayChecked] = useState(infoState["daysOfWeek"]["Monday"]);
  const [tuesdayChecked, setTuesdayChecked] = useState(infoState["daysOfWeek"]["Tuesday"]);
  const [wednesdayChecked, setWednesdayChecked] = useState(infoState["daysOfWeek"]["Wednesday"]);
  const [thursdayChecked, setThursdayChecked] = useState(infoState["daysOfWeek"]["Thursday"]);
  const [fridayChecked, setFridayChecked] = useState(infoState["daysOfWeek"]["Friday"]);
  const [saturdayChecked, setSaturdayChecked] = useState(infoState["daysOfWeek"]["Saturday"]);
  const [sundayChecked, setSundayChecked] = useState(infoState["daysOfWeek"]["Sunday"]);

  const Continue = (e) => {
    e.preventDefault();
    const daysOfWeek = {
      Monday: mondayChecked,
      Tuesday: tuesdayChecked,
      Wednesday: wednesdayChecked,
      Thursday: thursdayChecked,
      Friday: fridayChecked,
      Saturday: saturdayChecked,
      Sunday: sundayChecked,
    };
    nextStep();
    handleChange(daysOfWeek);
  };

  const handleChecked = (event) => {
    switch (event.target.value) {
      case "Monday":
        setMondayChecked(event.target.checked);
        break;
      case "Tuesday":
        setTuesdayChecked(event.target.checked);
        break;
      case "Wednesday":
        setWednesdayChecked(event.target.checked);
        break;
      case "Thursday":
        setThursdayChecked(event.target.checked);
        break;
      case "Friday":
        setFridayChecked(event.target.checked);
        break;
      case "Saturday":
        setSaturdayChecked(event.target.checked);
        break;
      case "Sunday":
        setSundayChecked(event.target.checked);
        break;
      default:
        break;
    }
  };

  const daysOfWeek = () => {
    return (
      <div>
        <Typography variant="h5">Monday</Typography>
        <Checkbox
          checked={mondayChecked}
          onChange={handleChecked}
          value="Monday"
        />

        <Typography variant="h5">Tuesday</Typography>
        <Checkbox checked={tuesdayChecked} onChange={handleChecked} value="Tuesday" />

        <Typography variant="h5">Wednesday</Typography>
        <Checkbox
          checked={wednesdayChecked}
          onChange={handleChecked}
          value="Wednesday"
        />

        <Typography variant="h5">Thursday</Typography>
        <Checkbox checked={thursdayChecked} onChange={handleChecked} value="Thursday" />

        <Typography variant="h5">Friday</Typography>
        <Checkbox checked={fridayChecked} onChange={handleChecked} value="Friday" />

        <Typography variant="h5">Saturday</Typography>
        <Checkbox checked={saturdayChecked} onChange={handleChecked} value="Saturday" />

        <Typography variant="h5">Sunday</Typography>
        <Checkbox checked={sundayChecked} onChange={handleChecked} value="Sunday" />
      </div>
    );
  };

  return (
    <div>
      <h1>Which days of the week do you want to study?</h1>
      {daysOfWeek()}
      <Button onClick={Continue}>Next</Button>
    </div>
  );
};

export default DaysOfWeek;
