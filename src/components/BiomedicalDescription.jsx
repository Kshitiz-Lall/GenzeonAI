import React from "react";
import image from "../assets/image.png";
import analysisImage from "../assets/instant-analysis.svg";

export const BiomedicalDescription = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="product">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-3/5 mx-auto">
            <h4 className="text-4xl text-neutralGrey font-semibold mb-4 md:w-4/5">
              About
              <span className="text-primaryBlue mb-8"> Biomedical</span>
            </h4>
            <p className="md:w-3/4 text-md text-neutralGrey text-wrap text-justify mb-8">
              GenRexs is an advanced data extraction tool designed to efficiently retrieve a wide array of values from diverse sources. From medical records to financial documents, GenRexs seamlessly extracts critical information such as language, bill amounts, bill type codes, revenue codes, and more. Its versatility extends to capturing URLs, email addresses, and phone numbers, enabling comprehensive data acquisition from various platforms.
            </p>
          </div>
          <div>
            <img src={analysisImage} alt="" className="w-400" />
          </div>
        </div>
      </div>

      {/* Product Stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-fadeSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center">

          {/* Stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={image} alt="" className="w-20" />
                <img src={image} alt="" className="w-20" />
                <img src={image} alt="" className="w-20" />
                <img src={image} alt="" className="w-20" />
                <img src={image} alt="" className="w-20" />
              </div>
              <div className="flex items-center gap-4">
                <img src={image} alt="" className="w-20" />
                <img src={image} alt="" className="w-20" />
                <img src={image} alt="" className="w-20" />
                <img src={image} alt="" className="w-20" />
                <img src={image} alt="" className="w-20" />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralGrey font-semibold mb-4 ">
              GenRexs <span className="text-primaryBlue mb-8">Efficiency</span>
            </h2>
            <p className="text-wrap text-justify">
              Specifically tailored for the healthcare industry, GenRexs excels at parsing hospital records to extract patient demographics like gender, age, date of birth (DOB), diagnosis details, and even vital signs. It effortlessly handles medical terminologies, including ICD codes, and can discern crucial data such as in/out times, drug dosages, chemical compounds, genes/proteins, and acronyms/abbreviations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};