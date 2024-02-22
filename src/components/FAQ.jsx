import React, { useState } from "react";

const FAQ = ({ faqData }) => {
  // State to keep track of which question is currently open
  const [activeQuestion, setActiveQuestion] = useState(null);

  // Function to toggle the active question
  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <div className="flex justify-between items-center">
              <h2
                className="text-lg font-medium cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                {faq.question}
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transition-transform transform ${
                  activeQuestion === index ? "-rotate-180" : "rotate-0"
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                onClick={() => toggleQuestion(index)}
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {activeQuestion === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
