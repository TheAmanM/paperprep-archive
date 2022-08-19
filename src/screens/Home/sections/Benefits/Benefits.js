import React from "react";
import BenefitSection from "../../components/BenefitSection/BenefitSection";

import img1 from "../BenefitClean/assets/light.png";
import img2 from "../BenefitCommunity/assets/imgLight.png";
import img3 from "../BenefitReporting/assets/imgLight.png";

import darkBoxes from "./../../../../assets/darkBoxes.svg";
import lightBoxes from "./../../../../assets/lightBoxes.svg";

const Benefits = () => {
  return (
    <>
      <BenefitSection
        title={
          <h2>
            A <span className="blue-text">clean</span> interface.
          </h2>
        }
        description={
          "An interface built from the ground up, with your convenience kept in mind. Everything has been built deliberately and intentionally."
        }
        variant={"section-dark"}
        mainImg={img1}
        boxesImg={darkBoxes}
        textOrderFlipped={false}
      />
      <BenefitSection
        title={
          <h2>
            Available <span className="blue-text">Community </span> Support.
          </h2>
        }
        description={
          "Students build on top of each other’s efforts. Everyone is in the same boat, with the same end goal."
        }
        variant={"section-accent"}
        mainImg={img2}
        boxesImg={lightBoxes}
        textOrderFlipped={true}
      />
      <BenefitSection
        title={
          <h2>
            Active <span className="blue-text">Reporting</span>.
          </h2>
        }
        description={
          "Statistics and data to help you accurately determine what you are great at, and what you need to focus on. Studying should be actively efficient."
        }
        variant={"section-light"}
        mainImg={img3}
        boxesImg={lightBoxes}
        textOrderFlipped={false}
      />
    </>
  );
};

export default Benefits;
