import React from "react";
import ClinicalModuleCard from "../ClinicalModuleCard";
import FAQ from "../FAQ";

export const ClinicalNLP = () => {
  const modules = [
    {
      id: 1,
      title: "admission_ner",
      description: "Detect patient admission entities and other clinical entities using pretrained NER model.",
      badgeTitles: ["NAME", "DOB", "Address", "Gender", "Age", "AdmitDate", "Discharge Date", "ID", "DIAGNOSIS", "DURATION"],
      colors: ["bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200", "bg-purple-200", "bg-blue-200", "bg-green-200"], // Additional colors added
    },
    {
      id: 2,
      title: "insurance_ner",
      description: "This model is trained to extract insurance terms related to claim in text.",
      badgeTitles: ["PROVIDER", "ADDRESS", "POLICY NUMBER", "BILL_AMOUNT", "BILL_TYPE_CODES", "REVENUE_CODE"],
      colors: ["bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200"], // Additional colors added
    },
    {
      id: 3,
      title: "clinical_vitals_ner",
      description: "Pretrained named entity recognition deep learning model for extracting the patient vitals.",
      badgeTitles: ["BP", "SPO2", "TEMP", "PULSE", "RESP", "HEIGHT", "WEIGHT", "TIME"],
      colors: ["bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200", "bg-purple-200"], // Additional colors added
    },
    {
      id: 4,
      title: "patient_discharge_ner",
      description: "Named Entity Recognition model that finds values from Patient Discharge Summary",
      badgeTitles: ["Admitting_diagnosis", "Discharge_diagnosis", "Dates", "Doctor_name_attested"],
      colors: ["bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200"], // Additional colors added
    },
    {
      id: 5,
      title: "codes_ner",
      description: "This model is trained to extract predefined codes from the text.",
      badgeTitles: ["ICD_Codes", "DME_codes"],
      colors: ["bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200"], // Additional colors added
    },
    {
      id: 6,
      title: "posology_ner",
      description: "Pretrained named entity recognition deep learning model for posology.",
      badgeTitles: ["DOSAGE", "DRUG", "DURATION", "FORM", "FREQUENCY", "ROUTE", "STRENGTH"],
      colors: ["bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200"], // Additional colors added
    },
    {
      id: 7,
      title: "clinical_abbr_ner",
      description: "This model is trained to extract clinical abbreviations and acronyms in text.",
      badgeTitles: ["ABBR"],
      colors: ["bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200"], // Additional colors added
    },
    {
      id: 8,
      title: "phi_value_ner",
      description: "Named Entity Recognition model that finds values from Patient Health Information Records",
      badgeTitles: ["AGE", "MEDICALRECORD", "ORG", "DOCTOR", "GENDER", "HEALTHPLAN", "DATE", "LOCATION", "PATIENT", "PHONE", "HOSPITAL", "EMAIL", "IDNUM",],
      colors: ["bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200", "bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200"], // Additional colors added
    },
    {
      id: 9,
      title: "radiology_ner",
      description: "This model is trained to extract predefined terminologies related to Radiology Report.",
      badgeTitles: ["ImagingFindings", "Direction", "OtherFindings", "Measurements", "Score", "BodyPart", "Medical_Device", "Test", "ManualFix", "Procedure", "Disease_Syndrome_Disorder", "Test_Result", "Imaging_Technique", "ImagingTest", "Symptom", "Units"],
      colors: ["bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200", "bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200", "bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200"], // Additional colors added
    },
    {
      id: 10,
      title: "nurse_ner",
      description: "Pretrained named entity recognition deep learning model for nurse identification and contact information.",
      badgeTitles: ['nurse_name', 'patient_name', 'service_date', "service_description", "medication", "treatment_procedure", "medical_equipment", "medical_condition", "doctor_name", "followup_instructions", "emergency_contact", "insurance_information", "billing_information", "location", "contact_information"],
      colors: ["bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200", "bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200", "bg-purple-200"], // Additional colors added
    },
    {
      id: 11,
      title: "clinical_event_ner",
      description: "This model is trained to extract clinical events information and acronyms in text.",
      badgeTitles: ['DATE', 'TIME', 'PROBLEM', 'TEST', 'TREATMENT', 'OCCURENCE', 'CLINICAL_DEPT', 'EVIDENTIAL', 'DURATION', 'FREQUENCY', 'ADMISSION', 'DISCHARGE'],
      colors: ["bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200", "bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200"], // Additional colors added
    },
    {
      id: 12,
      title: "certification_ner",
      description: "Named Entity Recognition model that finds values from licensing and certifications Records",
      badgeTitles: ['NurseID', 'LicenseCert', 'Shifts', 'Assignments', 'Assessments', 'MedAdmin', 'Treatments', 'Observations', 'Coordination', 'Education', 'Incidents', 'Feedback'],
      colors: ["bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200", "bg-purple-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200", "bg-indigo-200", "bg-pink-200"], // Additional colors added
    },
  ];

  const faqData = [
    {
      "question": "What is Clinical Natural Language Processing (NLP)?",
      "answer": "Clinical NLP refers to the application of natural language processing techniques to analyze and interpret various sources of medical data, such as physician orders, pathology reports, radiological findings, laboratory results, and other clinical documentation."
    },
    {
      "question": "How does Clinical NLP benefit healthcare data integration?",
      "answer": "Clinical NLP seamlessly combines diverse sources of medical information, enabling healthcare systems to efficiently analyze unstructured text data and extract valuable insights to support informed decision-making and personalized patient care."
    },
    {
      "question": "What types of documents can Clinical NLP analyze?",
      "answer": "Clinical NLP can analyze a wide range of clinical documents, including physician orders, pathology reports, radiological findings, laboratory results, and other clinical documentation."
    },
    {
      "question": "What insights can be extracted using Clinical NLP?",
      "answer": "Clinical NLP algorithms parse through clinical text data to identify key entities, relationships, and trends hidden within the data, providing insights that can enhance medical research, improve patient outcomes, and transform healthcare delivery."
    },
    {
      "question": "How does Clinical NLP facilitate interoperability in healthcare systems?",
      "answer": "By automating the extraction and analysis of clinical data, Clinical NLP bridges the gap between different healthcare providers and standards, facilitating interoperability and comprehensive patient care."
    },
    {
      "question": "What are the benefits of using Clinical NLP in healthcare?",
      "answer": "Clinical NLP streamlines workflows, reduces administrative burden, enhances accuracy in decision-making processes, and drives advancements in medical research, ultimately leading to improved patient outcomes and transformed healthcare services."
    },
    {
      "question": "Can Clinical NLP be customized to specific healthcare needs?",
      "answer": "Yes, Clinical NLP can be tailored to address specific healthcare needs and requirements, ensuring that it aligns with the unique challenges and goals of healthcare organizations and practitioners."
    }
  ];

  return (
    <>
      <div className="mx-auto text-center">
        <div className="mt-20 w-screen mx-auto min-h-screen h-screen flex flex-col ">
          <div className="bg-ClinicalnlpColor text-white py-20 sm:py-40 md:py-60 flex flex-col justify-center items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Clinical Natural Language Processing (NLP)
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
                <ClinicalModuleCard
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
              Clinical Natural Language Processing (NLP) techniques are used to
              seamlessly combine various sources of Medical data, including
              Physician orders, Pathology reports, Radiological findings,
              Laboratory results, and other Clinical documentation.
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
