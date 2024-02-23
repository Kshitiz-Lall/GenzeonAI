import React from "react";
import ModuleCard from "../ModuleCard";
import FAQ from "../FAQ";
import HealthCareModule from "../HealthCareModule";

export const HealthcareNLP = () => {
  const modules = [
    {
      id: 1,
      title: "HIP Copilot",
      description: "Navigate the complexities of health information with ease, ensuring secure, efficient, and innovative care solutions.",
      badgeTitles: ["NAME", "DOB", "Address", "Gender", "Age", "AdmitDate", "Discharge Date", "ID", "DIAGNOSIS", "DURATION"],
      colors: ["bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200", "bg-purple-200", "bg-blue-200", "bg-green-200"], // Additional colors added
    },
    {
      id: 2,
      title: "Clinical Intelligence",
      description: "Transforming Clinical Entity Recognition for Enhanced Healthcare Insights.",
      badgeTitles: ["PROVIDER", "ADDRESS", "POLICY NUMBER", "BILL_AMOUNT", "BILL_TYPE_CODES", "REVENUE_CODE"],
      colors: ["bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200"], // Additional colors added
    },
    {
      id: 3,
      title: "Clinical Summarization",
      description: "Insightful Summaries, Improved Outcomes: Transforming Healthcare with Clinical Summarization.",
      badgeTitles: ["BP", "SPO2", "TEMP", "PULSE", "RESP", "HEIGHT", "WEIGHT", "TIME"],
      colors: ["bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200", "bg-purple-200"], // Additional colors added
    },
  ];

  const faqData = [
    {
      "question": "What are Healthcare LLMs?",
      "answer": "Healthcare LLMs (Large Language Models) are advanced language processing systems tailored specifically for the healthcare sector, designed to understand and analyze diverse medical data like patient records, treatment guidelines, clinical research, and healthcare documents."
    },
    {
      "question": "How is Data Privacy Ensured?",
      "answer": "Built-in privacy features ensure only authorized access to sensitive healthcare data, while a zero-storage policy on Protected Health Information (PHI) mitigates the risk of data breaches with end-to-end Encryption."
    },
    {
      "question": "What capabilities do Healthcare LLMs offer?",
      "answer": "Healthcare LLMs offer comprehensive understanding and analysis capabilities across various domains within the healthcare sector, including medical data, patient records, treatment protocols, clinical research, and healthcare documentation."
    },
    {
      "question": "How do Healthcare LLMs contribute to healthcare?",
      "answer": "Healthcare LLMs contribute to healthcare by enabling efficient information retrieval, supporting evidence-based decision-making, and advancing medical knowledge and patient care through their advanced processing and interpretation capabilities."
    },
    {
      "question": "What makes Healthcare LLMs unique?",
      "answer": "Healthcare LLMs are unique due to their tailored design for the healthcare sector, driven by cutting-edge algorithms and extensive domain-specific knowledge, allowing them to excel in understanding and analyzing complex medical data."
    },
    {
      "question": "Who can benefit from Healthcare LLMs?",
      "answer": "Healthcare professionals, researchers, and organizations can benefit from Healthcare LLMs, as they provide comprehensive solutions for efficient data analysis, evidence-based decision-making, and advancement of medical knowledge."
    },
    {
      "question": "What impact do Healthcare LLMs have on the healthcare industry?",
      "answer": "Healthcare LLMs represent a transformative force in the healthcare industry, leading to improved healthcare outcomes, enhanced patient experiences, and the advancement of medical knowledge through their unparalleled capabilities in understanding, analyzing, and deriving insights from vast amounts of medical data."
    }
  ];

  return (
    <>
      <div className="mx-auto text-center">
        <div className="mt-20 w-screen mx-auto min-h-screen h-screen flex flex-col ">
          <div className="bg-HealthcarenlpColor text-white py-20 sm:py-40 md:py-60 flex flex-col justify-center items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Healthcare Large Language Model (LLM)
            </h1>
            <p className="text-lg sm:text-xl mt-10 max-w-screen-md">
              Advanced Language Processing Systems Tailored for the Healthcare
              Sector, Offering Comprehensive Understanding and Analysis
              Capabilities Across Medical Data, Patient Records, Treatment
              Protocols, Clinical Research, and Healthcare Documentation.
            </p>
          </div>

          <div className=" mt-5 mb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {modules.map((module) => (
              <div key={module.id}>
                <HealthCareModule
                  title={module.title}
                  description={module.description}
                  badgeTitles={module.badgeTitles} // Pass badge titles as a prop
                  colors={module.colors} // Pass colors as a prop
                />
              </div>
            ))}
          </div>
          <div className="px-4 lg:px-14 w-screen mx-auto bg-fadeSilver py-16">
            <p className="text-xl text-neutralGrey mb-8">
              Leveraging advanced language models to decode complex medical texts for insightful, data-driven patient care and clinical decision-making
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
