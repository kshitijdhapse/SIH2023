import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";
import InvestorPageSamplelogo from "components/InvestorPageSamplelogo";

const FounderPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto p-2.5 w-full">
        <div className="flex flex-col items-center justify-end max-w-[1319px] mt-[38px] mx-auto pt-4 px-4 md:px-5 w-full">
          <div className="flex flex-col gap-[15px] justify-start mt-2 w-[99%] md:w-full">
            <div className="flex flex-row gap-11 items-center justify-start w-[17%] md:w-full">
              <Img
                className="common-pointer h-[38px]"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
                onClick={() => navigate(-1)}
              />
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue-500"
                size="txtInterRegular32"
              >
                Founder
              </Text>
            </div>
            <div className="md:h-[1923px] sm:h-[779px] h-[888px] md:ml-[0] ml-[17px] relative w-[99%] md:w-full">
              <div className="absolute bg-white-A700 border border-black-900_33 border-solid flex flex-col inset-x-[0] items-center justify-end mx-auto p-[46px] md:px-10 sm:px-5 top-[0] w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[17px] mt-[132px] w-full">
                  <div className="bg-blue_gray-100 flex flex-col items-center justify-end mb-0.5 outline outline-[0.5px] outline-black-900 p-[25px] sm:px-5">
                    <Text
                      className="mt-5 text-2xl md:text-[22px] text-black-900 sm:text-xl w-[94%] sm:w-full"
                      size="txtInterRegular24"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit
                    </Text>
                  </div>
                  <div className="md:h-[536px] h-[538px] relative w-[30%] md:w-full">
                    <div className="md:h-[536px] h-[538px] m-auto w-full">
                      <div className="absolute bg-blue_gray-100 border border-black-900 border-solid h-[536px] inset-[0] justify-center m-auto w-full"></div>
                      <Img
                        className="absolute h-[534px] inset-[0] justify-center m-auto"
                        src="images/img_line1.svg"
                        alt="lineOne"
                      />
                    </div>
                    <Line className="absolute bg-black-900 h-px inset-[0] justify-center m-auto rotate-[-122deg] w-[98%]" />
                  </div>
                  <div className="flex md:flex-1 flex-col gap-9 items-center justify-start w-[30%] md:w-full">
                    <div className="bg-blue_gray-100 border border-black-900 border-solid flex flex-col items-end justify-start py-3.5 w-[99%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtInterRegular24"
                      >
                        Notifications
                      </Text>
                      <Text
                        className="mt-[21px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-4/5 sm:w-full"
                        size="txtInterRegular24"
                      >
                        Lorem ipsum dolor sit amet, consectetur
                      </Text>
                      <Line className="bg-black-900 h-px mt-2 w-full" />
                      <Text
                        className="mb-[104px] mt-3 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                        size="txtInterRegular24"
                      >
                        Medical
                      </Text>
                    </div>
                    <div className="bg-blue_gray-100 border border-black-900 border-solid flex flex-col items-end justify-start p-[11px] w-full">
                      <div className="flex flex-col gap-[17px] justify-start mb-3.5 mr-3 w-[78%] md:w-full">
                        <Text
                          className="md:ml-[0] ml-[71px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                          size="txtInterSemiBold24"
                        >
                          Chat
                        </Text>
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-row gap-[21px] items-center justify-start w-[56%] md:w-full">
                            <div className="bg-blue_gray-100 border border-black-900 border-solid h-3 mb-1.5 mt-[11px] rounded-[50%] w-3"></div>
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtInterRegular24"
                            >
                              Investors
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[21px] items-center justify-start mt-0.5 w-full">
                            <div className="bg-blue_gray-100 border border-black-900 border-solid h-3 my-2 rounded-[50%] w-3"></div>
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtInterRegular24"
                            >
                              Government Agent
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[21px] items-center justify-start mt-[3px] w-[72%] md:w-full">
                            <div className="bg-blue_gray-100 border border-black-900 border-solid h-3 mb-1.5 mt-[11px] rounded-[50%] w-3"></div>
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtInterRegular24"
                            >
                              Co-founders
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-blue_gray-100 border border-black-900 border-solid bottom-[2%] h-20 inset-x-[0] mx-auto w-full"></div>
              <div className="absolute bg-white-A700 border border-blue_gray-100_01 border-solid bottom-[0] flex flex-col font-montserrat inset-x-[0] items-center justify-end mx-auto w-full">
                <div className="flex flex-col gap-2.5 items-center justify-start mt-1.5 w-[94%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[79%] md:w-full">
                    <Text
                      className="md:mt-0 mt-2 text-[15px] text-black-900 tracking-[-0.22px]"
                      size="txtMontserratBold15"
                    >
                      Community
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[91px] md:mt-0 mt-2 text-[15px] text-black-900 tracking-[-0.22px]"
                      size="txtMontserratBold15"
                    >
                      Company
                    </Text>
                    <InvestorPageSamplelogo className="flex flex-row font-comfortaa gap-3 items-start justify-center md:ml-[0] ml-[148px] w-[14%] md:w-full" />
                    <Text
                      className="ml-40 md:ml-[0] md:mt-0 mt-2 text-[15px] text-black-900 text-right tracking-[-0.22px]"
                      size="txtMontserratBold15"
                    >
                      Help desk
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[114px] md:mt-0 mt-2 text-[15px] text-black-900 text-right tracking-[-0.22px]"
                      size="txtMontserratBold15"
                    >
                      Blog
                    </Text>
                  </div>
                  <Line className="bg-black-900_7f h-[3px] w-full" />
                  <div className="flex flex-row items-center justify-center w-[16%] md:w-full">
                    <Img
                      className="h-11 w-11"
                      src="images/img_contrast.svg"
                      alt="contrast"
                    />
                    <Img
                      className="h-11 ml-0.5 w-11"
                      src="images/img_contrast.svg"
                      alt="contrast_One"
                    />
                    <Img
                      className="h-11 ml-[3px] w-11"
                      src="images/img_contrast.svg"
                      alt="contrast_Two"
                    />
                    <Img
                      className="h-11 ml-[3px] w-11"
                      src="images/img_contrast.svg"
                      alt="contrast_Three"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bg-blue_gray-100 flex sm:flex-col flex-row font-inter sm:gap-5 inset-x-[0] items-start justify-start mx-auto p-[11px] top-[0] w-full">
                <div className="bg-gray-500_02 border border-black-900 border-solid h-16 mb-4 ml-1.5 sm:ml-[0] rounded-[35px] w-[6%]"></div>
                <Text
                  className="sm:ml-[0] ml-[27px] sm:mt-0 mt-6 text-2xl md:text-[22px] text-blue-500 sm:text-xl"
                  size="txtInterRegular24Blue500"
                >
                  My profile
                </Text>
                <Text
                  className="sm:ml-[0] ml-[59px] sm:mt-0 mt-[22px] text-2xl md:text-[22px] text-blue-500 sm:text-xl"
                  size="txtInterRegular24Blue500"
                >
                  Product_List
                </Text>
                <Text
                  className="ml-12 sm:ml-[0] sm:mt-0 mt-6 text-2xl md:text-[22px] text-blue-500 sm:text-xl"
                  size="txtInterRegular24Blue500"
                >
                  Specifications
                </Text>
                <Text
                  className="sm:ml-[0] ml-[46px] sm:mt-0 mt-6 text-2xl md:text-[22px] text-blue-500 sm:text-xl"
                  size="txtInterRegular24Blue500"
                >
                  Sales_Report
                </Text>
                <Text
                  className="sm:ml-[0] ml-[74px] sm:mt-0 mt-[23px] text-2xl md:text-[22px] text-blue-500 sm:text-xl"
                  size="txtInterRegular24Blue500"
                >
                  Create_Meet
                </Text>
                <Text
                  className="ml-11 sm:ml-[0] sm:mt-0 mt-[22px] text-2xl md:text-[22px] text-blue-500 sm:text-xl"
                  size="txtInterRegular24Blue500"
                >
                  Events
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FounderPage;
