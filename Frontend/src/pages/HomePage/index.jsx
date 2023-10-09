import React from "react";

import { Button, Img, Line, List, Text } from "components";
import InvestorPageSamplelogo from "components/InvestorPageSamplelogo";

const HomePagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat h-[1980px] sm:h-auto md:h-auto items-center justify-end mx-auto w-[1980px] sm:w-full md:w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <header className="flex flex-col items-center justify-center md:px-5 shadow-bs w-full">
            <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center p-[13px] w-full">
              <div className="header-row mt-3 mb-px">
                <InvestorPageSamplelogo className="flex flex-row font-comfortaa gap-[19px] items-start justify-center pr-0.5 py-0.5" />
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <Text
                className="sm:hidden md:ml-[0] ml-[105px] text-blue-500 text-center text-xl tracking-[-0.30px]"
                size="txtMontserratRomanSemiBold20"
              >
                About
              </Text>
              <Text
                className="sm:hidden md:ml-[0] ml-[53px] text-blue-500 text-center text-xl tracking-[-0.30px]"
                size="txtMontserratRomanSemiBold20"
              >
                Founders
              </Text>
              <Text
                className="sm:hidden md:ml-[0] ml-[52px] text-blue-500 text-center text-xl tracking-[-0.30px]"
                size="txtMontserratRomanSemiBold20"
              >
                Investors
              </Text>
              <Text
                className="sm:hidden md:ml-[0] ml-[54px] text-blue-500 text-center text-xl tracking-[-0.30px]"
                size="txtMontserratRomanSemiBold20"
              >
                Advisors
              </Text>
              <Text
                className="sm:hidden md:ml-[0] ml-[55px] text-blue-500 text-center text-xl tracking-[-0.30px]"
                size="txtMontserratRomanSemiBold20"
              >
                Resources
              </Text>
              <Button className="border border-blue-500 border-solid cursor-pointer font-medium font-montserrat sm:hidden leading-[normal] mb-[3px] min-w-[150px] md:ml-[0] ml-[596px] text-center text-xl tracking-[-0.30px]">
                Log in
              </Button>
              <Button
                className="cursor-pointer font-medium font-montserrat sm:hidden leading-[normal] mb-[3px] min-w-[150px] ml-20 md:ml-[0] text-center text-xl tracking-[-0.30px]"
                color="blue_500"
              >
                Register
              </Button>
            </div>
          </header>
          <div className="bg-white-A700 md:h-[476px] h-[495px] mt-4 pb-[35px] md:px-5 relative w-full">
            <Img
              className="h-[460px] mx-auto"
              src="images/img_rectangle.svg"
              alt="rectangle"
            />
            <div className="absolute bottom-[27%] flex flex-col gap-[26px] inset-x-[0] items-center justify-start mx-auto w-[71%]">
              <div className="bg-blue-500 flex flex-col items-center justify-start p-[25px] sm:px-5 rounded-[48px] w-[7%] md:w-full">
                <Img
                  className="h-[42px] rounded-[3px] w-[43px]"
                  src="images/img_play.svg"
                  alt="play"
                />
              </div>
              <div className="flex flex-col items-center justify-start p-1 w-full">
                <Text
                  className="md:text-5xl sm:text-[42px] text-[56px] text-black-900 text-center tracking-[-0.84px]"
                  size="txtMontserratRegular56"
                >
                  Carousel
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1959px] mt-[22px] mx-auto p-2.5 md:px-5 w-full">
            <Text
              className="mb-[18px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center tracking-[-0.72px]"
              size="txtMontserratRegular48"
            >
              Trending Events
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1770px] mt-[22px] mx-auto md:px-5 w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[179px] grid md:grid-cols-1 grid-cols-2 w-[63%] md:w-full"
              orientation="horizontal"
            >
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[460px] sm:h-auto items-start justify-start mb-0.5 sm:ml-[0] p-[30px] sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_rectangle.svg')" }}
              >
                <Text
                  className="mb-[349px] md:ml-[0] ml-[69px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.60px]"
                  size="txtMontserratRegular40"
                >
                  Exhibitions
                </Text>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[460px] sm:h-auto items-end justify-start sm:ml-[0] sm:mt-0 mt-0.5 p-[29px] sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_rectangle.svg')" }}
              >
                <Text
                  className="mb-[352px] mr-[41px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.60px]"
                  size="txtMontserratRegular40"
                >
                  Current events
                </Text>
              </div>
            </List>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[462px] items-center justify-start p-[30px] sm:px-5"
              style={{ backgroundImage: "url('images/img_rectangle.svg')" }}
            >
              <Text
                className="mb-[351px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.60px]"
                size="txtMontserratRegular40"
              >
                Research news
              </Text>
            </div>
          </div>
          <div className="bg-gray-100 flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[22px] p-20 md:px-10 sm:px-5 w-full">
            <Text
              className="sm:flex-1 leading-[50.00px] sm:mt-0 my-10 text-4xl sm:text-[32px] md:text-[34px] text-black-900_cc tracking-[-0.54px] w-[52%] sm:w-full"
              size="txtMontserratRegular36"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </Text>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[192px] sm:ml-[0] ml-[284px] sm:mt-0 my-16 text-[17px] text-center tracking-[-0.26px]"
              color="blue_500"
              size="sm"
            >
              Join Today
            </Button>
            <Button
              className="border border-blue-500 border-solid cursor-pointer font-medium leading-[normal] min-w-[192px] sm:ml-[0] ml-[95px] sm:mt-0 my-16 text-[17px] text-center tracking-[-0.26px]"
              size="sm"
            >
              Contact us
            </Button>
          </div>
          <div className="bg-white-A700 flex flex-col items-start justify-center max-w-[1934px] mx-auto p-20 md:px-5 w-full">
            <div className="flex flex-col justify-start my-10 w-[88%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[231px] w-[86%] md:w-full">
                <Text
                  className="md:mt-0 mt-[3px] text-[15px] text-black-900 tracking-[-0.22px]"
                  size="txtMontserratBold15"
                >
                  Community
                </Text>
                <Text
                  className="md:ml-[0] ml-[136px] md:mt-0 mt-[3px] text-[15px] text-black-900 tracking-[-0.22px]"
                  size="txtMontserratBold15"
                >
                  Company
                </Text>
                <InvestorPageSamplelogo className="flex flex-row font-comfortaa gap-3 items-start justify-center md:ml-[0] ml-[303px] w-[10%] md:w-full" />
                <Text
                  className="ml-72 md:ml-[0] md:mt-0 mt-[3px] text-[15px] text-black-900 text-right tracking-[-0.22px]"
                  size="txtMontserratBold15"
                >
                  Help desk
                </Text>
                <Text
                  className="md:ml-[0] ml-[194px] md:mt-0 mt-[3px] text-[15px] text-black-900 text-right tracking-[-0.22px]"
                  size="txtMontserratBold15"
                >
                  Blog
                </Text>
              </div>
              <Line className="bg-black-900_7f h-px mr-[34px] mt-10 w-[98%]" />
              <div className="flex flex-row items-center justify-end md:ml-[0] ml-[766px] mt-20 w-[18%] md:w-full">
                <Img
                  className="h-11 w-11"
                  src="images/img_contrast.svg"
                  alt="contrast"
                />
                <Img
                  className="h-11 ml-[34px] w-11"
                  src="images/img_contrast.svg"
                  alt="contrast_One"
                />
                <Img
                  className="h-11 ml-8 w-11"
                  src="images/img_contrast.svg"
                  alt="contrast_Two"
                />
                <Img
                  className="h-11 ml-[33px] w-11"
                  src="images/img_contrast.svg"
                  alt="contrast_Three"
                />
              </div>
              <Text
                className="md:ml-[0] ml-[737px] mt-[43px] text-[15px] text-black-900_cc text-center tracking-[-0.22px]"
                size="txtMontserratRegular15"
              >
                © Photo, Inc. 2023. We love our users!
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePagePage;
