import React from "react";

export const Demo = () => {
  return (
    <div className="mt-10" id="demo">
      <div className="p-40 lg:px-14 max-w-screen-2xl mx-auto bg-grey900 mb-6 lg:leading-snug">
        <div className="text-center">
          <h4 className="lg:text-3xl text-3xl text-white font-semibold mb-6 lg:leading-snug">
            Give a try to our new Health Intelligence Platform based on
            Genzeon's NLP
          </h4>
          <div>
            <a
              href="https://www.hip.one"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
