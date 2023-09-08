import React from "react";

import { Button, CheckBox, Img, Input, Line, Text } from "components";

const ContactPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-poppins items-center justify-end mx-auto pt-[62px] w-full">
        <div className="flex flex-col gap-[22px] items-center justify-end w-full">
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1620px] mx-auto md:px-5 w-full">
            <Img
              className="sm:flex-1 h-[65px] md:h-auto object-cover w-[11%] sm:w-full"
              src="images/img_rectangle1.png"
              alt="rectangleFive"
            />
            <Text
              className="sm:ml-[0] ml-[947px] text-base text-white-A700"
              size="txtPoppinsRegular16"
            >
              ABOUT US
            </Text>
            <Text
              className="ml-16 sm:ml-[0] text-base text-white-A700"
              size="txtPoppinsRegular16"
            >
              SERVICES
            </Text>
            <Text
              className="ml-16 sm:ml-[0] text-base text-white-A700"
              size="txtPoppinsRegular16"
            >
              PROJECT
            </Text>
            <Text
              className="sm:ml-[0] ml-[71px] text-base text-white-A700"
              size="txtPoppinsRegular16"
            >
              CONTACT
            </Text>
          </div>
          <div className="flex flex-col font-spacegrotesk items-center justify-start w-full">
            <div className="bg-gradient  flex md:flex-col flex-row md:gap-5 items-start justify-start p-11 md:px-10 sm:px-5 w-full">
              <Text
                className="mb-[90px] md:ml-[0] ml-[106px] md:mt-0 mt-[41px] md:text-5xl text-[100px] text-white-A700"
                size="txtSpaceGroteskBold100"
              >
                Contact
              </Text>
              <div className="bg-blue_gray-100 h-5 mb-[239px] md:ml-[0] ml-[5px] md:px-5 w-5"></div>
              <div className="bg-blue_gray-100 h-[33px] mb-[209px] md:ml-[0] ml-[488px] md:mt-0 mt-[17px] md:px-5 w-[33px]"></div>
              <div className="bg-blue_gray-100 h-[17px] mb-[130px] md:ml-[0] ml-[483px] md:mt-0 mt-28 md:px-5 w-[17px]"></div>
              <div className="bg-blue_gray-100 h-[77px] mb-[53px] md:ml-[0] ml-[61px] md:mt-0 mt-[129px] md:px-5 w-[5%]"></div>
            </div>
            <div className="flex flex-col items-center justify-start max-w-[1620px] mt-[50px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <div className="flex md:flex-1 flex-col md:gap-10 gap-[159px] items-start justify-start md:mt-0 mt-[5px] w-[31%] md:w-full">
                  <div className="bg-blue_gray-100 h-[33px] w-[33px]"></div>
                  <Text
                    className="md:text-5xl sm:text-[42px] text-[56px] text-white-A700"
                    size="txtSpaceGroteskBold56WhiteA700"
                  >
                    Let’s get in touch!
                  </Text>
                </div>
                <div className="bg-gradient1  border border-solid flex md:flex-1 flex-col font-poppins gap-[39px] justify-start mb-[5px] md:ml-[0] ml-[234px] p-10 sm:px-5 rounded-[25px] w-[23%] md:w-full white_A700_33_white_A700_00_border30">
                  <Button
                    className="flex h-16 items-center justify-center md:ml-[0] ml-[5px] w-16"
                    shape="circle"
                    variant="outline"
                    color="white_A700_33_white_A700_00"
                  >
                    <Img
                      className="h-6"
                      src="images/img_phoneicon.svg"
                      alt="phoneicon"
                    />
                  </Button>
                  <div className="flex flex-col gap-3.5 items-start justify-start mb-1.5 ml-4 md:ml-[0] mr-[78px]">
                    <Text
                      className="text-base text-white-A700"
                      size="txtPoppinsSemiBold16"
                    >
                      Phone
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsBold24"
                    >
                      +92 321 6812169
                    </Text>
                  </div>
                </div>
                <div className="bg-gradient1  border border-solid flex md:flex-1 flex-col font-poppins gap-[38px] justify-start mb-[5px] md:ml-[0] ml-[30px] p-10 sm:px-5 rounded-[25px] w-[31%] md:w-full white_A700_33_white_A700_00_border31">
                  <Button
                    className="flex h-16 items-center justify-center md:ml-[0] ml-[5px] w-16"
                    shape="circle"
                    variant="outline"
                    color="white_A700_33_white_A700_00"
                  >
                    <Img
                      className="h-6"
                      src="images/img_emailicon.svg"
                      alt="emailicon"
                    />
                  </Button>
                  <div className="flex flex-col gap-4 items-start justify-start mb-1 ml-4 md:ml-[0] mr-[58px]">
                    <Text
                      className="text-base text-white-A700"
                      size="txtPoppinsSemiBold16"
                    >
                      Email
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsBold24"
                    >
                      info@terraformtechno.com
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-poppins sm:h-[2064px] md:h-[2615px] h-[3073px] mt-[74px] md:px-5 relative w-full">
              <div className="absolute sm:h-[815px] md:h-[864px] h-[945px] inset-x-[0] mx-auto top-[0] w-[85%] md:w-full">
                <div className="bg-blue_gray-100 h-[60px] ml-auto mr-[148px] mt-16 w-[60px]"></div>
                <div className="absolute sm:h-[815px] md:h-[864px] h-[945px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute h-[745px] left-[0] top-[0] w-[68%] md:w-full">
                    <Img
                      className="h-[745px] m-auto object-cover rounded-[25px] w-full"
                      src="images/img_imageplaceholder_745x1093.png"
                      alt="imageplaceholde"
                    />
                    <div className="absolute bottom-[4%] flex flex-col md:gap-10 gap-[324px] justify-start left-[3%] w-[47%]">
                      <Img
                        className="h-12 md:ml-[0] ml-[457px] w-12"
                        src="images/img_pinlocation.svg"
                        alt="pinlocation"
                      />
                      <div className="bg-gradient1  border border-solid flex flex-col items-center justify-end p-[5px] rounded-[25px] w-full white_A700_33_white_A700_00_border32">
                        <Text
                          className="leading-[30.00px] mt-32 text-gray-900_9e text-xl"
                          size="txtPoppinsRegular20Gray9009e"
                        >
                          <>
                            NewYork, <br />
                            Newyork 10065 USA
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-cyan-200 bottom-[0] flex flex-col items-center justify-start p-9 sm:px-5 right-[0] rounded-[25px] w-[61%]">
                    <div className="flex flex-col items-start justify-start mb-[7px] w-full">
                      <Text
                        className="md:text-5xl sm:text-[42px] text-[56px] text-gray-900"
                        size="txtSpaceGroteskBold56"
                      >
                        Send Us Message
                      </Text>
                      <Text
                        className="mt-3 text-white-A700 text-xl"
                        size="txtPoppinsRegular20"
                      >
                        Have any questions regarding our services? Send us your
                        message.
                      </Text>
                      <div className="flex md:flex-col flex-row font-poppins gap-6 items-center justify-between mt-[34px] w-full">
                        <div className="flex md:flex-1 flex-col gap-2.5 items-start justify-start w-[49%] md:w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                            size="txtPoppinsBold24Gray900"
                          >
                            Name
                          </Text>
                          <Input
                            name="group343"
                            placeholder="Enter Your Name ..."
                            className="p-0 placeholder:text-gray-900_87 text-left text-xl w-full"
                            wrapClassName="rounded-[15px] w-full"
                            type="text"
                            color="white_A700"
                          ></Input>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start w-[49%] md:w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                            size="txtPoppinsBold24Gray900"
                          >
                            Email
                          </Text>
                          <Input
                            name="group345"
                            placeholder="Enter Your Email Address ..."
                            className="p-0 placeholder:text-gray-900_87 text-left text-xl w-full"
                            wrapClassName="rounded-[15px] w-full"
                            type="email"
                            color="white_A700"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex flex-col font-poppins gap-[7px] items-start justify-start mt-6 w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                          size="txtPoppinsBold24Gray900"
                        >
                          Message
                        </Text>
                        <div className="bg-white-A700 flex flex-col items-start justify-start p-[25px] sm:px-5 rounded-[15px] w-full">
                          <Text
                            className="mb-[113px] ml-3 md:ml-[0] text-gray-900_87 text-xl"
                            size="txtPoppinsRegular20Gray90087"
                          >
                            Enter Your Message ...
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row font-poppins sm:gap-10 items-start justify-between mt-6 w-full">
                        <CheckBox
                          className="leading-[26.00px] mb-[7px] sm:mt-0 mt-[21px] text-base text-left"
                          inputClassName="h-5 mr-[5px] w-5"
                          name="bytickingthis"
                          id="bytickingthis"
                          label="By ticking this box, I am consenting to be sent monthly articles and
promotions through Terraform Technologies newsletter."
                        ></CheckBox>
                        <Button
                          className="cursor-pointer font-bold min-w-[178px] rounded-[15px] text-2xl md:text-[22px] text-center sm:text-xl"
                          color="gray_900"
                        >
                          SUBMIT
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-blue_gray-100 bottom-[3%] h-[77px] left-[15%] rotate-[180deg] w-[6%]"></div>
                </div>
              </div>
              <div className="absolute bottom-[0] font-spacegrotesk sm:h-[1990px] md:h-[2541px] h-[2733px] inset-x-[0] mx-auto pb-[743px] w-full">
                <Img
                  className="h-[1990px] mx-auto object-cover md:w-full"
                  src="images/img_group54.png"
                  alt="wireframevector"
                />
                <div className="absolute flex flex-col inset-x-[0] justify-start mx-auto top-[8%] w-[85%]">
                  <Img
                    className="h-[65px] md:h-auto ml-16 md:ml-[0] object-cover w-[11%] sm:w-full"
                    src="images/img_rectangle1.png"
                    alt="rectangleFive_One"
                  />
                  <div className="bg-blue_gray-100 h-[30px] md:ml-[0] ml-[1407px] mr-[183px] mt-[461px] w-[30px]"></div>
                  <Text
                    className="md:ml-[0] ml-[361px] mt-[31px] md:text-5xl text-[100px] text-white-A700"
                    size="txtSpaceGroteskBold100"
                  >
                    <span className="text-white-A700 font-spacegrotesk text-left font-bold">
                      Need{" "}
                    </span>
                    <span className="text-white-A700 font-spacegrotesk text-left font-bold">
                      IT
                    </span>
                    <span className="text-white-A700 font-spacegrotesk text-left font-bold">
                      {" "}
                      Solutions?
                    </span>
                  </Text>
                  <div className="flex md:flex-col flex-row gap-[27px] items-center justify-center md:ml-[0] ml-[436px] w-[47%] md:w-full">
                    <Text
                      className="md:text-5xl text-[100px] text-white-A700"
                      size="txtSpaceGroteskBold100"
                    >
                      Let’s
                    </Text>
                    <Text
                      className="italic md:text-5xl text-[100px] text-white-A700"
                      size="txtPoppinsLightItalic100WhiteA700"
                    >
                      start now.
                    </Text>
                  </div>
                  <div className="bg-gray-900 border border-solid border-white-A700 flex md:flex-col flex-row font-poppins gap-[22px] items-center justify-center mt-[42px] mx-auto p-[27px] sm:px-5 rounded-[15px] w-1/4 md:w-full">
                    <Text
                      className="ml-3 md:ml-[0] text-base text-white-A700"
                      size="txtPoppinsSemiBold16"
                    >
                      GET FREE CONSULTATION
                    </Text>
                    <Line className="bg-white-A700 h-0.5 mr-3 md:mt-0 my-[11px] w-[29%]" />
                  </div>
                  <div className="bg-blue_gray-100 h-[77px] md:ml-[0] ml-[260px] mr-[1283px] mt-[63px] w-[77px]"></div>
                  <div className="flex flex-col font-poppins items-center justify-start mt-[113px] w-full">
                    <div className="flex flex-col gap-[51px] items-end justify-start w-full">
                      <div className="bg-blue_gray-100 h-[30px] w-[30px]"></div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                          <div className="flex md:flex-1 flex-row items-center justify-between md:mt-0 mt-[235px] w-[16%] md:w-full">
                            <Img
                              className="h-[42px] w-[43px]"
                              src="images/img_camera.svg"
                              alt="camera"
                            />
                            <Img
                              className="h-12 w-12"
                              src="images/img_facebookicon.svg"
                              alt="facebookicon"
                            />
                            <Img
                              className="h-10 w-10"
                              src="images/img_twittericon.svg"
                              alt="twittericon"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start mb-[37px] md:ml-[0] ml-[444px] md:mt-0 mt-1">
                            <Text
                              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                              size="txtPoppinsSemiBold32"
                            >
                              Explore
                            </Text>
                            <Text
                              className="mt-[15px] text-white-A700_9e text-xl"
                              size="txtPoppinsRegular20WhiteA7009e"
                            >
                              About Us
                            </Text>
                            <Text
                              className="mt-[15px] text-white-A700_9e text-xl"
                              size="txtPoppinsRegular20WhiteA7009e"
                            >
                              Services
                            </Text>
                            <Text
                              className="mt-[26px] text-white-A700_9e text-xl"
                              size="txtPoppinsRegular20WhiteA7009e"
                            >
                              Project
                            </Text>
                            <Text
                              className="mt-3.5 text-white-A700_9e text-xl"
                              size="txtPoppinsRegular20WhiteA7009e"
                            >
                              Contact
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start mb-[46px] ml-20 md:ml-[0]">
                            <Text
                              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                              size="txtPoppinsSemiBold32"
                            >
                              Contact
                            </Text>
                            <Text
                              className="mt-[19px] text-white-A700_9e text-xl"
                              size="txtPoppinsRegular20WhiteA7009e"
                            >
                              Email
                            </Text>
                            <Text
                              className="mt-4 text-white-A700_9e text-xl"
                              size="txtPoppinsRegular20WhiteA7009e"
                            >
                              Phone
                            </Text>
                            <Text
                              className="mt-4 text-white-A700_9e text-xl"
                              size="txtPoppinsRegular20WhiteA7009e"
                            >
                              Address
                            </Text>
                            <Text
                              className="mt-[15px] text-white-A700_9e text-xl"
                              size="txtPoppinsRegular20WhiteA7009e"
                            >
                              Social Media
                            </Text>
                          </div>
                          <div className="flex md:flex-1 flex-col items-start justify-start ml-20 md:ml-[0] w-[32%] md:w-full">
                            <Text
                              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                              size="txtPoppinsSemiBold32"
                            >
                              Newsletter
                            </Text>
                            <Text
                              className="leading-[30.00px] mt-5 text-white-A700_9e text-xl"
                              size="txtPoppinsRegular20WhiteA7009e"
                            >
                              <>
                                Subscribe to our newsletter to stay informed
                                about our latest products, services, and
                                promotions.
                                <br />
                                Feel free to unsubscribe anytime!
                              </>
                            </Text>
                            <Input
                              name="group346"
                              placeholder="Enter Your Email Address ..."
                              className="p-0 placeholder:text-white-A700_87 text-left text-xl w-full"
                              wrapClassName="border border-blue_gray-100_01 border-solid flex mt-[43px] w-full"
                              type="email"
                              suffix={
                                <Img
                                  className="h-8 ml-3 my-auto"
                                  src="images/img_arrow_icon_white_a700.svg"
                                  alt="Arrow Icon"
                                />
                              }
                              shape="round"
                            ></Input>
                          </div>
                        </div>
                        <Line className="bg-white-A700_87 h-px mt-20 w-full" />
                        <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[18px] w-full">
                          <Text
                            className="text-base text-white-A700_87"
                            size="txtPoppinsRegular16WhiteA70087"
                          >
                            Copyright © 2023 for Terraform Technologise. All
                            rights reserved.
                          </Text>
                          <Text
                            className="text-base text-right text-white-A700_87"
                            size="txtPoppinsRegular16WhiteA70087"
                          >
                            Terms & Condition | Privacy Policy
                          </Text>
                        </div>
                      </div>
                    </div>
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

export default ContactPage;
