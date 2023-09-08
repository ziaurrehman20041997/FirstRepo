import React from "react";

import { Img, Input, Line, Text } from "components";

const AboutPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-poppins items-center justify-end mx-auto pt-[62px] w-full">
        <div className="flex flex-col gap-[22px] items-center justify-end w-full">
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1620px] mx-auto md:px-5 w-full">
            <Img
              className="sm:flex-1 h-[65px] md:h-auto object-cover w-[11%] sm:w-full"
              src="images/img_rectangle1.png"
              alt="rectangleTwo"
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
            <div className="bg-gradient  flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1902px] mx-auto p-[25px] md:px-5 w-full">
              <Text
                className="mb-[108px] md:ml-[0] ml-[107px] md:mt-0 mt-[60px] md:text-5xl text-[100px] text-white-A700"
                size="txtSpaceGroteskBold100"
              >
                About Us
              </Text>
              <div className="bg-blue_gray-100 h-[33px] mb-[171px] md:ml-[0] ml-[233px] md:mt-0 mt-[93px] w-[33px]"></div>
              <div className="bg-blue_gray-100 h-[33px] mb-[264px] md:ml-[0] ml-[567px] w-[33px]"></div>
              <div className="bg-blue_gray-100 h-[77px] mb-[53px] md:ml-[0] ml-[222px] md:mt-0 mt-[167px] w-[5%]"></div>
            </div>
            <div className="flex flex-col items-center justify-start max-w-[1620px] mt-[55px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col font-spacegrotesk md:gap-10 gap-[155px] items-start justify-start">
                  <div className="bg-blue_gray-100 h-[33px] w-[33px]"></div>
                  <Text
                    className="md:text-5xl sm:text-[42px] text-[56px] text-white-A700"
                    size="txtSpaceGroteskBold56WhiteA700"
                  >
                    <>
                      We believe that technology
                      <br />
                      can change the world.
                    </>
                  </Text>
                </div>
                <Text
                  className="leading-[30.00px] text-white-A700_9e text-xl"
                  size="txtPoppinsRegular20WhiteA7009e"
                >
                  <>
                    That&#39;s why we&#39;re committed to delivering innovative
                    IT solutions to businesses of all sizes. Our team of
                    experienced professionals is dedicated to helping you
                    achieve your goals and thrive in a rapidly evolving digital
                    landscape.
                    <br />
                    <br />
                    We are an IT company that offers a wide range of services to
                    help businesses succeed in the digital world. Our expertise
                    includes web development, mobile development, cloud
                    computing, cybersecurity, and digital marketing. We provide
                    customized solutions to meet the unique needs of each of our
                    clients’ business from every size and nation.
                  </>
                </Text>
              </div>
            </div>
            <div className="font-poppins sm:h-[2226px] md:h-[3438px] h-[3655px] mt-[200px] md:px-5 relative w-full">
              <div className="absolute bg-blue_gray-100_01 flex flex-col inset-x-[0] items-center justify-start mx-auto p-[149px] md:px-10 sm:px-5 top-[0] w-full">
                <div className="flex flex-col items-center justify-start my-[51px] w-full">
                  <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex md:flex-1 flex-col items-start justify-start w-[22%] md:w-full">
                        <Img
                          className="h-[140px]"
                          src="images/img_vector.svg"
                          alt="vector_Four"
                        />
                        <Text
                          className="mt-[73px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                          size="txtPoppinsSemiBold32Gray900"
                        >
                          expertise
                        </Text>
                        <Text
                          className="leading-[30.00px] mt-2 text-gray-900 text-xl"
                          size="txtPoppinsRegular20Gray900"
                        >
                          <>
                            Our team of experienced experts have the knowledge
                            and expertise
                            <br />
                            to deliver innovative IT solutions
                            <br />
                            that meet your unique needs.
                          </>
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start w-[22%] md:w-full">
                        <Img
                          className="h-[143px]"
                          src="images/img_vector_cyan_200.svg"
                          alt="vector_Five"
                        />
                        <Text
                          className="md:ml-[0] ml-[3px] mt-[67px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                          size="txtPoppinsSemiBold32Gray900"
                        >
                          technology
                        </Text>
                        <Text
                          className="leading-[30.00px] md:ml-[0] ml-[3px] mt-[7px] text-gray-900 text-xl w-full"
                          size="txtPoppinsRegular20Gray900"
                        >
                          We stay up to date with the latest trends and
                          technologies in the IT industry, so you can get the
                          most advanced solutions available.
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start w-[22%] md:w-full">
                        <Img
                          className="h-[140px]"
                          src="images/img_vector.svg"
                          alt="vector_Six"
                        />
                        <Text
                          className="mt-[58px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                          size="txtPoppinsSemiBold32Gray900"
                        >
                          solutions
                        </Text>
                        <Text
                          className="leading-[30.00px] mt-3 text-gray-900 text-xl"
                          size="txtPoppinsRegular20Gray900"
                        >
                          <>
                            We take a personalized approach
                            <br />
                            to every project, working closely with you to
                            understand your business and create solutions.
                          </>
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start w-[22%] md:w-full">
                        <div className="flex flex-col h-[140px] items-center justify-start w-[140px]">
                          <div className="md:h-[139px] h-[140px] relative w-[140px]">
                            <div className="absolute md:h-[139px] h-[140px] inset-[0] justify-center m-auto w-[139px]">
                              <div className="absolute h-[139px] inset-[0] justify-center m-auto w-[139px]">
                                <div className="absolute flex h-[139px] inset-[0] justify-end m-auto w-[139px]">
                                  <div className="md:h-[103px] h-[104px] mt-auto w-[67%]">
                                    <div className="h-[104px] md:h-[62px] m-auto w-full">
                                      <div className="absolute h-[103px] md:h-[62px] inset-[0] justify-center m-auto w-[98%]">
                                        <div className="absolute h-[103px] md:h-[62px] inset-y-[0] left-[0] my-auto w-[69%]">
                                          <Img
                                            className="absolute bottom-[0] h-[57px] inset-x-[0] mx-auto"
                                            src="images/img_group.svg"
                                            alt="group"
                                          />
                                          <Img
                                            className="absolute h-[62px] left-[0] top-[0]"
                                            src="images/img_globe_gray_900.svg"
                                            alt="globe"
                                          />
                                        </div>
                                        <Img
                                          className="absolute h-[62px] right-[0] top-[0] w-[62px]"
                                          src="images/img_globe_gray_900_62x62.svg"
                                          alt="globe_One"
                                        />
                                      </div>
                                      <Img
                                        className="absolute bottom-[0] h-[47px] right-[0]"
                                        src="images/img_group_gray_900.svg"
                                        alt="group_One"
                                      />
                                    </div>
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto pt-0.5 px-0.5 w-full"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group330.svg')",
                                      }}
                                    >
                                      <Img
                                        className="h-[57px] mt-11"
                                        src="images/img_eye_gray_900.svg"
                                        alt="eye"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-[139px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group328.svg')",
                                    }}
                                  >
                                    <Img
                                      className="h-[139px] w-[139px]"
                                      src="images/img_group_gray_900_139x139.svg"
                                      alt="group_Two"
                                    />
                                  </div>
                                </div>
                                <Img
                                  className="absolute h-[139px] inset-y-[0] left-[0] my-auto"
                                  src="images/img_group_gray_900_139x108.svg"
                                  alt="group_Three"
                                />
                              </div>
                              <Img
                                className="absolute bottom-[0] h-[82px] right-[0]"
                                src="images/img_cut_gray_900.svg"
                                alt="cut"
                              />
                            </div>
                            <div
                              className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[78%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group329.svg')",
                              }}
                            >
                              <Img
                                className="h-[139px]"
                                src="images/img_group_1.svg"
                                alt="group_Four"
                              />
                            </div>
                            <div
                              className="absolute bg-cover bg-no-repeat h-[140px] inset-[0] justify-center m-auto md:pl-10 sm:pl-5 pl-[46px] w-[139px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group327.svg')",
                              }}
                            >
                              <Img
                                className="h-[57px] mb-[-0.3px] ml-auto mr-0.5 z-[1]"
                                src="images/img_reply_gray_900.svg"
                                alt="reply"
                              />
                              <div className="h-[104px] md:h-[NaNpx] mb-[undefinedpx] ml-auto w-[67%] z-[1]">
                                <div className="h-[104px] md:h-[62px] m-auto w-full">
                                  <div className="absolute h-[103px] md:h-[62px] inset-[0] justify-center m-auto w-[98%]">
                                    <div className="absolute h-[103px] md:h-[62px] inset-y-[0] left-[0] my-auto w-[71%]">
                                      <Img
                                        className="absolute bottom-[0] h-[62px] inset-x-[0] mx-auto w-[62px]"
                                        src="images/img_eye_gray_900_62x62.svg"
                                        alt="eye_One"
                                      />
                                      <Img
                                        className="absolute h-[47px] left-[0] top-[0]"
                                        src="images/img_signal_gray_900.svg"
                                        alt="signal_One"
                                      />
                                    </div>
                                    <Img
                                      className="absolute h-[57px] right-[0] top-[0]"
                                      src="images/img_map_gray_900.svg"
                                      alt="map"
                                    />
                                  </div>
                                  <Img
                                    className="absolute bottom-[0] h-[62px] right-[0]"
                                    src="images/img_map_gray_900_62x34.svg"
                                    alt="map_One"
                                  />
                                </div>
                                <Img
                                  className="absolute h-[104px] inset-[0] justify-center m-auto"
                                  src="images/img_vector_gray_900.svg"
                                  alt="vector_Seven"
                                />
                              </div>
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[82px] items-center justify-start mb-[undefinedpx] ml-auto mt-auto w-[57%] z-[1]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group331.svg')",
                                }}
                              >
                                <Img
                                  className="h-[82px]"
                                  src="images/img_signal.svg"
                                  alt="signal"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="mt-[58px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                          size="txtPoppinsSemiBold32Gray900"
                        >
                          results
                        </Text>
                        <Text
                          className="leading-[30.00px] mt-3 text-gray-900 text-xl w-full"
                          size="txtPoppinsRegular20Gray900"
                        >
                          <>
                            Our track record speaks for itself – we&#39;ve
                            helped businesses of all sizes and industries
                            achieve their goals with our IT solutions.
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-900 flex md:flex-col flex-row md:gap-10 items-center justify-between p-[105px] md:px-10 sm:px-5 rounded-[50px] w-full">
                      <div className="flex flex-col gap-[13px] items-center justify-start md:mt-0 my-1.5">
                        <Text
                          className="md:text-5xl text-[100px] text-center text-cyan-200"
                          size="txtSpaceGroteskBold100Cyan200"
                        >
                          500+
                        </Text>
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                          size="txtPoppinsSemiBold32"
                        >
                          Successful Projects
                        </Text>
                      </div>
                      <div className="bg-cyan-200 h-3 mb-[92px] md:mt-0 mt-[99px] rounded-[50%] w-3"></div>
                      <div className="flex flex-col gap-[9px] items-center justify-start">
                        <Text
                          className="md:text-5xl text-[100px] text-center text-cyan-200"
                          size="txtSpaceGroteskBold100Cyan200"
                        >
                          98%
                        </Text>
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                          size="txtPoppinsSemiBold32"
                        >
                          Satisfied Clients
                        </Text>
                      </div>
                      <div className="bg-cyan-200 h-3 mb-[92px] md:mt-0 mt-[99px] rounded-[50%] w-3"></div>
                      <div className="flex flex-col gap-2 items-center justify-start">
                        <Text
                          className="md:text-5xl text-[100px] text-center text-cyan-200"
                          size="txtSpaceGroteskBold100Cyan200"
                        >
                          35+
                        </Text>
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                          size="txtPoppinsSemiBold32"
                        >
                          Handled Countries
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="h-[42px] mt-[1519px] mx-auto"
                src="images/img_brandssection.svg"
                alt="brandssection"
              />
              <div className="absolute bottom-[0] font-spacegrotesk md:h-[2026px] h-[2733px] inset-x-[0] mx-auto pb-[707px] w-full">
                <div className="h-[2026px] mx-auto w-full">
                  <Img
                    className="h-[2026px] m-auto object-cover md:w-full"
                    src="images/img_group54.png"
                    alt="wireframevector"
                  />
                  <div className="absolute bottom-[6%] flex flex-col inset-x-[0] justify-start mx-auto w-[85%]">
                    <div className="bg-blue_gray-100 h-[30px] md:ml-[0] ml-[1407px] mr-[183px] w-[30px]"></div>
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
                    <div className="bg-gray-900 border border-solid border-white-A700 flex md:flex-col flex-row font-poppins gap-[22px] items-center justify-center mt-[43px] mx-auto p-[27px] sm:px-5 rounded-[15px] w-1/4 md:w-full">
                      <Text
                        className="ml-3 md:ml-[0] text-base text-white-A700"
                        size="txtPoppinsSemiBold16"
                      >
                        GET FREE CONSULTATION
                      </Text>
                      <Line className="bg-white-A700 h-0.5 mr-3 md:mt-0 my-[11px] w-[29%]" />
                    </div>
                    <div className="bg-blue_gray-100 h-[77px] md:ml-[0] ml-[260px] mr-[1283px] mt-[63px] w-[77px]"></div>
                    <div className="flex flex-col font-poppins items-center justify-start mt-[104px] w-full">
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
                            <div className="flex flex-col items-start justify-start mb-[45px] md:ml-[0] ml-[444px] md:mt-0 mt-1">
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
                                className="mt-[18px] text-white-A700_9e text-xl"
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
                                name="group326"
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
                <Img
                  className="absolute bottom-[41%] h-[95px] left-[8%] object-cover w-[14%]"
                  src="images/img_rectangle1.png"
                  alt="rectangleSeven"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
