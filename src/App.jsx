import "./App.css";
import { About } from "./components/About";
import { Demo } from "./components/Demo";
import { FooterComponent } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Product } from "./components/Product";
import { Service } from "./components/Service";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <About />
      <Product />
      <Demo />
      <FooterComponent />
    </>
  );
}

export default App;
