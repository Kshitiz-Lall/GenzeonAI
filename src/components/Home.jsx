import React from "react";
import { Carousel } from "flowbite-react";
import image from "../assets/image.png";

export const Home = () => {
  return (
    <>
      <div className="bg-fadeSilver" id="home">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
          <Carousel className="w-full mx-auto">
            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between">
              <img src={image} />
              <div className="md:w-1/2">
                <h1 className="text-5xl font-semibold mb-4 text-neutralGrey md:w=3/4 leading-snug">
                  Hello <br />
                  <span className="text-primaryBlue leading-snug">text</span>
                </h1>
                <p className="text-fadeGrey text-base mb-8">Subtitle</p>
                <button className="btn-primary">Demo</button>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between">
              <img src={image} />
              <div className="md:w-1/2">
                <h1 className="text-5xl font-semibold mb-4 text-neutralGrey md:w=3/4 leading-snug">
                  Hello <br />
                  <span className="text-primaryBlue leading-snug">text</span>
                </h1>
                <p className="text-fadeGrey text-base mb-8">Subtitle</p>
                <button className="btn-primary">Demo</button>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between">
              <img src={image} />
              <div className="md:w-1/2">
                <h1 className="text-5xl font-semibold mb-4 text-neutralGrey md:w=3/4 leading-snug">
                  Hello <br />
                  <span className="text-primaryBlue leading-snug">text</span>
                </h1>
                <p className="text-fadeGrey text-base mb-8">Subtitle</p>
                <button className="btn-primary">Demo</button>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};
