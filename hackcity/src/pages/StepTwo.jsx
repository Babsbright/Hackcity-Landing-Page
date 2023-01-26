import React from "react";
import man from "../assets/Images/hire/pana (2).png";
import ArrowL from "../assets/Images/hire/ArrowRight (1).png";
import ArrowR from "../assets/Images/hire/ArrowRight (2).png";
import Button2 from "../components/PrevButton";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Button from "../components/NextButton";
import CheckBox from "../components/CheckBox";
import Textarea from "../components/Textarea";

import { Link } from "react-router-dom";

function StepTwo({ status, handleOption, handleChange }) {
  return (
    <div className="">
      <section className="flex flex-col text-center lg:flex-row">
        <div className="bg-[#f1f6fd] lg:w-[35%] h-[90vh] lg:h-[118vh]">
          <h1 className=" mt-10 text-[#032555] text-[22px] font-semibold">
            Hire Us
          </h1>
          <p className="text-[13px] text-[#656464] mb-8 md:mb-0">step Two</p>
          <img
            className="w-[400px] m-auto lg:w-[550px] relative top-[-130px] lg:top-[-10px] z-20 lg:absolute"
            src={man}
            alt="illustration"
          />
        </div>

        <div className="p-8 text-left mt-10 lg:mt-0 lg:ml-10 z-30">
          <h4 className="text-[#032555] text-[16px] mb-8 font-semibold">
            We boast of highly skilled and experienced tech <br /> personnel, We
            handle every projects with experience
          </h4>

          <h6 className="text-[14px] mb-2 text-[#656464] font-semibold">
            20% Completed
          </h6>
          <hr className="border relative top-[12px] border-[6px] w-[15%] rounded-2xl border-[#032555]" />
          <hr className="mb-12 border border-[6px] rounded-2xl border-[#d9e7ff]" />
          <div>
            <div className="mb-3 text-[15px] flex items-center">
              <div className="w-[15px] h-[15px] mr-2 bg-[#032555] rounded-2xl"></div>
              <h3>What is the Application/Product Domain?</h3>
            </div>

            <div className="flex flex-col md:flex-row justify-between">
              <div className="">
                <CheckBox
                  status={status}
                  handleOption={handleOption}
                  title="Healthcare and Pharma"
                />
                <CheckBox
                  status={status}
                  handleOption={handleOption}
                  title="Technology Company"
                />
                <CheckBox
                  status={status}
                  handleOption={handleOption}
                  title="Logistics & Transport"
                />
                <CheckBox
                  status={status}
                  handleOption={handleOption}
                  title="Insurance"
                />
              </div>

              <div className="">
                <CheckBox
                  status={status}
                  handleOption={handleOption}
                  title="Fintech/Finance"
                />
                <CheckBox
                  status={status}
                  handleOption={handleOption}
                  title="Automotive"
                />
                <CheckBox
                  status={status}
                  handleOption={handleOption}
                  title="Education"
                />
                <CheckBox
                  status={status}
                  handleOption={handleOption}
                  title="Blockchain"
                />
              </div>
            </div>

            <div className="mb-3 mt-8 text-[15px] flex items-center">
              <div className="w-[15px] h-[15px] mr-2 bg-[#032555] rounded-2xl"></div>
              <h3>Others</h3>
            </div>
          </div>

          <section>
            <Textarea status={status} handleChange={handleChange} />
            <br />

            {!status ? (
              <div>
                <Button
                  className=" hire-next-button text-center hover:bg-[#032555]  cursor-not-allowed opacity-[0.5]"
                  pic={ArrowR}
                  value="Next"
                />
              </div>
            ) : (
              <div>
                <Link to="/step-three">
                  <Button
                    className=" hire-next-button hire-hover text-center cursor-pointer"
                    pic={ArrowR}
                    value="Next"
                  />
                </Link>
              </div>
            )}

            <Link to="/hire">
              <Button2
                pic={ArrowL}
                value="Previous"
                className="hire-prev-button"
              />
            </Link>
          </section>
        </div>
      </section>

      <div className="mt-5">
        <Logo />
        <Footer />
      </div>
    </div>
  );
}

export default StepTwo;
