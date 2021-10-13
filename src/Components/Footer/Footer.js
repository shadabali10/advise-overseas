import React from "react";
import { Link } from "react-router-dom";
import { HashLink as NLink } from "react-router-hash-link";
import linkedin from "../../images/linkedin.png";

const Footer = () => {
  return (
    <>
      <footer className="py-6 bg-gray-900	 text-white">
        <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
          <div className="grid grid-cols-12">
            <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
              <NLink
                to="/#top"
                smooth
                className="flex justify-center space-x-3 md:justify-start"
              >
                <span className="self-center text-2xl font-semibold">
                  Study Abroad
                </span>
              </NLink>
            </div>
            <div className="col-span-6 text-center md:text-left md:col-span-3">
              <p className="pb-1 text-lg font-medium">GET SUPPORT</p>
              <ul>
                <li className="text-base mt-2 mb-1">
                  <a
                    href="tel:+2348034937297"
                    className="hover:dark:text-violet-400"
                  >
                    TEL: +233 557167223
                  </a>
                </li>
                <li className="text-base mb-1 mt-2">
                  <a
                    href="mailto:contact@hcadvant.com"
                    className="hover:dark:text-violet-400"
                  >
                    sammedsani@gmail.com | <br></br>
                  </a>
                  <a
                    href="mailto:sales@hcadvant.com"
                    className="hover:dark:text-violet-400"
                  >
                    sales@studyabroad.com
                  </a>
                </li>
                <li className="text-sm mb-1 mt-2">
                  <a
                    href="https://goo.gl/maps/zfNznJfY1BjZCYX97"
                    className="hover:dark:text-violet-400"
                  >
                    Kumasi,Ghana
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-6 text-center md:text-left md:col-span-3">
              <p className="pb-1 text-lg font-medium">Quick Links</p>
              <ul>
                <li>
                  <NLink
                    to="/programtype#top"
                    smooth
                    className="hover:dark:text-violet-400"
                  >
                    Program Types
                  </NLink>
                </li>
                <li>
                  <NLink
                    to="/resources#top"
                    smooth
                    className="hover:dark:text-violet-400"
                  >
                    Resources
                  </NLink>
                </li>
                <li>
                  <NLink
                    to="/scholarship#top"
                    smooth
                    className="hover:dark:text-violet-400"
                  >
                    Scholarship
                  </NLink>
                </li>

                <li>
                  <NLink
                    to="/contact#top"
                    smooth
                    className="hover:dark:text-violet-400"
                  >
                    Contact
                  </NLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid justify-center pt-6 lg:justify-between">
            <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
              <span>©2021 All rights reserved | Developed by EnR Team</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
