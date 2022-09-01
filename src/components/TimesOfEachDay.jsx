import React, { useState } from "react";
import TimezoneSelect from "react-timezone-select";
import { FormControl, Button } from "@mui/material";
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';


const TimesOfEachDay = ({
  nextStep,
  previousStep,
  handleChange,
  infoState,
}) => {
  const [selectedTimezone, setSelectedTimezone] = useState(infoState["timeZone"]);
  const [mondayTimeRange, setMondayTimeRange] = useState(infoState["timeRangeForEachDay"]["Monday"]);
  const [tuesdayTimeRange, setTuesdayTimeRange] = useState(infoState["timeRangeForEachDay"]["Tuesday"]);
  const [wednesdayTimeRange, setWednesdayTimeRange] = useState(infoState["timeRangeForEachDay"]["Wednesday"]);
  const [thursdayTimeRange, setThursdayTimeRange] = useState(infoState["timeRangeForEachDay"]["Thursday"]);
  const [fridayTimeRange, setFridayTimeRange] = useState(infoState["timeRangeForEachDay"]["Friday"]);
  const [saturdayTimeRange, setSaturdayTimeRange] = useState(infoState["timeRangeForEachDay"]["Saturday"]);
  const [sundayTimeRange, setSundayTimeRange] = useState(infoState["timeRangeForEachDay"]["Sunday"]);

  const Continue = (e) => {
    e.preventDefault();
    const timeRangeForEachDay = {
      Monday: mondayTimeRange,
      Tuesday: tuesdayTimeRange,
      Wednesday: wednesdayTimeRange,
      Thursday: thursdayTimeRange,
      Friday: fridayTimeRange,
      Saturday: saturdayTimeRange,
      Sunday: sundayTimeRange,
    };
    console.log(JSON.stringify(selectedTimezone));
    const finalInput = {
      timeRangeForEachDay,
      timeZone: selectedTimezone
    }
    nextStep();
    handleChange(finalInput);
  };

   const renderTimeSelectForEachDay = () => {
    const daysOfWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const items = [];
    daysOfWeek.forEach((day, index) => {
      let onChangeFunction;
      let value;
      switch (day) {
        case "Monday":
          onChangeFunction = setMondayTimeRange;
          value = mondayTimeRange;
          break;
        case "Tuesday":
          onChangeFunction = setTuesdayTimeRange;
          value = tuesdayTimeRange;
          break;
        case "Wednesday":
          onChangeFunction = setWednesdayTimeRange;
          value = wednesdayTimeRange;
          break;
        case "Thursday":
          onChangeFunction = setThursdayTimeRange;
          value = thursdayTimeRange;
          break;
        case "Friday":
          onChangeFunction = setFridayTimeRange;
          value = fridayTimeRange;
          break;
        case "Saturday":
          onChangeFunction = setSaturdayTimeRange;
          value = saturdayTimeRange;
          break;
        case "Sunday":
          onChangeFunction = setSundayTimeRange;
          value = sundayTimeRange;
          break;
        default:
          break;
      }
      if (infoState.daysOfWeek[day]) {
        items.push(
          <div key={index}>
            <h2>{day}</h2>
            <TimeRangePicker onChange={onChangeFunction} value={value} />
          </div>
        );
      }
    });
    return items;
  };

  return (
    <div>
      <h1>What time range is best for you?</h1>
      <FormControl>
        <TimezoneSelect
          value={selectedTimezone}
          onChange={setSelectedTimezone}
          placeholder="Select your time zone"
        />
        {renderTimeSelectForEachDay()}
        <Button onClick={Continue}>Next</Button>
        <Button onClick={previousStep}>Go back</Button>
      </FormControl>
    </div>
  );
};

export default TimesOfEachDay;
