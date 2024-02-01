import React from "react";
import userImage from "../../assets/images/about/avatar.png";
import downloadIcon from "../../assets/images/download.png";
import cvFile from "../../assets/files/mn-resume-2024.pdf";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import PageTitle from "../../Share/PageTitle";

const HomePage = () => {
  return (
    <>
      <PageTitle title="Home"></PageTitle>
      {/* End pagetitle */}

      <div
        className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh]  xl:h-[71vh]  justify-center"
        data-aos="fade"
      >
        <img
          className="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]"
          src={userImage}
          alt=""
        />
        <h3 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">
          Michael Julio Nuñez
        </h3>
        <p className="mb-4 text-[#7B7B7B]">Lead Software Developer</p>
        {/* Avatar Info End */}

        {/* Social information start */}
        <div className="flex space-x-3">
          <a
          href="https://www.facebook.com/GoogleMike/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socialbtn text-[#ffb16d]">
              <FaFacebookF />
            </span>
          </a>
          <a
            href="https://twitter.com/GoogleMike"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socialbtn text-[#ffb16d]">
              <FaTwitter />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/michaeljnunez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socialbtn text-[#ffb16d]">
              <FaLinkedinIn />
            </span>
          </a>
          <a
            href="https://www.github.com/mnunez903"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socialbtn text-[#ffb16d]">
              <FaGithub />
            </span>
          </a>
        </div>
        {/* Social information start */}

        {/* Dowanload button start */}
        <a
          href={cvFile}
          download
          className="flex items-center bg-gradient-to-r from-[#ffb16d] to-[#dd8424] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#dd8424] to-[#ffb16d] px-8 py-3 text-lg text-white rounded-[35px] mt-6"
        >
          <img src={downloadIcon} alt="icon" className="mr-2" />
          Download CV
        </a>

        {/* Dowanload button End */}
      </div>
    </>
  );
};

export default HomePage;
