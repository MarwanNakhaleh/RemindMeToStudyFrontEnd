import React, { useEffect } from "react";
import { useState } from "react";

const Success = ({ infoState }) => {
  const [infoSaveResult, setInfoSaveResult] = useState(null);

  useEffect(() => {
    const requestBody = JSON.stringify({
      "first_name": infoState.firstName,
      "last_name": infoState.lastName,
      "phone_number": infoState.phoneNumber.trim()
    });
    fetch("https://82wjseel6d.execute-api.us-east-1.amazonaws.com/live/studyreminder", {
      method: "POST",
      body: requestBody
    })
    .then(result => {
      if(!result.ok){
        console.error(JSON.stringify(result.json()));
      } else {
        setInfoSaveResult(result.text());
      }
    })
    .catch(error => {
      console.error(error);
    })
  }, []);

  return (
    <div>
      {infoSaveResult && <h1>You're signed up!</h1>}
    </div>
  );
};

export default Success;
