import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const LoadWrapper = (child = null, { inverted = false }) => {
  return (
    // <div className={`progress-indicator ${beginLoading && "begin-loading"}`} />
    (<motion.div
      //   key={router.route}
      className={`progress-indicator`}
      initial="initial"
      animate="animate"
      variants={{ initial: { width: 0 }, animate: { width: "100vw" } }}
    ></motion.div>)({
      child,
    })
  );
};

export default LoadWrapper;
