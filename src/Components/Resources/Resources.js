import React from "react";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Resources
          </h2>
          <div className="relative grid gap-8 row-gap-5 mb-8 px-5 md:px-10">
            <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex"></div>
            <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
              <div className="flex items-center justify-between mb-2">
                <p className="text-lg font-bold leading-5">UNDERGRADUATE</p>
                <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                  1
                </p>
              </div>
              <Link
                to="articles"
                className="flex items-center justify-items-center mt-6"
              >
                <img
                  className="pr-5"
                  src="https://img.icons8.com/material-outlined/24/000000/plus--v1.png"
                />
                <p className="text-md font-md leading-5">Articles</p>
              </Link>
              <Link
                to="blogs"
                className="flex items-center justify-items-center mt-6"
              >
                <img
                  className="pr-5"
                  src="https://img.icons8.com/material-outlined/24/000000/plus--v1.png"
                />
                <p className="text-md font-md leading-5">Blogs</p>
              </Link>
              <Link
                to="student-guide"
                className="flex items-center justify-items-center mt-6"
              >
                <img
                  className="pr-5"
                  src="https://img.icons8.com/material-outlined/24/000000/plus--v1.png"
                />
                <p className="text-md font-md leading-5">Student Guide</p>
              </Link>
              <Link
                to="undergrad/materials"
                className="flex items-center justify-items-center mt-6"
              >
                <img
                  className="pr-5"
                  src="https://img.icons8.com/material-outlined/24/000000/plus--v1.png"
                />
                <p className="text-md font-md leading-5">Materials</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;