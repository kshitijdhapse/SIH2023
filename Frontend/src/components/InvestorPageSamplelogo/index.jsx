import React from "react";

import { Img, Text } from "components";

const InvestorPageSamplelogo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[22px] items-center justify-start w-[22px]"
          style={{ backgroundImage: "url('images/img_group115.svg')" }}
        >
          <Img
            className="h-[22px] w-[22px]"
            src="images/img_union.svg"
            alt="union"
          />
        </div>
        <Text
          className="sm:text-[24.44px] md:text-[26.44px] text-[28.44px] text-black-900 text-center tracking-[-0.43px]"
          size="txtComfortaaRegular2844"
        >
          {props?.userphoto}
        </Text>
      </div>
    </>
  );
};

InvestorPageSamplelogo.defaultProps = { userphoto: "photo" };

export default InvestorPageSamplelogo;
