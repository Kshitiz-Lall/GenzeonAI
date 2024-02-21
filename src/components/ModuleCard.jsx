import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const ModuleCard = ({ title, description, image, badgeTitles, colors }) => {
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
            <div className="bg-[#E8F5E9] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
              <img src={image} alt="" className="w-14 -ml-5" />
            </div>
            <h4 className="text-2xl font-bold text-neutralGrey mb-2 px-2">{title}</h4>
            <p className="text-sm text-neutralGray">{description}</p>
          </motion.div>
        ) : (
          <motion.div className="back" key="back"
            initial={{ opacity: 0, rotateY: 180 }}
            animate={{ opacity: 1, rotateY: 0 }}
          >
            {/* ModuleCardBack component can be used here */}
            <h4>Content</h4>
            {/* Render badges with different colors based on the badgeTitles and colors props */}
            {badgeTitles.map((badgeTitle, index) => (
              <span key={index} className={`inline-block px-3 py-1 rounded-full text-base font-semibold m-2 ${colors[index]}`}>
                {badgeTitle}
                {index !== badgeTitles.length - 1 && <br />} {/* Add <br /> if it's not the last badge */}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModuleCard;
