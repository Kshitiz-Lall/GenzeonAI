import React from "react";
import BiomedicalModuleCard from "../BiomedicalModuleCard";
import FAQ from "../FAQ";
import icon from "../../assets/cloud-build-svgrepo-com.svg";


export const BiomedicalNLP = () => {
  const modules = [
    {
      id: 1,
      title: "medical_device_ner",
      description: "Detect medical device entities and other intrument related entities using pretrained NER model.",
      badgeTitles: ["physician_attestation", "item_description", "recent_order", "beneficiary_name", "beneficiary_location", "item_usuage", "cpm_devices", "refill_needs", "refill_date", "delivery_date"],
      colors: ["bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200", "bg-purple-200", "bg-blue-200", "bg-green-200"], // Additional colors added
    },
    {
      id: 2,
      title: "device_bill_ner",
      description: "This model is trained to extract billing terms related to device bill.",
      badgeTitles: ["beneficiary_name", "delivery_address", "Quantity_delivered", "date_delivered", "usage_of_item", "item_code", "bill_amount"],
      colors: ["bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200"],
    },
    {
      id: 3,
      title: "bill_code_ner",
      description: "Pretrained named entity recognition deep learning model for extracting the patient vitals.",
      badgeTitles: ["HCPCS_codes", "bill_type_codes", "ICD_10_CM", "ICD_10_PCS", "Revenue_code", 'NOC',],
      colors: ["bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200", "bg-purple-200"],
    },
    {
      id: 4,
      title: "order_delivery_ner",
      description: "Named Entity Recognition model that finds values from Patient Discharge Summary",
      badgeTitles: ["wopd_date", "treating_practitioner", "supplier_statement", "refill_requirement", "change_in_requirement",],
      colors: ["bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200"],
    },
  ];

  const faqData = [
    {
      "question": "What is NERMed?",
      "answer": "NERMed is an advanced Named Entity Recognition (NER) model specifically designed to accurately detect and extract essential healthcare billing and coding information from various documents and sources."
    },
    {
      "question": "What entities can NERMed detect?",
      "answer": "NERMed can detect a wide range of entities including Healthcare Common Procedure Coding System (HCPCS) codes, Bill Type Codes, ICD-10-CM Codes, ICD-10-PCS Codes, Revenue Codes, and Not Otherwise Classified (NOC) billing information."
    },
    {
      "question": "How does NERMed handle healthcare documentation?",
      "answer": "NERMed is equipped with state-of-the-art algorithms to efficiently recognize nuanced details within healthcare documentation such as descriptions of items or services, manufacturer names, product names and numbers, and Supplier Price List (PL) amounts."
    },
    {
      "question": "Can NERMed link related items?",
      "answer": "Yes, NERMed efficiently links related items by identifying HCPCS codes associated with specific entities, enabling comprehensive data extraction and analysis."
    },
    {
      "question": "How does NERMed address Proof of Delivery requirements?",
      "answer": "NERMed accurately detects statements signed and dated by beneficiaries, as well as supplier attestations, ensuring compliance with stringent Proof of Delivery requirements for recently eligible Medicare Fee-For-Service (FFS) claims."
    },
    {
      "question": "What are the benefits of using NERMed?",
      "answer": "Using NERMed enhances efficiency, reduces errors, and ensures compliance with regulatory standards in healthcare billing and coding processes. It streamlines operations and improves accuracy, thereby optimizing overall workflow efficiency."
    },
    {
      "question": "Is NERMed customizable to specific healthcare systems?",
      "answer": "Yes, NERMed can be customized to adapt to specific healthcare systems and documentation formats, ensuring seamless integration and optimal performance within diverse organizational environments."
    }
  ];

  return (
    <>
      <div className="mx-auto text-center">
        <div className="mt-20 w-screen mx-auto min-h-screen h-screen flex flex-col ">
          <div className="bg-BiomedicalnlpColor text-white py-20 sm:py-40 md:py-60 flex flex-col justify-center items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              NERMed NLP
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-screen-md">
              Cutting-Edge NLP Models specifically engineered to accurately detect and extract essential healthcare intrument's billing and coding information.
            </p>
          </div>

          <div className=" mt-5 mb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {modules.map((module) => (
              <div key={module.id}>
                <BiomedicalModuleCard
                  image={module.image}
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
              NERMed is designed to streamline the process of identifying crucial entities such as Healthcare Common Procedure Coding System (HCPCS) codes, Bill Type Codes, ICD-10-CM Codes, ICD-10-PCS Codes, Revenue Codes, and Not Otherwise Classified (NOC) billing information.
              Equipped with state-of-the-art algorithms, NERMed excels at recognizing nuanced details within healthcare documentation, including descriptions of items or services, manufacturer names, product names and numbers, and Supplier Price List (PL) amounts. Additionally, NERMed efficiently links related items by identifying HCPCS codes associated with specific entities.
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
