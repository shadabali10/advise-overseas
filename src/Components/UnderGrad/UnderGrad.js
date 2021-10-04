import React from "react";

const UnderGrad = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <main id="top">
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://humanities-web.s3.us-east-2.amazonaws.com/college-prod/s3fs-public/styles/max_width_full/public/2020-01/niceweather_cropped.jpg?itok=xFSPg8tu')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    UNDERGRADUATE
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 border-b sm:border-r">
              <div className="max-w-md text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">The quick fox</h6>
                <p className="mb-3 text-sm text-gray-900">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium rem aperiam, eaque ipsa quae. Sit error
                  voluptatem.
                </p>
              </div>
            </div>
            <div className="p-8 border-b lg:border-r">
              <div className="max-w-md text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">Leverage agile</h6>
                <p className="mb-3 text-sm text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum
                </p>
              </div>
            </div>
            <div className="p-8 border-b sm:border-r lg:border-r-0">
              <div className="max-w-md text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  Organically grow
                </h6>
                <p className="mb-3 text-sm text-gray-900">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium rem aperiam, eaque ipsa quae. Sit error
                  voluptatem.
                </p>
              </div>
            </div>
            <div className="p-8 border-b lg:border-b-0 lg:border-r">
              <div className="max-w-md text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  Have a good one
                </h6>
                <p className="mb-3 text-sm text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum
                </p>
              </div>
            </div>
            <div className="p-8 border-b sm:border-b-0 sm:border-r">
              <div className="max-w-md text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">Trough pomfret</h6>
                <p className="mb-3 text-sm text-gray-900">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium rem aperiam, eaque ipsa quae. Sit error
                  voluptatem.
                </p>
              </div>
            </div>
            <div className="p-8">
              <div className="max-w-md text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  Disrupt inspire
                </h6>
                <p className="mb-3 text-sm text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default UnderGrad;
