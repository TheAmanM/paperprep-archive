import React from "react";
import "./FlowBreak.css";

const FlowBreak = () => {
  return (
    <div className="section-dark flow-break">
      <h3 className="flow-break__break-intro">By the way...</h3>
      <div className="flow-break__main-text">
        <h1>
          Paper Prep is{" "}
          <span className="no-wrap">
            <span className="blue-text">completely free</span>!
          </span>
        </h1>
      </div>
    </div>
  );
};

export default FlowBreak;
