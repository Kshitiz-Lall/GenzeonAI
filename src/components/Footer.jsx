import React from "react";
import { Footer } from "flowbite-react";
import logo from "../assets/image.png";

export const FooterComponent = () => {
  return (
    <div>
      <Footer container>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              href="https://hip.one"
              src={logo}
              alt="HIP Logo"
              name="HIP One"
            />
            <Footer.LinkGroup>
              <Footer.Link
                href="https://www.genzeon.com/about-us/"
                target="_blank"
              >
                About
              </Footer.Link>
              <Footer.Link
                href="https://www.genzeon.com/healthcare/health-tech-vendors/"
                target="_blank"
              >
                Health Tech
              </Footer.Link>
              <Footer.Link
                href="https://www.genzeon.com/healthcare/hip-one/"
                target="_blank"
              >
                HIP One
              </Footer.Link>
              <Footer.Link href="https://hip.one/contact" target="_blank">
                Contact
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="Genzeon" year={2024} />
        </div>
      </Footer>
    </div>
  );
};
