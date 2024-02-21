import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { Carousel } from "flowbite-react";
import image from "../assets/image.png";
import laptop from "../assets/firmware.svg";

export const Home = () => {
  return (
    <>
      <div className="bg-fadeSilver" id="home">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div // Wrap the text content with motion.div
              initial={{ opacity: 0 }} // Set initial opacity to 0
              animate={{ opacity: 1 }} // Animate opacity to 1
              transition={{ duration: 1 }} // Set transition duration to 1 second
              className="text-center"
            >
              <h1 className="text-5xl font-bold text-primaryBlue mb-4">
                Welcome to Our Website
              </h1>
              <p className="text-lg text-neutralGrey mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vehicula sagittis est, id convallis mauris vehicula ac.
              </p>
              <p className="text-lg text-primaryBlue mb-8">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <button className="btn-primary">Get Started</button>
            </motion.div>
            <motion.img
              src={laptop}
              alt="Laptop"
              className="mx-auto md:mx-0 md:w-3/4"
              animate={{
                y: [0, -5, 0],
                transition: { duration: 2, repeat: Infinity },
              }} // Bounce animation with duration of 2 seconds
            />
          </div>
        </div>
      </div>
    </>
  );
};
