import React from "react";

function Button({ content }) {
  return (
    <React.Fragment>
      <button className="px-5 py-2 font-mono text-lg text-purple-500 transition-all duration-700 ease-in-out border-2 border-purple-500 rounded-full hover:text-white hover:bg-purple-500 sm:text-xl lg:ml-16 xl:text-2xl ">
        {content}
      </button>
    </React.Fragment>
  );
}

export default Button;
