import React from "react";
import { Button } from "@mui/material";
import { Auth } from 'aws-amplify';
import createAwsClient from 'agnostic-aws-signature';

const Confirmation = ({ nextStep, previousStep, infoState }) => {
  const renderDailyInformation = () => {
    const studyTimes = [];
    for (const [day, value] of Object.entries(infoState["daysOfWeek"])) {
      if (value) {
        const timeRange = infoState["timeRangeForEachDay"][day];
        const timeRangeString = timeRange.join(" - ");
        studyTimes.push(
          <p>
            <b>{day}</b>
            <br />
            {timeRangeString}
          </p>
        );
      }
    }
    return studyTimes;
  };
  return (
    <div>
      <h1>Is all of this information correct?</h1>
      <h3>Contact information</h3>
      <p>
        First name: {infoState.firstName}
        <br />
        Last name: {infoState.lastName}
        <br />
        Phone number: {infoState.phoneNumber}
      </p>
      <h3>Days available to study</h3>
      {renderDailyInformation()}
      <Button onClick={nextStep}>Yes!</Button>
      <Button onClick={previousStep}>Go back</Button>
    </div>
  );
};

export default Confirmation;
