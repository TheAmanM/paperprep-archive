import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const App = ({ Component, pageProps, router }) => {
  return (
    // <div className={`progress-indicator ${beginLoading && "begin-loading"}`} />
    <>
      <motion.div
        key={router.route}
        className={`progress-indicator`}
        initial="initial"
        animate="animate"
        variants={{ initial: { width: 0 }, animate: { width: "100vw" } }}
        style={{ height: "6px", backgroundColor: "var(--primary-color)" }}
      ></motion.div>
      <Component {...pageProps} />
    </>
  );
};

export default App;
