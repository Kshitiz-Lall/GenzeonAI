import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { BiomedicalNLP } from "./components/NLP/BiomedicalNLP";
import { ClinicalNLP } from "./components/NLP/ClinicalNLP";
import { Navbar } from "./components/Navbar";
import { HealthcareNLP } from "./components/NLP/HealthcareNLP";
import { Genexpression } from "./components/NLP/Genexpression";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/clinical-nlp",
    element: <ClinicalNLP />,
  },
  {
    path: "/biomedical-nlp",
    element: <BiomedicalNLP />,
  },
  {
    path: "/healthcare-nlp",
    element: <HealthcareNLP />,
  },
  {
    path: "/genexpression",
    element: <Genexpression />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Navbar />
    </>
  );
}

export default App;
{/* <Service />
      <Product />
      <About />
      <Demo />
      <FooterComponent /> */}