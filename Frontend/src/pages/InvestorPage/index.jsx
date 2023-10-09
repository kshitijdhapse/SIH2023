import React from "react";

import { Img, Line, Text } from "components";
import InvestorPageSamplelogo from "components/InvestorPageSamplelogo";

const InvestorPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter h-[1980px] sm:h-auto md:h-auto items-center justify-start mx-auto pb-[88px] w-[1980px] sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[81px] items-center justify-start w-full">
          <header className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
            <div className="bg-gray-500 h-[116px] mb-10 md:ml-[0] ml-[38px] md:mt-0 mt-[17px] rounded-[58px] w-[117px]"></div>
            <Text
              className="mb-[75px] md:ml-[0] ml-[30px] md:mt-0 mt-[53px] text-4xl sm:text-[32px] md:text-[34px] text-center text-cyan-700"
              size="txtInterRegular36"
            >
              My Profile
            </Text>
            <Text
              className="mb-[74px] md:ml-[0] ml-[245px] md:mt-0 mt-[54px] text-4xl sm:text-[32px] md:text-[34px] text-center text-cyan-700"
              size="txtInterRegular36"
            >
              My investments
            </Text>
            <Text
              className="mb-[78px] md:ml-[0] ml-[97px] md:mt-0 mt-[50px] text-4xl sm:text-[32px] md:text-[34px] text-center text-cyan-700"
              size="txtInterRegular36"
            >
              Portfolio
            </Text>
            <div className="bg-gray-500_01 flex md:flex-1 sm:flex-col flex-row gap-12 items-end justify-center mb-12 md:ml-[0] ml-[100px] md:mt-0 mt-9 p-2.5 w-[24%] md:w-full">
              <Text
                className="mb-[17px] sm:ml-[0] ml-[62px] sm:mt-0 mt-[7px] text-4xl sm:text-[32px] md:text-[34px] text-center text-cyan-700"
                size="txtInterRegular36"
              >
                Search Startup
              </Text>
              <Img
                className="h-[52px] mb-4 mr-5"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
            <div className="md:h-[106px] h-[114px] mb-[35px] md:ml-[0] ml-[84px] mr-[110px] md:mt-0 mt-[23px] relative w-[6%] md:w-full">
              <div className="absolute h-[114px] md:h-[71px] inset-y-[0] left-[0] my-auto w-[87%]">
                <Text
                  className="absolute bottom-[0] right-[0] text-4xl sm:text-[32px] md:text-[34px] text-center text-cyan-700"
                  size="txtInterRegular36"
                >
                  Chat
                </Text>
                <div className="absolute bg-gray-500_01 h-[71px] inset-x-[0] mx-auto rounded-[50px] top-[0] w-[99%]"></div>
              </div>
              <Img
                className="absolute h-[55px] inset-y-[0] my-auto right-[0]"
                src="images/img_reply.svg"
                alt="reply"
              />
            </div>
          </header>
          <div className="flex flex-col items-center justify-start max-w-[1805px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="bg-blue_gray-100 flex md:flex-1 md:flex-col flex-row md:gap-5 items-end justify-end p-[46px] md:px-10 sm:px-5 w-[58%] md:w-full">
                <div className="md:h-[369px] h-[77px] mb-[325px] md:mt-0 mt-[181px] relative w-[6%] md:w-full">
                  <Line className="absolute bg-black-900 h-px inset-x-[0] mx-auto rotate-[-141deg] top-[0] w-full" />
                  <Line className="absolute bg-black-900 bottom-[0] h-px inset-x-[0] mx-auto rotate-[-33deg] w-full" />
                </div>
                <Text
                  className="mb-[540px] md:ml-[0] ml-[229px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
                  size="txtInterSemiBold36"
                >
                  Current Affairs
                </Text>
                <div className="flex flex-col mb-[325px] md:ml-[0] ml-[262px] mr-[35px] md:mt-0 mt-[175px] relative w-[5%] md:w-full">
                  <Line className="bg-black-900 h-px mx-auto rotate-[-45deg] w-[47px]" />
                  <Line className="bg-black-900 h-px ml-auto mr-[3px] mt-[-3px] rotate-[-129deg] w-[69%] z-[1]" />
                </div>
              </div>
              <div className="bg-blue_gray-100 flex md:flex-1 flex-col justify-end pt-11 w-[676px] md:w-full">
                <Text
                  className="md:ml-[0] ml-[239px] mr-[212px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
                  size="txtInterSemiBold36"
                >
                  Notifications
                </Text>
                <div className="flex flex-col gap-7 items-center justify-start md:ml-[0] ml-[120px] mr-[116px] mt-[66px]">
                  <Text
                    className="sm:text-3xl md:text-[32px] text-[34px] text-black-900 text-center"
                    size="txtInterRegular34"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                  <Text
                    className="sm:text-3xl md:text-[32px] text-[34px] text-black-900 text-center"
                    size="txtInterRegular34"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="bg-gray-400 flex flex-col items-center justify-start mt-[43px] p-8 sm:px-5 w-full">
                  <Text
                    className="mb-[257px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
                    size="txtInterSemiBold36"
                  >
                    Chat
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-blue_gray-100 flex flex-col items-end justify-start mt-[59px] md:pl-10 sm:pl-5 pl-[85px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[71px] items-start justify-end w-full">
                <div className="flex flex-col gap-[54px] justify-start md:mt-0 mt-12">
                  <Text
                    className="md:ml-[0] ml-[373px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
                    size="txtInterRegular36Black900"
                  >
                    <span className="text-black-900 font-inter font-semibold">
                      My
                    </span>
                    <span className="text-black-900 font-inter font-normal">
                      {" "}
                    </span>
                    <span className="text-black-900 font-inter font-semibold">
                      Events
                    </span>
                  </Text>
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                    size="txtInterRegular36Black900"
                  >
                    <>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <br />
                      Cras vel urna et ex laoreet tempus nec vel ante.
                      <br />
                      Pellentesque sit amet nisi tempor, fermentum tortor sed,
                      pulvinar neque.
                    </>
                  </Text>
                </div>
                <div className="bg-gray-500 flex flex-col items-center justify-start p-[75px] md:px-10 sm:px-5">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
                    size="txtInterRegular36Black900"
                  >
                    History
                  </Text>
                  <Text
                    className="mt-8 text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
                    size="txtInterRegular36Black900"
                  >
                    New
                  </Text>
                  <Text
                    className="mb-[121px] mt-12 text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
                    size="txtInterRegular36Black900"
                  >
                    My Interest
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex h-[346px] sm:h-[415px] md:h-[571px] justify-end mt-[71px] relative w-full">
              <div className="bg-blue_gray-100 h-[308px] mt-auto mx-auto w-full"></div>
              <div className="absolute bg-blue_gray-100 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[9px] w-full">
                <div className="flex flex-col justify-start mb-[19px] md:ml-[0] ml-[70px] w-[86%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[750px] sm:text-3xl md:text-[32px] text-[34px] text-black-900 text-center"
                    size="txtInterRegular34"
                  >
                    Contact Us
                  </Text>
                  <div className="flex md:flex-col flex-row font-montserrat md:gap-5 items-start justify-end md:ml-[0] ml-[209px] mt-[68px] w-4/5 md:w-full">
                    <Text
                      className="md:mt-0 mt-[3px] text-[15px] text-black-900 tracking-[-0.22px]"
                      size="txtMontserratBold15"
                    >
                      Community
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[114px] md:mt-0 mt-[3px] text-[15px] text-black-900 tracking-[-0.22px]"
                      size="txtMontserratBold15"
                    >
                      Company
                    </Text>
                    <InvestorPageSamplelogo className="flex flex-row font-comfortaa gap-3 items-start justify-center md:ml-[0] ml-[266px] w-[11%] md:w-full" />
                    <Text
                      className="md:ml-[0] ml-[259px] md:mt-0 mt-[3px] text-[15px] text-black-900 text-right tracking-[-0.22px]"
                      size="txtMontserratBold15"
                    >
                      Help desk
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[173px] md:mt-0 mt-[3px] text-[15px] text-black-900 text-right tracking-[-0.22px]"
                      size="txtMontserratBold15"
                    >
                      Blog
                    </Text>
                  </div>
                  <Line className="bg-black-900_7f h-px mt-10 w-full" />
                  <div className="flex flex-row items-center justify-end md:ml-[0] ml-[693px] mt-20 w-[17%] md:w-full">
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
                      className="h-11 ml-[26px] w-11"
                      src="images/img_contrast.svg"
                      alt="contrast_Two"
                    />
                    <Img
                      className="h-11 ml-[25px] w-11"
                      src="images/img_contrast.svg"
                      alt="contrast_Three"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestorPagePage;
