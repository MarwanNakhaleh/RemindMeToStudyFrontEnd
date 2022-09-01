import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Success from "./Success";
import TimesOfEachDay from "./TimesOfEachDay";
import Confirmation from "./Confirmation";
import DaysOfWeek from "./DaysOfWeek";

const Register = () => {
  const [infoState, setInfoState] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    timeZone: {
      value: "America/Bogota",
      label: "(GMT-5:00) Bogota, Lima, Quito",
      offset: -5,
      abbrev: "COT",
      altName: "Colombia Standard Time",
    },
    daysOfWeek: {
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
      Sunday: false,
    },
    timeRangeForEachDay: {
      Monday: ["10:00", "11:00"],
      Tuesday: ["10:00", "11:00"],
      Wednesday: ["10:00", "11:00"],
      Thursday: ["10:00", "11:00"],
      Friday: ["10:00", "11:00"],
      Saturday: ["10:00", "11:00"],
      Sunday: ["10:00", "11:00"],
    },
  });

  const previousStep = () => {
    setInfoState((infoState) => ({
      ...infoState,
      step: (infoState.step -= 1),
    }));
  };

  const nextStep = () => {
    setInfoState((infoState) => ({
      ...infoState,
      step: (infoState.step += 1),
    }));
  };

  const handleChange = (input) => {
    console.log(input);
    switch (infoState.step) {
      case 2:
        setInfoState((infoState) => ({
          ...infoState,
          daysOfWeek: input,
        }));
        break;
      case 3:
        setInfoState((infoState) => ({
          ...infoState,
          timeRangeForEachDay: input["timeRangeForEachDay"],
          timeZone: input["timeZone"],
        }));
        break;
      case 4:
        setInfoState((infoState) => ({
          ...infoState,
          firstName: input["firstName"],
          lastName: input["lastName"],
          phoneNumber: input["phoneNumber"]
        }));
        break;
      default:
        console.log("error in handling change ahead of step " + infoState.step);
        break;
    }
    console.log("we're handling change ahead of step " + infoState.step);
  };

  const determinePage = () => {
    switch (infoState.step) {
      case 1:
        return (
          <DaysOfWeek
            nextStep={nextStep}
            handleChange={handleChange}
            infoState={infoState}
          />
        );
      case 2:
        return (
          <TimesOfEachDay
            nextStep={nextStep}
            previousStep={previousStep}
            handleChange={handleChange}
            infoState={infoState}
          />
        );
      case 3:
        return (
          <PersonalDetails
            nextStep={nextStep}
            previousStep={previousStep}
            handleChange={handleChange}
            infoState={infoState}
          />
        );
      case 4:
        return (
          <Confirmation
            nextStep={nextStep}
            previousStep={previousStep}
            infoState={infoState}
          />
        );
      case 5:
        return <Success />;
      default:
        return <></>;
    }
  };

  return <div>{determinePage()}</div>;
};

export default Register;
