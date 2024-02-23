import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { Carousel } from "flowbite-react";
import image from "../assets/image.png";
import laptop from "../assets/firmware.svg";
import "./style.css";

export const Home = () => {
  return (
    <>
      <div className="home-container" id="home">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex flex-col justify-center gap-8">
          <div className="grid grid-cols-3 grid-rows-1 md:grid-cols-3 gap-8 items-center">
            {/* Card 1 */}
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-primaryBlue dark:text-white">
                  Clinical NLP
                </h5>
              </a>
              <div class="border-t border-gray-300 my-4"></div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Clinical Natural Language Processing (NLP) techniques are used to
                seamlessly combine various sources of Medical data, including
                Physician orders, Pathology reports, Radiological findings,
                Laboratory results, and other Clinical documentation.
              </p>
              <a
                href="/clinical-nlp"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Explore
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            {/* Card 2 */}
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-primaryBlue dark:text-white">
                  NERMed NLP
                </h5>
              </a>
              <div class="border-t border-gray-300 my-4"></div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                NERMed is equipped with state-of-the-art algorithms to efficiently recognize nuanced details within healthcare documentation such as descriptions of items or services, manufacturer names, product names and numbers, and Supplier Price List (PL) amounts.
              </p>
              <a
                href="/biomedical-nlp"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Explore
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            {/* Card 3 */}
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-primaryBlue dark:text-white">
                  Healthcare LLM
                </h5>
              </a>
              <div class="border-t border-gray-300 my-4"></div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Healthcare LLMs are advanced language processing systems
                tailored for healthcare, adept at understanding & analyzing
                diverse medical data like patient records, treatment guidelines,
                clinical research, and healthcare documents.
              </p>
              <a
                href="/healthcare-nlp"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Explore
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <div className="col-start-2">
              {/* Card 4 */}
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-primaryBlue dark:text-white">
                    GenRexs
                  </h5>
                </a>
                <div className="border-t border-gray-300 my-4"></div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  With GenRexs, organizations can streamline their Data extraction workflows, unlock valuable fields and make informed decisions with ease.
                </p>
                <a href={`/genexpression`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Explore
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
