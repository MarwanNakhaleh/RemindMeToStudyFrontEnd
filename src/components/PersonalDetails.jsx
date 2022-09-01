import { Button, FormControl, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

const PersonalDetails = ({
  nextStep,
  previousStep,
  handleChange,
  infoState,
}) => {
  const [firstName, setFirstName] = useState(infoState["firstName"]);
  const [lastName, setLastName] = useState(infoState["lastName"]);
  const [phoneNumber, setPhoneNumber] = useState(infoState["phoneNumber"]);
  const Continue = (e) => {
    e.preventDefault();
    const finalInput = {
      firstName,
      lastName,
      phoneNumber
    };
    nextStep();
    handleChange(finalInput);
  };

  return (
    <div>
      <h1>
        Now we just need to be able to contact you with those study reminders.
      </h1>
      <FormControl>
        <TextField label="First name" variant="outlined" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
        <TextField label="Last name" variant="outlined" onChange={(e) => setLastName(e.target.value)} value={lastName} />
        <TextField label="Phone number" variant="outlined" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
        <Button onClick={Continue}>Next</Button>
        <Button onClick={previousStep}>Go back</Button>
      </FormControl>
    </div>
  );
};

export default PersonalDetails;
