import React from "react";

const Articles = () => {
  return (
    <>
      <div class="container px-6 py-16 mx-auto text-center">
        <div class="max-w-lg mx-auto">
          <h1 class="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Scholarship Blog
          </h1>
          <p class="mt-6 text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            similique obcaecati illum mollitia.
          </p>
        </div>
      </div>
      <hr className="flex justify-center mb-10 border-t-2 border-gray-300 " />
      <div class="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mb-10">
        <img
          class="object-cover w-full h-64"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article"
        />

        <div class="p-6">
          <div>
            <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              Product
            </span>
            <a
              href="#"
              class="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline"
            >
              My Journey
            </a>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
              parturient et sem ipsum volutpat vel. Natoque sem et aliquam
              mauris egestas quam volutpat viverra. In pretium nec senectus
              erat. Et malesuada lobortis.
            </p>
          </div>

          <div class="mt-4">
            <div class="flex items-center">
              <div class="flex items-center">
                <img
                  class="object-cover h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                />
                <a
                  href="#"
                  class="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                >
                  Jone Doe
                </a>
              </div>
              <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">
                21 SEP 2021
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mb-10">
        <img
          class="object-cover w-full h-64"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article"
        />

        <div class="p-6">
          <div>
            <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              Product
            </span>
            <a
              href="#"
              class="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline"
            >
              My Journey
            </a>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
              parturient et sem ipsum volutpat vel. Natoque sem et aliquam
              mauris egestas quam volutpat viverra. In pretium nec senectus
              erat. Et malesuada lobortis.
            </p>
          </div>

          <div class="mt-4">
            <div class="flex items-center">
              <div class="flex items-center">
                <img
                  class="object-cover h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                />
                <a
                  href="#"
                  class="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                >
                  Jone Doe
                </a>
              </div>
              <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">
                21 SEP 2021
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
