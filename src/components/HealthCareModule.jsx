import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import icon from "../assets/cloud-armor-svgrepo-com.svg";

const HealthCareModule = ({ title, description, image, badgeTitles, colors }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence>
        <motion.div className="front" key="front"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bg-lightBlue h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl ">
            <img src={icon} alt="" className="w-20" />
          </div>
          <h4 className="text-xl font-bold text-black mb-2 px-2">{title}</h4>
          <p className="text-md text-fadeGrey">{description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HealthCareModule;
