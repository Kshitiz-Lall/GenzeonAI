import React from "react";
import image from "../assets/image.png";
import devproductImage from "../assets/dev-productivity.svg";
import aiImage from "../assets/ai-platform-unified-svgrepo-com.svg";
import armourImage from "../assets/cloud-armor-svgrepo-com.svg";
import buildImage from "../assets/cloud-build-svgrepo-com.svg";
import deployImage from "../assets/cloud-deploy-svgrepo-com.svg";

export const About = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={devproductImage} alt="" className="w-400" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h4 className="text-4xl text-neutralGrey font-semibold mb-4 md:w-4/5">
              About Us
            </h4>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
          </div>
        </div>
      </div>

      {/* Product Stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-fadeSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralGrey font-semibold mb-4 md:w-2/3">
              About Us <br />
              <span className="md:w-3/4 text-primaryBlue mb-8">Trust</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
          </div>
          {/* Stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={aiImage} alt="" className="w-20" />
                <div>
                  <h4 className="text-2xl text-neutralGrey font-semibold">
                    text
                  </h4>
                  <p>Subtitle</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={armourImage} alt="" className="w-20" />
                <div>
                  <h4 className="text-2xl text-neutralGrey font-semibold">
                    text
                  </h4>
                  <p>Subtitle</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={buildImage} alt="" className="w-20" />
                <div>
                  <h4 className="text-2xl text-neutralGrey font-semibold">
                    text
                  </h4>
                  <p>Subtitle</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={deployImage} alt="" className="w-20" />
                <div>
                  <h4 className="text-2xl text-neutralGrey font-semibold">
                    text
                  </h4>
                  <p>Subtitle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
