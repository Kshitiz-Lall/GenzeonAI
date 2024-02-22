import React from "react";
import ModuleCard from "../ModuleCard";
import FAQ from "../FAQ";

export const ClinicalNLP = () => {
  const modules = [
    {
      id: 1,
      title: "module one",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      badgeTitles: ["title1", "title2"],
      colors: ["bg-purple-500", "bg-blue-500"],
    },
    {
      id: 2,
      title: "module two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      badgeTitles: ["title3", "title4"],
      colors: ["bg-green-500", "bg-yellow-500"],
    },
    {
      id: 3,
      title: "module three",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      badgeTitles: ["title5", "title6", "title6", "title6"],
      colors: ["bg-red-500", "bg-indigo-500", "bg-indigo-500", "bg-indigo-500"],
    },
    {
      id: 4,
      title: "module one",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      badgeTitles: ["title1", "title2"],
      colors: ["bg-purple-500", "bg-blue-500"],
    },
    {
      id: 5,
      title: "module two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      badgeTitles: ["title3", "title4"],
      colors: ["bg-green-500", "bg-yellow-500"],
    },
    {
      id: 6,
      title: "module three",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      badgeTitles: ["title5", "title6", "title6", "title6"],
      colors: ["bg-red-500", "bg-indigo-500", "bg-indigo-500", "bg-indigo-500"],
    },
  ];

  const faqData = [
    {
      question: "What is Genzeon NLP?",
      answer:
        "Genzeon NLP is an advanced Natural Language Processing (NLP) platform designed to analyze, understand, and extract insights from textual data.",
    },
    {
      question: "What are the key features of Genzeon NLP?",
      answer:
        "Genzeon NLP offers a range of features including text summarization, sentiment analysis, entity recognition, document classification, language translation, and more, to empower businesses with actionable insights from unstructured data.",
    },
    {
      question: "How can Genzeon NLP benefit my organization?",
      answer:
        "Genzeon NLP can benefit your organization by automating repetitive text-related tasks, extracting valuable insights from large volumes of textual data, improving decision-making processes, enhancing customer experiences, and driving overall operational efficiency.",
    },
    {
      question: "Is Genzeon NLP customizable for specific business needs?",
      answer:
        "Yes, Genzeon NLP is highly customizable and can be tailored to meet the specific NLP requirements of your business. Whether you need industry-specific models, custom entity recognition, or specialized text analysis capabilities, Genzeon NLP can be adapted to suit your needs.",
    },
    {
      question: "How secure is Genzeon NLP with sensitive data?",
      answer:
        "Genzeon NLP prioritizes data security and privacy. The platform employs robust encryption protocols, access controls, and compliance measures to ensure the confidentiality and integrity of sensitive data throughout the analysis process.",
    },
    {
      question:
        "What support and resources are available for Genzeon NLP users?",
      answer:
        "Genzeon provides comprehensive support and resources for Genzeon NLP users, including documentation, training, technical assistance, and ongoing updates and enhancements to the platform to ensure optimal performance and user satisfaction.",
    },
  ];

  return (
    <>
      <div className="mx-auto text-center">
        <div className="mt-20 w-screen mx-auto min-h-screen h-screen flex flex-col ">
          <div className="bg-ClinicalnlpColor text-white py-20 sm:py-40 md:py-60 flex flex-col justify-center items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Clinical NLP
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-screen-md">
              Propelling Clinical Natural Language Processing (NLP) Forward to
              Seamlessly Integrate Patient Input, Pathological Findings,
              Radiological Imaging, Laboratory Reports, and Beyond
            </p>
          </div>

          <div className=" mt-5 mb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {modules.map((module) => (
              <div key={module.id}>
                <ModuleCard
                  title={module.title}
                  description={module.description}
                  badgeTitles={module.badgeTitles} // Pass badge titles as a prop
                  colors={module.colors} // Pass colors as a prop
                />
              </div>
            ))}
          </div>
          <div className="px-4 lg:px-14 w-screen mx-auto bg-fadeSilver py-16">
            <p className="text-sm text-neutralGrey mb-8">
              Clinical Natural Language Processing (NLP) techniques to
              seamlessly combine various sources of medical data, including
              patient narratives, pathology reports, radiological findings,
              laboratory results, and other clinical documentation.
            </p>
          </div>
          <div className="px-4 lg:px-14 w-screen mx-auto bg-fadeSilver py-16">
            <FAQ faqData={faqData} />
          </div>
        </div>
      </div>
    </>
  );
};
