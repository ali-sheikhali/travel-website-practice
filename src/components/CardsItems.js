import React from "react";
import { Link } from "react-router-dom";

function CardsItems() {
  return (
    <div className="md:flex md:justify-around md:gap-2 md:flex-wrap">
      <div className="md:w-3/12 shadow-md mb-5">
        <Link to="/services">
          <img
            className="shadow-md rounded-t-md mx-auto h-[420px] hover:scale-105 w-full object-cover transition-all ease-linear duration-300"
            src={require("../images/img-2.jpg")}
            alt=""
          />

          {/* <p className="absolute left-3 bottom-[170px] bg-blue-600 p-1 text-white ">
          Adventure
        </p> */}

          <p className="p-5 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vitae diam at enim porttitor dictum. Sed sollicitudin tincidunt
            consectetur. Maecenas nec justo nec sapien sagittis placerat. Sed
            arcu sem, placerat in odio ut, laoreet porttitor sapien
          </p>
        </Link>
      </div>
      <div className="md:w-3/12 shadow-md mb-5">
        <Link>
          <img
            className="shadow-md rounded-t-md mx-auto h-[420px] hover:scale-105 w-full object-cover transition-all ease-linear duration-300 "
            src={require("../images/img-8.jpg")}
            alt=""
          />
          {/* <p className="absolute left-3 bottom-[170px] bg-blue-600 p-1 text-white ">
          Adventure
        </p> */}

          <p className="p-5 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vitae diam at enim porttitor dictum. Sed sollicitudin tincidunt
            consectetur. Maecenas nec justo nec sapien sagittis placerat. Sed
            arcu sem, placerat in odio ut, laoreet porttitor sapien
          </p>
        </Link>
      </div>
      <div className="md:w-3/12 shadow-md mb-5">
        <Link>
          <img
            className="shadow-md rounded-t-md mx-auto h-[420px] hover:scale-105 w-full object-cover transition-all ease-linear duration-300"
            src={require("../images/img-4.jpg")}
            alt=""
          />
          {/* <p className="absolute left-3 bottom-[170px] bg-blue-600 p-1 text-white ">
          Adventure
        </p> */}

          <p className="p-5 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vitae diam at enim porttitor dictum. Sed sollicitudin tincidunt
            consectetur. Maecenas nec justo nec sapien sagittis placerat. Sed
            arcu sem, placerat in odio ut, laoreet porttitor sapien
          </p>
        </Link>
      </div>
      <div className="md:w-3/12 shadow-md mb-5">
        <Link>
          <img
            className="shadow-md rounded-t-md mx-auto h-[420px] hover:scale-105 w-full object-cover transition-all ease-linear duration-300"
            src={require("../images/img-9.jpg")}
            alt=""
          />
          {/* <p className="absolute left-3 bottom-[170px] bg-blue-600 p-1 text-white ">
          Adventure
        </p> */}

          <p className="p-5 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vitae diam at enim porttitor dictum. Sed sollicitudin tincidunt
            consectetur. Maecenas nec justo nec sapien sagittis placerat. Sed
            arcu sem, placerat in odio ut, laoreet porttitor sapien
          </p>
        </Link>
      </div>
      <div className="md:w-3/12 shadow-md mb-5">
        <Link>
          <img
            className="shadow-md rounded-t-md mx-auto h-[420px] hover:scale-105 w-full object-cover transition-all ease-linear duration-300"
            src={require("../images/img-6.jpg")}
            alt=""
          />
          {/* <p className="absolute left-3 bottom-[170px] bg-blue-600 p-1 text-white ">
          Adventure
        </p> */}

          <p className="p-5 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vitae diam at enim porttitor dictum. Sed sollicitudin tincidunt
            consectetur. Maecenas nec justo nec sapien sagittis placerat. Sed
            arcu sem, placerat in odio ut, laoreet porttitor sapien
          </p>
        </Link>
      </div>
      <div className="md:w-3/12 shadow-md mb-5">
        <Link>
          <img
            className="shadow-md rounded-t-md mx-auto h-[420px] hover:scale-105 w-full object-cover transition-all ease-linear duration-300"
            src={require("../images/img-7.jpg")}
            alt=""
          />
          {/* <p className="absolute left-3 bottom-[170px] bg-blue-600 p-1 text-white ">
          Adventure
        </p> */}

          <p className="p-5 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vitae diam at enim porttitor dictum. Sed sollicitudin tincidunt
            consectetur. Maecenas nec justo nec sapien sagittis placerat. Sed
            arcu sem, placerat in odio ut, laoreet porttitor sapien
          </p>
        </Link>
      </div>
    </div>
  );
}

export default CardsItems;
