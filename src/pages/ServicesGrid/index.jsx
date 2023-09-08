import React from "react";

import { Img, Input, Line, List, Text } from "components";

const ServicesGridPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-poppins items-center justify-end mx-auto pt-[62px] w-full">
        <div className="flex flex-col gap-[45px] items-center justify-end w-full">
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1620px] mx-auto md:px-5 w-full">
            <Img
              className="sm:flex-1 h-[65px] md:h-auto object-cover w-[11%] sm:w-full"
              src="images/img_rectangle1.png"
              alt="rectangleThree"
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
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col justify-start w-full">
                <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[1144px] md:px-5 w-[33%] md:w-full">
                  <div className="bg-blue_gray-100 h-[33px] mt-2 w-[33px]"></div>
                  <div className="bg-blue_gray-100 h-4 mb-[25px] w-4"></div>
                </div>
                <div className="bg-gradient  flex md:flex-col flex-row md:gap-5 items-center justify-start p-[21px] sm:px-5 w-full">
                  <Text
                    className="mb-[113px] md:ml-[0] ml-[129px] md:text-5xl text-[100px] text-white-A700"
                    size="txtSpaceGroteskBold100"
                  >
                    Services
                  </Text>
                  <div className="bg-blue_gray-100 h-[33px] mb-40 md:ml-[0] ml-[141px] md:mt-0 mt-12 md:px-5 w-[33px]"></div>
                  <div className="bg-blue_gray-100 h-[77px] md:ml-[0] ml-[793px] md:mt-0 my-[82px] md:px-5 rotate-[180deg] w-[5%]"></div>
                </div>
              </div>
            </div>
            <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1620px] min-h-[auto] mx-auto md:px-5 w-full">
              <div className="bg-cyan-200 bg-gradient1  hover:border border hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-14 md:px-10 sm:px-5 rounded-[25px] hover:w-full w-full hover:white_A700_33_white_A700_00_border2 white_A700_33_white_A700_00_border3">
                <div className="flex flex-col items-start justify-start mb-2 mt-3 w-[99%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Img
                      className="h-24 w-24"
                      src="images/img_webicon.svg"
                      alt="webicon"
                    />
                    <Img
                      className="h-20 w-20"
                      src="images/img_arrow_icon_white_a700.svg"
                      alt="arrowicon"
                    />
                  </div>
                  <Text
                    className="mt-[136px] md:text-5xl sm:text-[42px] text-[56px] text-white-A700"
                    size="txtSpaceGroteskBold56WhiteA700"
                  >
                    <>
                      Web
                      <br />
                      Development
                    </>
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-4 text-white-A700 text-xl w-full"
                    size="txtPoppinsRegular20"
                  >
                    Create websites that are both visually appealing and
                    functional for users.
                  </Text>
                </div>
              </div>
              <div className="bg-cyan-200 bg-gradient1  hover:border border hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-14 md:px-10 sm:px-5 rounded-[25px] hover:w-full w-full hover:white_A700_33_white_A700_00_border4 white_A700_33_white_A700_00_border5">
                <div className="flex flex-col items-start justify-start my-2 w-[99%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Img
                      className="h-[100px]"
                      src="images/img_mobile.svg"
                      alt="mobile"
                    />
                    <Img
                      className="h-20 w-20"
                      src="images/img_arrow_icon_white_a700.svg"
                      alt="arrowicon"
                    />
                  </div>
                  <Text
                    className="mt-[136px] md:text-5xl sm:text-[42px] text-[56px] text-white-A700"
                    size="txtSpaceGroteskBold56WhiteA700"
                  >
                    <>
                      Mobile
                      <br />
                      Development
                    </>
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-4 text-white-A700 text-xl w-full"
                    size="txtPoppinsRegular20"
                  >
                    Create or enhance mobile applications, ensuring optimized
                    user experience.
                  </Text>
                </div>
              </div>
              <div className="bg-cyan-200 bg-gradient1  hover:border border hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-14 md:px-10 sm:px-5 rounded-[25px] hover:w-full w-full hover:white_A700_33_white_A700_00_border6 white_A700_33_white_A700_00_border7">
                <div className="flex flex-col items-start justify-start my-2 w-[99%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Img
                      className="h-[100px] w-[100px]"
                      src="images/img_securityicon.svg"
                      alt="securityicon"
                    />
                    <Img
                      className="h-20 w-20"
                      src="images/img_arrow_icon_white_a700.svg"
                      alt="arrowicon"
                    />
                  </div>
                  <Text
                    className="mt-[136px] md:text-5xl sm:text-[42px] text-[56px] text-white-A700"
                    size="txtSpaceGroteskBold56WhiteA700"
                  >
                    <>
                      Cyber
                      <br />
                      Security
                    </>
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-4 text-white-A700 text-xl w-full"
                    size="txtPoppinsRegular20"
                  >
                    Provides advanced protection for your data and systems
                    against threats.
                  </Text>
                </div>
              </div>
              <div className="bg-cyan-200 bg-gradient1  hover:border border hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-14 md:px-10 sm:px-5 rounded-[25px] hover:w-full w-full hover:white_A700_33_white_A700_00_border8 white_A700_33_white_A700_00_border9">
                <div className="flex flex-col items-start justify-start my-2 w-[99%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Img
                      className="h-[100px] w-[100px]"
                      src="images/img_marketingicon.svg"
                      alt="marketingicon"
                    />
                    <Img
                      className="h-20 w-20"
                      src="images/img_arrow_icon_white_a700.svg"
                      alt="arrowicon"
                    />
                  </div>
                  <Text
                    className="mt-[136px] md:text-5xl sm:text-[42px] text-[56px] text-white-A700"
                    size="txtSpaceGroteskBold56WhiteA700"
                  >
                    <>
                      Digital
                      <br />
                      Marketing
                    </>
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-4 text-white-A700 text-xl w-full"
                    size="txtPoppinsRegular20"
                  >
                    Create solutions to help businesses achieve their digital
                    marketing goals.
                  </Text>
                </div>
              </div>
              <div className="bg-cyan-200 hover:border hover:border-solid hover:cursor-pointer flex flex-1 flex-col items-end justify-start p-[27px] sm:px-5 rounded-[25px] hover:w-full w-full hover:white_A700_33_white_A700_00_border10">
                <div className="flex flex-col items-start justify-start mb-[37px] mt-[17px] w-[93%] md:w-full">
                  <div className="flex flex-row items-end justify-between w-full">
                    <Img
                      className="h-[110px] mt-4 w-[110px]"
                      src="images/img_cloudicon.svg"
                      alt="cloudicon"
                    />
                    <Img
                      className="h-[123px] mb-[3px] w-[123px]"
                      src="images/img_arrowicon_white_a700_1.svg"
                      alt="arrowicon"
                    />
                  </div>
                  <Text
                    className="mt-[130px] md:text-5xl sm:text-[42px] text-[56px] text-white-A700"
                    size="txtSpaceGroteskBold56WhiteA700"
                  >
                    <>
                      Cloud
                      <br />
                      Computing
                    </>
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-4 text-white-A700 text-xl w-[94%] sm:w-full"
                    size="txtPoppinsRegular20"
                  >
                    Provides access to scalable computing resources to optimize
                    their operations.
                  </Text>
                </div>
              </div>
              <div className="bg-cyan-200 bg-gradient1  hover:border border hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-14 md:px-10 sm:px-5 rounded-[25px] hover:w-full w-full hover:white_A700_33_white_A700_00_border11 white_A700_33_white_A700_00_border12">
                <div className="flex flex-col items-start justify-start my-2 w-[99%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Img
                      className="h-[100px] w-[100px]"
                      src="images/img_cut_white_a700.svg"
                      alt="cut"
                    />
                    <Img
                      className="h-20 w-20"
                      src="images/img_arrow_icon_white_a700.svg"
                      alt="arrowicon"
                    />
                  </div>
                  <Text
                    className="mt-[136px] md:text-5xl sm:text-[42px] text-[56px] text-white-A700"
                    size="txtSpaceGroteskBold56WhiteA700"
                  >
                    <>
                      Software
                      <br />
                      Development
                    </>
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-4 text-white-A700 text-xl w-full"
                    size="txtPoppinsRegular20"
                  >
                    Provides customized solutions to create and maintain
                    software applications.
                  </Text>
                </div>
              </div>
              <div className="bg-cyan-200 bg-gradient1  hover:border border hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-center p-14 md:px-10 sm:px-5 rounded-[25px] hover:w-full w-full hover:white_A700_33_white_A700_00_border13 white_A700_33_white_A700_00_border14">
                <div className="flex flex-col items-start justify-start my-2 w-[99%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Img
                      className="h-[100px] w-[100px]"
                      src="images/img_rocketicon.svg"
                      alt="rocketicon"
                    />
                    <Img
                      className="h-20 w-20"
                      src="images/img_arrow_icon_white_a700.svg"
                      alt="arrowicon"
                    />
                  </div>
                  <Text
                    className="mt-[136px] md:text-5xl sm:text-[42px] text-[56px] text-white-A700"
                    size="txtSpaceGroteskBold56WhiteA700"
                  >
                    <>
                      IT Project
                      <br />
                      Management
                    </>
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-4 text-white-A700 text-xl w-full"
                    size="txtPoppinsRegular20"
                  >
                    Provides businesses with expert guidance and support for IT
                    projects.
                  </Text>
                </div>
              </div>
              <div className="bg-cyan-200 bg-gradient1  hover:border border hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-center p-14 md:px-10 sm:px-5 rounded-[25px] hover:w-full w-full hover:white_A700_33_white_A700_00_border15 white_A700_33_white_A700_00_border16">
                <div className="flex flex-col items-start justify-start my-2 w-[99%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Img
                      className="h-[100px] w-[100px]"
                      src="images/img_dataanalysisicon.svg"
                      alt="dataanalysisico"
                    />
                    <Img
                      className="h-20 w-20"
                      src="images/img_arrow_icon_white_a700.svg"
                      alt="arrowicon"
                    />
                  </div>
                  <Text
                    className="mt-[136px] md:text-5xl sm:text-[42px] text-[56px] text-white-A700"
                    size="txtSpaceGroteskBold56WhiteA700"
                  >
                    <>
                      Data
                      <br />
                      Analysis
                    </>
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-4 text-white-A700 text-xl w-full"
                    size="txtPoppinsRegular20"
                  >
                    Provide data analysis for varied categories to help client
                    businesses.
                  </Text>
                </div>
              </div>
              <div className="bg-cyan-200 bg-gradient1  hover:border border hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-center p-14 md:px-10 sm:px-5 rounded-[25px] hover:w-full w-full hover:white_A700_33_white_A700_00_border17 white_A700_33_white_A700_00_border18">
                <div className="flex flex-col items-start justify-start my-2 w-[99%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Img
                      className="h-[100px] w-[100px]"
                      src="images/img_networkicon.svg"
                      alt="networkicon"
                    />
                    <Img
                      className="h-20 w-20"
                      src="images/img_arrow_icon_white_a700.svg"
                      alt="arrowicon"
                    />
                  </div>
                  <Text
                    className="mt-[136px] md:text-5xl sm:text-[42px] text-[56px] text-white-A700"
                    size="txtSpaceGroteskBold56WhiteA700"
                  >
                    <>
                      Network
                      <br />
                      Management
                    </>
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-4 text-white-A700 text-xl w-full"
                    size="txtPoppinsRegular20"
                  >
                    Provide management of network infrastructure design for
                    clients.
                  </Text>
                </div>
              </div>
            </div>
            <div className="sm:h-[4416px] md:h-[5118px] h-[6040px] mt-[191px] md:px-5 relative w-full">
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[85%]">
                <div className="flex flex-col md:gap-10 gap-[78px] justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[498px] w-[61%] md:w-full">
                    <Text
                      className="mb-8 md:text-5xl text-[100px] text-center text-white-A700"
                      size="txtSpaceGroteskBold100"
                    >
                      How It Works
                    </Text>
                    <div className="bg-blue_gray-100 h-[42px] md:mt-0 mt-[118px] w-[42px]"></div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col md:gap-10 gap-[1168px] justify-start w-[22%] md:w-full">
                      <div className="bg-blue_gray-100 h-[111px] ml-52 md:ml-[0] mr-[33px] w-[111px]"></div>
                      <div className="flex flex-col md:gap-10 gap-[1065px] items-start justify-start w-full">
                        <div className="bg-blue_gray-100 h-[67px] w-[67px]"></div>
                        <div className="bg-blue_gray-100 h-[298px] rotate-[180deg] w-full"></div>
                      </div>
                    </div>
                    <div className="h-[3004px] relative w-[26%] md:w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <List
                            className="flex flex-col gap-[404px] items-center w-full"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                              <div className="bg-gradient1  border border-solid flex flex-col items-center justify-start p-[45px] md:px-10 sm:px-5 rounded-[15px] w-[38%] md:w-full white_A700_33_white_A700_00_border19">
                                <Img
                                  className="h-16 w-16"
                                  src="images/img_cut_white_a700_64x64.svg"
                                  alt="cut"
                                />
                              </div>
                              <Text
                                className="mt-[72px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                                size="txtPoppinsSemiBold32"
                              >
                                01
                              </Text>
                              <Text
                                className="mt-[33px] md:text-5xl sm:text-[42px] text-[56px] text-center text-cyan-200"
                                size="txtSpaceGroteskBold56Cyan200"
                              >
                                Discovery
                              </Text>
                              <Text
                                className="leading-[30.00px] mt-[42px] text-center text-white-A700_9e text-xl"
                                size="txtPoppinsRegular20WhiteA7009e"
                              >
                                <>
                                  We&#39;ll conduct a thorough analysis of your
                                  operations, market, and competition to
                                  <br />
                                  identify the best solutions for you.
                                </>
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                              <div className="bg-gradient1  border border-solid flex flex-col items-center justify-start p-[45px] md:px-10 sm:px-5 rounded-[15px] w-[38%] md:w-full white_A700_33_white_A700_00_border20">
                                <Img
                                  className="h-16 w-16"
                                  src="images/img_menu.svg"
                                  alt="menu"
                                />
                              </div>
                              <Text
                                className="mt-[72px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                                size="txtPoppinsSemiBold32"
                              >
                                02
                              </Text>
                              <Text
                                className="mt-[33px] md:text-5xl sm:text-[42px] text-[56px] text-center text-cyan-200"
                                size="txtSpaceGroteskBold56Cyan200"
                              >
                                Planning
                              </Text>
                              <Text
                                className="leading-[30.00px] mt-[42px] text-center text-white-A700_9e text-xl"
                                size="txtPoppinsRegular20WhiteA7009e"
                              >
                                <>
                                  Once we have a clear understanding,
                                  <br />
                                  we develop a customized plan for the services
                                  and solutions we provide.
                                </>
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                              <div className="bg-gradient1  border border-solid flex flex-col items-center justify-start p-[45px] md:px-10 sm:px-5 rounded-[15px] w-[38%] md:w-full white_A700_33_white_A700_00_border21">
                                <Img
                                  className="h-16 w-16"
                                  src="images/img_cut_white_a700.svg"
                                  alt="cut"
                                />
                              </div>
                              <Text
                                className="mt-[72px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                                size="txtPoppinsSemiBold32"
                              >
                                03
                              </Text>
                              <Text
                                className="mt-[33px] md:text-5xl sm:text-[42px] text-[56px] text-center text-cyan-200"
                                size="txtSpaceGroteskBold56Cyan200"
                              >
                                Development
                              </Text>
                              <Text
                                className="leading-[30.00px] mt-[42px] text-center text-white-A700_9e text-xl w-full"
                                size="txtPoppinsRegular20WhiteA7009e"
                              >
                                We begin the design and development process,
                                creating custom solutions for your specific
                                business needs.
                              </Text>
                            </div>
                          </List>
                        </div>
                      </div>
                      <Img
                        className="absolute h-[3004px] inset-[0] justify-center m-auto"
                        src="images/img_lines.svg"
                        alt="lines"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col md:gap-10 gap-[808px] justify-start w-[22%] md:w-full">
                      <div className="bg-blue_gray-100 h-[298px] w-full"></div>
                      <div className="bg-blue_gray-100 h-[111px] md:ml-[0] ml-[88px] mr-[153px] w-[111px]"></div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[595px] w-[64%] md:w-full">
                    <div className="flex flex-col items-center justify-start">
                      <div className="bg-gradient1  border border-solid flex flex-col items-center justify-start p-[41px] md:px-10 sm:px-5 rounded-[15px] w-[37%] md:w-full white_A700_33_white_A700_00_border22">
                        <Img
                          className="h-[72px] w-[72px]"
                          src="images/img_confirmicon.svg"
                          alt="confirmicon"
                        />
                      </div>
                      <Text
                        className="mt-[72px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                        size="txtPoppinsSemiBold32"
                      >
                        04
                      </Text>
                      <Text
                        className="mt-[33px] md:text-5xl sm:text-[42px] text-[56px] text-center text-cyan-200"
                        size="txtSpaceGroteskBold56Cyan200"
                      >
                        Implementation
                      </Text>
                      <Text
                        className="leading-[30.00px] mt-[42px] text-center text-white-A700_9e text-xl w-[98%] sm:w-full"
                        size="txtPoppinsRegular20WhiteA7009e"
                      >
                        We implement our solution into your business operations
                        and integrate them with other systems and platforms.
                      </Text>
                    </div>
                    <div className="bg-blue_gray-100 h-[67px] mb-[326px] sm:mt-0 mt-[123px] w-[67px]"></div>
                  </div>
                </div>
              </div>
              <footer className="absolute bottom-[0] flex inset-x-[0] items-center justify-center mx-auto w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[1990px] items-center justify-center mb-[743px] p-[78px] md:px-10 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group54.png')" }}
                >
                  <ul className="flex flex-col items-center justify-center mt-[668px] w-[92%] md:w-full common-column-list">
                    <li>
                      <a href="javascript:">
                        <div className="bg-blue_gray-100 h-[30px] md:ml-[0] ml-[1381px] mr-[209px] w-[30px]"></div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[19px] md:text-5xl text-[100px] text-white-A700"
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
                        <div className="flex md:flex-col flex-row gap-[27px] items-center justify-center">
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
                        <div className="bg-gray-900 border border-solid border-white-A700 flex md:flex-col flex-row font-poppins gap-[22px] items-center justify-center mt-[42px] p-[27px] sm:px-5 rounded-[15px]">
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
                        <div className="bg-blue_gray-100 h-[77px] md:ml-[0] ml-[260px] mr-[1283px] mt-[63px] w-[77px]"></div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-col font-poppins items-center justify-start mt-[113px]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                              <div className="flex md:flex-1 flex-col md:gap-10 gap-[115px] justify-start md:mt-0 mt-[107px] w-[18%] md:w-full">
                                <Img
                                  className="h-[95px] md:h-auto md:ml-[0] ml-[22px] object-cover w-[93%]"
                                  src="images/img_rectangle1.png"
                                  alt="rectangleSix"
                                />
                                <div className="flex flex-row gap-16 items-center justify-start mr-[21px] w-[93%] md:w-full">
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
                              </div>
                              <div className="flex md:flex-1 flex-col gap-[51px] items-end justify-start w-[57%] md:w-full">
                                <div className="bg-blue_gray-100 h-[30px] w-[30px]"></div>
                                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                                  <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start md:mt-0 mt-1 w-[13%] md:w-full">
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
                                  <div className="flex md:flex-1 flex-col gap-[19px] items-center justify-start w-[15%] md:w-full">
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
                                  <div className="flex md:flex-1 flex-col items-start justify-start w-[56%] md:w-full">
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
                                      name="group368"
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
                      </a>
                    </li>
                  </ul>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesGridPage;
