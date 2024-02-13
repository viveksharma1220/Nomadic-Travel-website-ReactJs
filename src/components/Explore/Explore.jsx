import React, { useState } from "react";
import Back from "../common/Back";
import Mumbai from "./cities/mumbai";
import Delhi from "./cities/delhi";
import Shimla from "./cities/shimla";
import Goa from "./cities/goa";
import Kashmir from "./cities/kashmir";
import img from "../images/about.jpg";

const Explore = () => {
  const [text, setText] = useState("Delhi");
  return (
    <>
      <Back
        name="Heyy!!"
        title="Explore By Destinations"
        cover={img}
        text={text}
        setText={setText}
      />
      {text === "Mumbai" && <Mumbai />}
      {text === "Delhi" && <Delhi />}
      {text === "Shimla" && <Shimla />}
      {text === "Goa" && <Goa />}
      {text === "Kashmir" && <Kashmir />}
    </>
  );
};

export default Explore;
