import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import icon from "../assets/cloud-build-svgrepo-com.svg";

const BiomedicalModuleCard = ({ title, description, image, badgeTitles, colors }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence>
        {!isFlipped ? (
          <motion.div className="front" key="front"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="bg-lightBlue h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl ">
              <img src={icon} alt="" className="w-14" />
            </div>
            <h4 className="text-xl font-bold text-black mb-2 px-2">{title}</h4>
            <p className="text-md text-fadeGrey">{description}</p>
          </motion.div>
        ) : (
          <motion.div className="back" key="back"
            initial={{ opacity: 0, rotateY: 180 }}
            animate={{ opacity: 1, rotateY: 0 }}
          >
            {/* ModuleCardBack component can be used here */}
            <h4 className="text-xl font-bold text-gray-500">Entities</h4>
            <div className="border-t border-gray-300 my-4"></div>

            {/* Wrap the badges in a scrollable container */}
            <div className="overflow-y-auto max-h-40"> {/* Adjust max-h as needed */}
              {/* Render badges with different colors based on the badgeTitles and colors props */}
              {badgeTitles.map((badgeTitle, index) => (
                <span key={index} className={`inline-block px-3 py-1 rounded-full text-xs font-semibold m-2 ${colors[index]}`}>
                  {badgeTitle}
                  {index !== badgeTitles.length - 1 && <br />} {/* Add <br /> if it's not the last badge */}
                </span>
              ))}
            </div>
          </motion.div>

        )}
      </AnimatePresence>
    </div>
  );
};

export default BiomedicalModuleCard;
