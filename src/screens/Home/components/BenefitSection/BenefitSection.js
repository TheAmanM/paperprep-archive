import React from "react";
import FeatureTitle from "../FeatureTitle/FeatureTitle";
import "./BenefitSection.css";

/*
 * Title<Component>
 * Description<String>
 * variant<String>
 * boxesImg<Component>
 * mainImg<Component>
 * textOrderFlipped<bool>
 */

const BenefitSection = (props) => {
  return (
    <div
      className={`benefit-section ${props.variant} ${
        props.textOrderFlipped && "flipped-orientation"
      }`}
    >
      <div className="benefit-section__section-primary">
        <FeatureTitle title={props.title} />
        <p className="benefit-section__section-primary__description">
          {props.description}
        </p>
        <img
          src={props.boxesImg}
          alt="Boxes"
          className="benefit-section__section-primary__boxesImage"
        />
      </div>
      <img
        src={props.mainImg}
        alt="Screen View"
        className="benefit-section__main-img"
      />
    </div>
  );
};

export default BenefitSection;
