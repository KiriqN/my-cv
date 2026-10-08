import React from "react";
import data from "../../data/cv.json";
import availableImage from "../../assets/status-available.svg";
import hiredImage from "../../assets/status-hired.svg";

function workbar() {
  return (
    <div>
      <span className=" flex border border-[#30363D] rounded-2xl py-1 px-2">
        {workStatus()}
        {data.meta.availableLabel}
      </span>
    </div>
  );
}

function workStatus() {
  if (data.meta.available === true) {
    return (
      <span className="flex justify-between pr-1">
        <img src={availableImage}></img>
      </span>
    );
  } else {
    return (
      <span className="flex justify-between pr-1">
        <img src={hiredImage}></img>
      </span>
    );
  }
}

export default workbar;
