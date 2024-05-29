import React from "react";
import notes from "../assets/logo.jpg";
import Button from "./Button";

const NoProjectSelected = ({onStartAddProject}) => {
  return (
    <div className="mt-10 text-center w-2/3 no-projects">
      <img src={notes} alt="Empty Notes" className="w-80 h-80 object-contain mx-auto " />
      <h2 className="text-xl font-bold text-stone-500 my-4">No project Selected</h2>
      <p className="text-stone-400 mb-4 ">Select a project or get started with a new one</p>
      <p className="mt-8 ">
        <Button onClick={onStartAddProject} >Create new project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
