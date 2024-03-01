import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "./PageTitle";
import underConstruction from '../assets/images/under-construction.png' 

const NotFound = () => {
  return (
    <>
      <PageTitle title="404"></PageTitle>
      <div className="h-screen w-full flex flex-col justify-center items-center  bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed">
        <img className='h-64' src={underConstruction} alt={'Me with big eyes, no teeth, a pickaxe, and boots'}/>
        <h1 className="text-7xl leading-none text-white font-extrabold md:text-8xl">
          404!
        </h1>
        <p className=" text-medium text-white text-sm capitalize mb-7 mt-6 px-4 text-center">
          the page you are looking for does not exist
        </p>

        <Link
          to="/"
          className="flex items-center mx-auto bg-gradient-to-r from-[#ffb16d] to-[#dd8424] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD8424]  to-[#ffb16d] px-8 py-3 text-lg text-white rounded-[5px]"
        >
          Back To Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
