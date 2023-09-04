import React from "react";

const Category = (props) => {
  return (
    <li
      className="my-16"
      data-aos={props.aos}
      data-aos-delay={props.aosDelay}
      data-aos-offset={props.aosOffset}>
      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
        <svg
          aria-hidden="true"
          className="w-3 h-3 text-blue-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"></path>
        </svg>
      </span>
      <h3 className="mb-1 text-xl font-semibold text-white">{props.title}</h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
        {props.time}
      </time>
      <h5 className="mb-2 text-lg font-semibold text-gray-500">
        {props.company}
      </h5>
      <p className="mb-4 text-base font-normal text-gray-400">{props.text}</p>
    </li>
  );
};

export default Category;
