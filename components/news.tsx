/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ]
  }
  ```
*/

import React from "react";
import { Header } from "./blocks/feature";
import { Markdown } from "./markdown";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const News = (props) => {
  return (
    <div className="bg-gray-900">
      <div className="relative py-12 md:py-40 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="w-full object-cover h-full"
            src={props.image}
            alt=""
          />
          <div
            className={`absolute inset-0 bg-gray-900 mix-blend-multiply opacity-90 h-full`}
            aria-hidden="true"
          />
          <svg
            className="block absolute bottom-0 inset-x-0 h-24 w-full text-gray-900"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 100,100 0,100" />
          </svg>
          <div className="bg-gray-900 h-1/3 sm:h-2/3" />
        </div>
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-700"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
          </div>
        </div>
        <div className="text-lg max-w-prose mx-auto relative z-20 pt-28 pb-8 px-4 sm:px-0">
          <Header {...props} centered={true} />
        </div>
      </div>
      <div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-24 max-w-prose prose-lg text-white mx-auto">
            <TinaMarkdown
              content={props.body}
              components={{
                a: (props) => (
                  <a href={props.url} className="text-red-500">
                    {props.children}
                  </a>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
