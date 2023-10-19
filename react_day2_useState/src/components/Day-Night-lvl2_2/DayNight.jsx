import { useState } from "react";
import "./DayNight.scss";

const DayNight = () => {
  const [night, setMode] = useState(false);

  return (
    <div className={night ? "dayNight night" : "dayNight"}>
      <h2>{night ? "Night" : "Day"}</h2>
      <button onClick={() => setMode(!night)}>
        Change to {night ? "Day" : "Night"}
      </button>
    </div>
  );
};

export default DayNight;
