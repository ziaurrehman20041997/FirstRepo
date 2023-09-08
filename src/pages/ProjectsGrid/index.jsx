import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const ProjectsGridPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-poppins items-center justify-end mx-auto pt-[62px] w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1620px] mx-auto md:px-5 w-full">
            <Img
              className="sm:flex-1 h-[65px] md:h-auto object-cover w-[11%] sm:w-full"
              src="images/img_rectangle1.png"
              alt="rectangleFour"
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
          <div className="bg-gradient  flex md:flex-col flex-row font-spacegrotesk md:gap-5 items-start justify-start max-w-[1902px] mt-[22px] mx-auto p-3.5 md:px-5 w-full">
            <Text
              className="mb-[110px] md:ml-[0] ml-[118px] md:mt-0 mt-20 md:text-5xl text-[100px] text-white-A700"
              size="txtSpaceGroteskBold100"
            >
              Projects
            </Text>
            <div className="bg-blue_gray-100 h-[33px] mb-[151px] md:ml-[0] ml-[277px] md:mt-0 mt-[135px] w-[33px]"></div>
            <div className="bg-blue_gray-100 h-[33px] mb-[286px] md:ml-[0] ml-[634px] w-[33px]"></div>
            <div className="bg-blue_gray-100 h-[77px] mb-[74px] md:mt-0 mt-[168px] rotate-[180deg] w-[5%]"></div>
          </div>
          <div className="font-spacegrotesk sm:h-[2861px] h-[3955px] md:h-[4453px] mt-32 md:px-5 relative w-full">
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[85%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <List
                  className="flex flex-col gap-64 w-[33%]"
                  orientation="vertical"
                >
                  <div className="bg-blue_gray-100 flex flex-col items-center justify-start mr-2.5 my-0 pt-[318px] rounded-[50px] w-[99%] md:w-full">
                    <div className="bg-gradient  flex flex-col gap-7 items-start justify-end p-[34px] sm:px-5 rounded-tl-[50px] rounded-tr-[50px] w-full">
                      <Text
                        className="md:ml-[0] ml-[5px] mt-[135px] text-white-A700 text-xl"
                        size="txtPoppinsRegular20"
                      >
                        2 0 2 2
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[5px] md:text-5xl sm:text-[42px] text-[56px] text-white-A700"
                        size="txtSpaceGroteskBold56WhiteA700"
                      >
                        Uwang Corp.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-blue_gray-100 flex flex-col items-center justify-end ml-2.5 my-0 pt-[318px] rounded-[50px] w-[99%] md:w-full">
                    <div className="bg-gradient  flex flex-col gap-7 items-start justify-end p-[34px] sm:px-5 rounded-tl-[50px] rounded-tr-[50px] w-full">
                      <Text
                        className="md:ml-[0] ml-[5px] mt-[135px] text-white-A700 text-xl"
                        size="txtPoppinsRegular20"
                      >
                        2 0 2 2
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[5px] md:text-5xl sm:text-[42px] text-[56px] text-white-A700"
                        size="txtSpaceGroteskBold56WhiteA700"
                      >
                        Digital.Co
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="bg-cyan-200 flex md:flex-1 flex-col items-center justify-start mb-[477px] md:mt-0 mt-[432px] p-[35px] sm:px-5 rounded-[50px] w-[33%] md:w-full">
                  <Text
                    className="mt-[29px] text-center text-gray-900 text-xl"
                    size="txtPoppinsRegular20Gray900"
                  >
                    C Y B E R S E C U R I T Y
                  </Text>
                  <Img
                    className="h-[86px] mt-[43px] w-[86px]"
                    src="images/img_companylogo.svg"
                    alt="companylogo"
                  />
                  <Text
                    className="mt-[43px] md:text-5xl sm:text-[42px] text-[56px] text-center text-gray-900"
                    size="txtSpaceGroteskBold56"
                  >
                    <>
                      Mika
                      <br />
                      Medika
                    </>
                  </Text>
                  <Text
                    className="leading-[26.00px] mt-4 text-base text-center text-gray-900 w-full"
                    size="txtPoppinsRegular16Gray900"
                  >
                    Mika Medika Healthcare, a large hospital network, was
                    concerned about the security of their patient data.
                  </Text>
                  <Button
                    className="cursor-pointer font-poppins font-semibold mb-[29px] min-w-[213px] mt-12 text-base text-center"
                    shape="round"
                    color="gray_900"
                  >
                    READ MORE
                  </Button>
                </div>
                <List
                  className="flex flex-col gap-64 w-[33%]"
                  orientation="vertical"
                >
                  <div className="bg-blue_gray-100 flex flex-col items-center justify-start my-0 pt-[318px] rounded-[50px] w-full">
                    <div className="bg-gradient  flex flex-col gap-7 items-start justify-end p-[34px] sm:px-5 rounded-tl-[50px] rounded-tr-[50px] w-full">
                      <Text
                        className="md:ml-[0] ml-[5px] mt-[135px] text-white-A700 text-xl"
                        size="txtPoppinsRegular20"
                      >
                        2 0 2 2
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[5px] md:text-5xl sm:text-[42px] text-[56px] text-white-A700"
                        size="txtSpaceGroteskBold56WhiteA700"
                      >
                        Markland Corp.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-blue_gray-100 flex flex-col items-center justify-end my-0 pt-[318px] rounded-[50px] w-full">
                    <div className="bg-gradient  flex flex-col gap-7 items-start justify-end p-[34px] sm:px-5 rounded-tl-[50px] rounded-tr-[50px] w-full">
                      <Text
                        className="md:ml-[0] ml-[5px] mt-[135px] text-white-A700 text-xl"
                        size="txtPoppinsRegular20"
                      >
                        2 0 2 2
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[5px] md:text-5xl sm:text-[42px] text-[56px] text-white-A700"
                        size="txtSpaceGroteskBold56WhiteA700"
                      >
                        Buddy & Co.
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <Img
              className="h-[42px] mt-[1733px] mx-auto"
              src="images/img_brandssection.svg"
              alt="brandssection"
            />
            <footer className="absolute bottom-[0] flex inset-x-[0] items-center justify-center mx-auto w-full">
              <div
                className="bg-cover bg-no-repeat sm:h-[1916px] h-[1958px] md:h-[2736px] mb-[775px] p-[101px] md:px-10 sm:px-5 relative w-full"
                style={{ backgroundImage: "url('images/img_group54.png')" }}
              >
                <div className="absolute bottom-[5%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[85%]">
                  <ul className="flex flex-col justify-start w-full common-column-list">
                    <li>
                      <a href="javascript:">
                        <div className="bg-blue_gray-100 h-[30px] md:ml-[0] ml-[1395px] mr-[195px] w-[30px]"></div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="md:ml-[0] ml-[349px] mt-[31px] md:text-5xl text-[100px] text-white-A700"
                      >
                        <Text size="txtSpaceGroteskBold100">
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
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex md:flex-col flex-row gap-[27px] items-center justify-center md:ml-[0] ml-[424px]">
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
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="bg-gray-900 border border-solid border-white-A700 flex md:flex-col flex-row font-poppins gap-[22px] items-center justify-center md:ml-[0] ml-[598px] mr-[623px] mt-[42px] p-[27px] sm:px-5 rounded-[15px]">
                          <Text
                            className="ml-3 md:ml-[0] text-base text-white-A700"
                            size="txtPoppinsSemiBold16"
                          >
                            GET FREE CONSULTATION
                          </Text>
                          <Line className="bg-white-A700 h-0.5 mr-3 md:mt-0 my-[11px] w-[29%]" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="bg-blue_gray-100 h-[77px] md:ml-[0] ml-[248px] mr-[1295px] mt-[63px] w-[77px]"></div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-col font-poppins items-center justify-start mt-[58px]">
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
                                <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start mb-[45px] md:ml-[0] ml-[444px] md:mt-0 mt-1 w-[8%] md:w-full">
                                  <Text
                                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                                    size="txtPoppinsSemiBold32"
                                  >
                                    Explore
                                  </Text>
                                  <ul className="flex flex-col items-start justify-start md:w-full common-column-list">
                                    <li>
                                      <a
                                        href="javascript:"
                                        className="text-white-A700_9e text-xl"
                                      >
                                        <Text size="txtPoppinsRegular20WhiteA7009e">
                                          About Us
                                        </Text>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="javascript:"
                                        className="mt-[15px] text-white-A700_9e text-xl"
                                      >
                                        <Text size="txtPoppinsRegular20WhiteA7009e">
                                          Services
                                        </Text>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="javascript:"
                                        className="mt-[18px] text-white-A700_9e text-xl"
                                      >
                                        <Text size="txtPoppinsRegular20WhiteA7009e">
                                          Project
                                        </Text>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="javascript:"
                                        className="mt-3.5 text-white-A700_9e text-xl"
                                      >
                                        <Text size="txtPoppinsRegular20WhiteA7009e">
                                          Contact
                                        </Text>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="flex md:flex-1 flex-col gap-[19px] items-center justify-start mb-[46px] ml-20 md:ml-[0] w-[9%] md:w-full">
                                  <Text
                                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                                    size="txtPoppinsSemiBold32"
                                  >
                                    Contact
                                  </Text>
                                  <ul className="flex flex-col gap-4 items-start justify-start md:w-full common-column-list">
                                    <li>
                                      <a
                                        href="javascript:"
                                        className="text-white-A700_9e text-xl"
                                      >
                                        <Text size="txtPoppinsRegular20WhiteA7009e">
                                          Email
                                        </Text>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="javascript:"
                                        className="text-white-A700_9e text-xl"
                                      >
                                        <Text size="txtPoppinsRegular20WhiteA7009e">
                                          Phone
                                        </Text>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="javascript:"
                                        className="text-white-A700_9e text-xl"
                                      >
                                        <Text size="txtPoppinsRegular20WhiteA7009e">
                                          Address
                                        </Text>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="javascript:"
                                        className="text-white-A700_9e text-xl"
                                      >
                                        <Text size="txtPoppinsRegular20WhiteA7009e">
                                          Social Media
                                        </Text>
                                      </a>
                                    </li>
                                  </ul>
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
                                      Subscribe to our newsletter to stay
                                      informed about our latest products,
                                      services, and promotions.
                                      <br />
                                      Feel free to unsubscribe anytime!
                                    </>
                                  </Text>
                                  <Input
                                    name="group336"
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
                                  Copyright © 2023 for Terraform Technologise.
                                  All rights reserved.
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
                      </a>
                    </li>
                  </ul>
                </div>
                <Img
                  className="absolute bottom-[20%] h-[95px] left-[8%] object-cover w-[14%]"
                  src="images/img_rectangle1.png"
                  alt="rectangleSix"
                />
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsGridPage;
