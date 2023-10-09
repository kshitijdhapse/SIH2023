import React from "react";

import { Img, Line, Text } from "components";
import InvestorPageSamplelogo from "components/InvestorPageSamplelogo";

const GovtLoginPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter h-[1980px] sm:h-auto md:h-auto items-center justify-start mx-auto pb-[62px] w-[1980px] sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[84px] items-center justify-start w-full">
          <header className="bg-blue_gray-100 flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full">
            <div className="bg-gray-500 h-[122px] mb-[72px] sm:ml-[0] ml-[73px] sm:mt-0 mt-[25px] rounded-[64px] w-[7%]"></div>
            <Text
              className="mb-[102px] sm:ml-[0] ml-[582px] sm:mt-0 mt-[67px] sm:text-4xl md:text-[38px] text-[40px] text-center text-cyan-700"
              size="txtInterRegular40"
            >
              Applications
            </Text>
            <Text
              className="mb-[106px] sm:ml-[0] ml-[153px] sm:mt-0 mt-[63px] sm:text-4xl md:text-[38px] text-[40px] text-center text-cyan-700"
              size="txtInterRegular40"
            >
              Verification
            </Text>
            <Text
              className="mb-[106px] sm:ml-[0] ml-[182px] mr-[237px] sm:mt-0 mt-[63px] sm:text-4xl md:text-[38px] text-[40px] text-center text-cyan-700"
              size="txtInterRegular40"
            >
              Statistics
            </Text>
          </header>
          <div className="flex flex-col items-center justify-start max-w-[1789px] mx-auto md:px-5 w-full">
            <div className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-start justify-start pb-[3px] px-[3px] w-full">
              <Img
                className="h-[54px] md:ml-[0] ml-[61px] md:mt-0 mt-[22px]"
                src="images/img_polygon1.svg"
                alt="polygonOne"
              />
              <Text
                className="md:ml-[0] ml-[124px] md:mt-0 mt-[30px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtInterRegular40Black900"
              >
                Startup List{" "}
              </Text>
              <Line className="bg-black-900 h-[99px] md:h-px md:ml-[0] ml-[408px] md:w-full w-px" />
              <Img
                className="h-14 md:ml-[0] ml-[34px] md:mt-0 mt-[21px]"
                src="images/img_polygon1.svg"
                alt="polygonTwo"
              />
              <Text
                className="md:ml-[0] ml-[194px] md:mt-0 mt-[26px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtInterRegular40Black900"
              >
                Investors List
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[49px] items-center justify-between mt-[82px] w-full">
              <div className="bg-blue_gray-100 flex flex-col items-center justify-start md:mt-0 mt-1.5 p-[26px] sm:px-5">
                <Text
                  className="mb-[345px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                  size="txtInterSemiBold40"
                >
                  Issue Application Forms/Circulars
                </Text>
              </div>
              <div className="bg-blue_gray-100 flex flex-col items-center justify-start p-7 sm:px-5">
                <Text
                  className="mb-[346px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                  size="txtInterSemiBold40"
                >
                  Chat
                </Text>
              </div>
            </div>
            <div className="bg-blue_gray-100 flex flex-col gap-[47px] items-center justify-start mt-[61px] p-[42px] md:px-10 sm:px-5">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtInterSemiBold40"
              >
                Upcoming Events
              </Text>
              <Text
                className="mb-[76px] sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                size="txtInterRegular34"
              >
                <>
                  Aenean ut tellus a eros rhoncus malesuada.
                  <br />
                  Mauris nec dolor ut magna molestie auctor eu vitae orci.
                  <br />
                  Curabitur sed metus mattis, blandit elit non, bibendum nisi.
                </>
              </Text>
            </div>
            <div className="bg-blue_gray-100 flex flex-col items-start justify-start mt-[62px] p-[25px] sm:px-5 w-full">
              <div className="flex flex-col justify-start mb-[3px] md:ml-[0] ml-[54px] w-[88%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[728px] sm:text-3xl md:text-[32px] text-[34px] text-black-900 text-center"
                  size="txtInterRegular34"
                >
                  Contact Us
                </Text>
                <div className="flex md:flex-col flex-row font-montserrat md:gap-5 items-start justify-end md:ml-[0] ml-[207px] mt-[52px] w-4/5 md:w-full">
                  <Text
                    className="md:mt-0 mt-[3px] text-[15px] text-black-900 tracking-[-0.22px]"
                    size="txtMontserratBold15"
                  >
                    Community
                  </Text>
                  <Text
                    className="ml-28 md:ml-[0] md:mt-0 mt-[3px] text-[15px] text-black-900 tracking-[-0.22px]"
                    size="txtMontserratBold15"
                  >
                    Company
                  </Text>
                  <InvestorPageSamplelogo className="flex flex-row font-comfortaa gap-3 items-start justify-center md:ml-[0] ml-[263px] w-[11%] md:w-full" />
                  <Text
                    className="ml-64 md:ml-[0] md:mt-0 mt-[3px] text-[15px] text-black-900 text-right tracking-[-0.22px]"
                    size="txtMontserratBold15"
                  >
                    Help desk
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[171px] md:mt-0 mt-[3px] text-[15px] text-black-900 text-right tracking-[-0.22px]"
                    size="txtMontserratBold15"
                  >
                    Blog
                  </Text>
                </div>
                <Line className="bg-black-900_7f h-px mt-10 w-full" />
                <div className="flex flex-row items-center justify-end md:ml-[0] ml-[686px] mt-20 w-[17%] md:w-full">
                  <Img
                    className="h-11 w-11"
                    src="images/img_contrast.svg"
                    alt="contrast"
                  />
                  <Img
                    className="h-11 ml-[26px] w-11"
                    src="images/img_contrast.svg"
                    alt="contrast_One"
                  />
                  <Img
                    className="h-11 ml-[25px] w-11"
                    src="images/img_contrast.svg"
                    alt="contrast_Two"
                  />
                  <Img
                    className="h-11 ml-6 w-11"
                    src="images/img_contrast.svg"
                    alt="contrast_Three"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GovtLoginPage;
