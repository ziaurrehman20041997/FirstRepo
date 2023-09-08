import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, Line, List, Text } from "components";

const Home1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-poppins items-center justify-end mx-auto pt-10 w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="sm:h-[1264px] h-[1941px] md:h-[2070px] mx-auto w-full">
              <div className="flex flex-col h-full justify-start m-auto w-full">
                <div className="bg-blue_gray-100 h-[34px] md:ml-[0] ml-[1449px] mr-[438px] w-[33px]"></div>
                <div className="sm:h-[1230px] h-[1904px] md:h-[2036px] mt-[3px] relative w-full">
                  <Img
                    className="h-[843px] mt-96 mx-auto object-cover md:w-full"
                    src="images/img_gradient.png"
                    alt="gradient"
                  />
                  <div
                    className="absolute bg-cover bg-no-repeat h-[1904px] md:h-[2033px] sm:h-[934px] inset-[0] justify-center m-auto p-[114px] md:px-10 sm:px-5 w-full"
                    style={{
                      backgroundImage: "url('images/img_group352.png')",
                    }}
                  >
                    <div className="absolute md:h-[285px] h-[507px] inset-x-[0] mx-auto top-[6%] w-3/5 md:w-full">
                      <div className="absolute md:h-[285px] h-[480px] inset-x-[0] mx-auto top-[0] w-full">
                        <Text
                          className="absolute inset-x-[0] mx-auto md:text-5xl text-[200px] text-center text-white-A700 top-[0] w-max"
                          size="txtSpaceGroteskBold200"
                        >
                          <span className="text-cyan-200 font-spacegrotesk font-bold">
                            YOU
                          </span>
                          <span className="text-cyan-200 font-spacegrotesk font-bold">
                            R BEST
                          </span>
                        </Text>
                        <Text
                          className="absolute bottom-[4%] right-[0] md:text-5xl text-[200px] text-white-A700"
                          size="txtSpaceGroteskBold200"
                        >
                          PARTNERS
                        </Text>
                        <Text
                          className="absolute bottom-[0] italic left-[0] md:text-5xl text-[190px] text-white-A700"
                          size="txtPoppinsLightItalic190"
                        >
                          IT
                        </Text>
                      </div>
                      <Text
                        className="absolute bottom-[0] inset-x-[0] leading-[30.00px] mx-auto text-center text-white-A700 text-xl"
                        size="txtPoppinsRegular20"
                      >
                        <>
                          From custom software development to cybersecurity, our
                          team of experts is dedicated
                          <br />
                          to delivering solutions that are tailored to your
                          unique needs.
                        </>
                      </Text>
                    </div>
                    <div className="absolute bg-blue_gray-100 h-[129px] right-[7%] top-[29%] w-[8%]"></div>
                    <div className="absolute bg-blue_gray-100 h-[66px] left-[10%] top-[16%] w-[65px]"></div>
                    <div className="absolute bottom-[13%] flex flex-col md:gap-10 gap-[163px] inset-x-[0] items-center justify-start mx-auto w-[83%]">
                      <div className="bg-gray-900 border border-solid border-white-A700 flex flex-row gap-7 items-center justify-center p-[27px] sm:px-5 rounded-[15px] w-[22%] md:w-full">
                        <Text
                          className="common-pointer ml-5 text-base text-white-A700"
                          size="txtPoppinsSemiBold16"
                          onClick={() => navigate("/projectsgrid")}
                        >
                          EXPLORE NOW
                        </Text>
                        <Line className="bg-white-A700 h-0.5 mr-5 my-[11px] w-[36%]" />
                      </div>
                      <div className="flex flex-col font-spacegrotesk items-center justify-start w-full">
                        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start w-full">
                          <div className="md:h-[220px] h-[237px] relative w-[36%] sm:w-full">
                            <div className="absolute bg-blue_gray-100 h-[34px] right-[44%] top-[0] w-[34px]"></div>
                            <Text
                              className="absolute bottom-[0] inset-x-[0] leading-[110.00px] mx-auto md:text-5xl text-[100px] text-white-A700"
                              size="txtSpaceGroteskBold100"
                            >
                              <>
                                Why <br />
                                Choose Us?
                              </>
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-center justify-between w-full">
                            <div className="flex md:flex-1 flex-col items-start justify-start w-[22%] md:w-full">
                              <Img
                                className="h-[140px]"
                                src="images/img_vector.svg"
                                alt="vector_Four"
                              />
                              <Text
                                className="mt-[73px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                                size="txtPoppinsSemiBold32"
                              >
                                expertise
                              </Text>
                              <Text
                                className="leading-[30.00px] mt-2 text-white-A700 text-xl"
                                size="txtPoppinsRegular20"
                              >
                                <>
                                  Our team of experienced experts have the
                                  knowledge and expertise
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
                                className="md:ml-[0] ml-[3px] mt-[67px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                                size="txtPoppinsSemiBold32"
                              >
                                technology
                              </Text>
                              <Text
                                className="leading-[30.00px] md:ml-[0] ml-[3px] mt-[7px] text-white-A700 text-xl w-full"
                                size="txtPoppinsRegular20"
                              >
                                We stay up to date with the latest trends and
                                technologies in the IT industry, so you can get
                                the most advanced solutions available.
                              </Text>
                            </div>
                            <div className="flex md:flex-1 flex-col items-start justify-start w-[22%] md:w-full">
                              <Img
                                className="h-[140px]"
                                src="images/img_vector.svg"
                                alt="vector_Six"
                              />
                              <Text
                                className="mt-[58px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                                size="txtPoppinsSemiBold32"
                              >
                                solutions
                              </Text>
                              <Text
                                className="leading-[30.00px] mt-3 text-white-A700 text-xl"
                                size="txtPoppinsRegular20"
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
                                        <div
                                          className="bg-cover bg-no-repeat flex flex-col h-full items-start justify-end mt-auto pt-0.5 px-0.5 w-[67%]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group356.svg')",
                                          }}
                                        >
                                          <Img
                                            className="h-[57px] mt-11"
                                            src="images/img_globe.svg"
                                            alt="globe"
                                          />
                                        </div>
                                        <div
                                          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-[139px]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group354.svg')",
                                          }}
                                        >
                                          <Img
                                            className="h-[139px] w-[139px]"
                                            src="images/img_group_cyan_200.svg"
                                            alt="group"
                                          />
                                        </div>
                                      </div>
                                      <Img
                                        className="absolute h-[139px] inset-y-[0] left-[0] my-auto"
                                        src="images/img_group_cyan_200_139x108.svg"
                                        alt="group_One"
                                      />
                                    </div>
                                    <Img
                                      className="absolute bottom-[0] h-[82px] right-[0]"
                                      src="images/img_globe_cyan_200.svg"
                                      alt="globe_One"
                                    />
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[78%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group355.svg')",
                                    }}
                                  >
                                    <Img
                                      className="h-[139px]"
                                      src="images/img_group_139x108.svg"
                                      alt="group_Two"
                                    />
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat h-[140px] inset-[0] justify-center m-auto md:pl-10 sm:pl-5 pl-[46px] w-[139px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group353.svg')",
                                    }}
                                  >
                                    <Img
                                      className="h-[57px] mb-[-0.3px] ml-auto mr-0.5 z-[1]"
                                      src="images/img_map.svg"
                                      alt="map"
                                    />
                                    <div className="h-[104px] md:h-[NaNpx] mb-[undefinedpx] ml-auto w-[67%] z-[1]">
                                      <div className="h-[104px] md:h-[62px] m-auto w-full">
                                        <div className="absolute h-[103px] md:h-[62px] inset-[0] justify-center m-auto w-[98%]">
                                          <div className="absolute h-[103px] md:h-[62px] inset-y-[0] left-[0] my-auto w-[71%]">
                                            <Img
                                              className="absolute bottom-[0] h-[62px] inset-x-[0] mx-auto w-[62px]"
                                              src="images/img_eye.svg"
                                              alt="eye"
                                            />
                                            <Img
                                              className="absolute h-[47px] left-[0] top-[0]"
                                              src="images/img_globe_cyan_200_47x59.svg"
                                              alt="globe_Two"
                                            />
                                          </div>
                                          <Img
                                            className="absolute h-[57px] right-[0] top-[0]"
                                            src="images/img_reply.svg"
                                            alt="reply"
                                          />
                                        </div>
                                        <Img
                                          className="absolute bottom-[0] h-[62px] right-[0]"
                                          src="images/img_globe_cyan_200_62x34.svg"
                                          alt="globe_Three"
                                        />
                                      </div>
                                      <Img
                                        className="absolute h-[104px] inset-[0] justify-center m-auto"
                                        src="images/img_vector_cyan_200_104x93.svg"
                                        alt="vector_Seven"
                                      />
                                    </div>
                                    <div
                                      className="bg-cover bg-no-repeat flex flex-col h-[82px] items-center justify-start mb-[undefinedpx] ml-auto mt-auto w-[57%] z-[1]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group357.svg')",
                                      }}
                                    >
                                      <Img
                                        className="h-[82px]"
                                        src="images/img_cut.svg"
                                        alt="cut"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Text
                                className="mt-[58px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                                size="txtPoppinsSemiBold32"
                              >
                                results
                              </Text>
                              <Text
                                className="leading-[30.00px] mt-3 text-white-A700 text-xl w-full"
                                size="txtPoppinsRegular20"
                              >
                                <>
                                  Our track record speaks for itself – we&#39;ve
                                  helped businesses of all sizes and industries
                                  achieve their goals with our IT solutions.
                                </>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex md:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto top-[1%] w-[83%]">
                <Img
                  className="common-pointer h-[65px] md:h-auto object-cover"
                  src="images/img_rectangle1.png"
                  alt="rectangleOne"
                  onClick={() => navigate("/home1")}
                />
                <div className="flex flex-row items-center justify-between md:mt-0 mt-3.5 w-[32%] md:w-full">
                  <Text
                    className="common-pointer text-base text-white-A700"
                    size="txtPoppinsRegular16"
                    onClick={() => navigate("")}
                  >
                    ABOUT US
                  </Text>
                  <Text
                    className="common-pointer text-base text-white-A700"
                    size="txtPoppinsRegular16"
                    onClick={() => navigate("")}
                  >
                    SERVICES
                  </Text>
                  <Text
                    className="common-pointer text-base text-white-A700"
                    size="txtPoppinsRegular16"
                    onClick={() => navigate("")}
                  >
                    PROJECT
                  </Text>
                  <Text
                    className="common-pointer text-base text-white-A700"
                    size="txtPoppinsRegular16"
                    onClick={() => navigate("")}
                  >
                    CONTACT
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-blue_gray-100_01 flex flex-col font-spacegrotesk items-center justify-start mt-[-51.83px] mx-auto p-[162px] md:px-10 sm:px-5 w-full z-[1]">
              <div className="bg-blue_gray-100 h-[115px] rotate-[180deg] w-[7%]"></div>
              <div className="h-[203px] md:h-[241px] mt-[91px] relative w-[85%] md:w-full">
                <Text
                  className="absolute left-[0] md:text-5xl text-[100px] text-center text-gray-900 top-[0]"
                  size="txtSpaceGroteskBold100Gray900"
                >
                  We believe that
                </Text>
                <div className="absolute md:h-[150px] h-[202px] inset-y-[0] my-auto right-[0] w-[90%] md:w-full">
                  <Text
                    className="absolute italic right-[0] md:text-5xl text-[100px] text-center text-gray-900 top-[0]"
                    size="txtPoppinsLightItalic100"
                  >
                    technology
                  </Text>
                  <Text
                    className="absolute bottom-[0] left-[0] md:text-5xl text-[100px] text-center text-gray-900"
                    size="txtSpaceGroteskBold100Gray900"
                  >
                    can the world.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col justify-start mb-9 w-[81%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[309px] md:text-5xl text-[100px] text-blue_gray-100_01 text-center"
                  size="txtSpaceGroteskBold100Bluegray10001"
                >
                  change
                </Text>
                <Text
                  className="leading-[30.00px] md:ml-[0] ml-[219px] mt-[45px] text-center text-gray-900 text-xl w-[67%] sm:w-full"
                  size="txtPoppinsRegular20Gray900"
                >
                  <>
                    That&#39;s why we&#39;re committed to delivering innovative
                    IT solutions to businesses of all sizes. Our team of
                    experienced professionals is dedicated to helping you
                    achieve your goals and thrive in a rapidly evolving digital
                    landscape.
                  </>
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[139px] w-full">
                  <div className="flex flex-col gap-[13px] items-center justify-start">
                    <Text
                      className="md:text-5xl sm:text-[42px] text-[56px] text-center text-gray-900"
                      size="txtSpaceGroteskBold56"
                    >
                      500+
                    </Text>
                    <Text
                      className="text-center text-gray-900 text-xl"
                      size="txtPoppinsRegular20Gray900"
                    >
                      Successful Projects
                    </Text>
                  </div>
                  <Line className="bg-gray-900 h-px mb-[77px] md:mt-0 mt-9 w-[27%]" />
                  <div className="flex flex-col gap-[11px] items-center justify-start">
                    <Text
                      className="md:text-5xl sm:text-[42px] text-[56px] text-center text-gray-900"
                      size="txtSpaceGroteskBold56"
                    >
                      98%
                    </Text>
                    <Text
                      className="text-center text-gray-900 text-xl"
                      size="txtPoppinsRegular20Gray900"
                    >
                      Satisfied Clients
                    </Text>
                  </div>
                  <Line className="bg-gray-900 h-px mb-[77px] md:mt-0 mt-9 w-[27%]" />
                  <div className="flex flex-col gap-2.5 items-center justify-start">
                    <Text
                      className="md:text-5xl sm:text-[42px] text-[56px] text-center text-gray-900"
                      size="txtSpaceGroteskBold56"
                    >
                      35+
                    </Text>
                    <Text
                      className="text-center text-gray-900 text-xl"
                      size="txtPoppinsRegular20Gray900"
                    >
                      Handled Countries
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-spacegrotesk items-center justify-start max-w-[1618px] mt-[191px] mx-auto md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[70px] items-start justify-start w-full">
              <Text
                className="md:text-5xl text-[100px] text-white-A700"
                size="txtSpaceGroteskBold100"
              >
                Client Stories
              </Text>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[120px] grid md:grid-cols-[repeat(0,_1fr_1px)_1fr] grid-cols-[repeat(1,_1fr_1px)_1fr] justify-center w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="md:text-5xl sm:text-[42px] text-[56px] text-cyan-200"
                      size="txtSpaceGroteskBold56Cyan200"
                    >
                      Amazing!
                    </Text>
                    <Text
                      className="leading-[30.00px] mt-[18px] text-white-A700 text-xl w-full"
                      size="txtPoppinsRegular20"
                    >
                      <>
                        “TerraformTechno&#39;s cybersecurity solution gave us
                        the peace of mind we needed to focus on our business.
                        They took the time to understand our unique needs and
                        created a solution that protected our sensitive data and
                        ensured compliance with industry regulations.”
                      </>
                    </Text>
                    <div className="flex sm:flex-col flex-row font-poppins gap-10 items-center justify-end md:ml-[0] ml-[270px] mt-20 w-[62%] md:w-full">
                      <div className="flex flex-col items-end justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                          size="txtPoppinsBold24"
                        >
                          Tom Johnson
                        </Text>
                        <Text
                          className="mt-0.5 text-right text-white-A700 text-xl"
                          size="txtPoppinsRegular20"
                        >
                          CIO of Mika Medika Healthcare
                        </Text>
                      </div>
                      <Img
                        className="h-[88px] md:h-auto rounded-[50%] w-[88px]"
                        src="images/img_imageplaceholder.png"
                        alt="imageplaceholde"
                      />
                    </div>
                  </div>
                </div>
                <Line className="self-center h-[383px] bg-white-A700_87 w-px" />
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="md:text-5xl sm:text-[42px] text-[56px] text-cyan-200"
                      size="txtSpaceGroteskBold56Cyan200"
                    >
                      Best Service
                    </Text>
                    <Text
                      className="leading-[30.00px] mt-[23px] text-white-A700 text-xl w-full"
                      size="txtPoppinsRegular20"
                    >
                      “We were struggling to keep up with the demands of our
                      growing business until we partnered with Terraform
                      Technologies. Their custom software development solution
                      has helped us streamline our operations and improve
                      efficiency, saving us time and money.”
                    </Text>
                    <div className="flex sm:flex-col flex-row font-poppins gap-10 items-center justify-end md:ml-[0] ml-[282px] mt-20 w-[59%] md:w-full">
                      <div className="flex flex-col items-end justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                          size="txtPoppinsBold24"
                        >
                          Jane Doe
                        </Text>
                        <Text
                          className="mt-1 text-right text-white-A700 text-xl"
                          size="txtPoppinsRegular20"
                        >
                          COO of DEF Manufacturing
                        </Text>
                      </div>
                      <Img
                        className="h-[88px] md:h-auto rounded-[50%] w-[88px]"
                        src="images/img_imageplaceholder.png"
                        alt="imageplaceholde"
                      />
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <Img
            className="h-[42px] max-w-[1622px] mt-40 mx-auto w-full"
            src="images/img_brandssection.svg"
            alt="brandssection"
          />
          <div className="bg-blue_gray-100_01 flex flex-col font-spacegrotesk md:gap-10 gap-36 items-center justify-center mt-[200px] p-[150px] md:px-10 sm:px-5 w-full">
            <Text
              className="mt-[41px] md:text-5xl text-[100px] text-center text-gray-900"
              size="txtSpaceGroteskBold100Gray900"
            >
              Services
            </Text>
            <div className="flex flex-col font-poppins items-center justify-start max-w-[1620px] mb-[50px] mx-auto w-full">
              <List
                className="flex flex-col gap-[70px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex flex-col gap-10 items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <Text
                        className="italic md:text-5xl sm:text-[42px] text-[56px] text-gray-900"
                        size="txtPoppinsLightItalic56"
                      >
                        Web Development
                      </Text>
                      <Line className="bg-gray-900 h-1 mb-11 sm:mt-0 mt-[35px] w-[7%]" />
                    </div>
                    <Line className="bg-gray-900 h-px w-full" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex flex-col gap-10 items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <Text
                        className="italic md:text-5xl sm:text-[42px] text-[56px] text-gray-900"
                        size="txtPoppinsLightItalic56"
                      >
                        Mobile Development
                      </Text>
                      <Line className="bg-gray-900 h-1 mb-11 sm:mt-0 mt-[35px] w-[7%]" />
                    </div>
                    <Line className="bg-gray-900 h-px w-full" />
                  </div>
                </div>
              </List>
              <div className="flex flex-col items-center justify-start mt-16 w-full">
                <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="md:text-5xl sm:text-[42px] text-[56px] text-gray-900"
                        size="txtSpaceGroteskBold56"
                      >
                        Cyber Security
                      </Text>
                      <Text
                        className="leading-[30.00px] mt-[31px] text-gray-900 text-xl"
                        size="txtPoppinsRegular20Gray900"
                      >
                        <>
                          Our cyber security service provides advanced
                          protection for your data and systems against potential
                          threats and attacks, ensuring your business
                          <br />
                          operates securely and efficiently.
                        </>
                      </Text>
                      <Img
                        className="h-20 mt-[50px] w-20"
                        src="images/img_arrowicon.svg"
                        alt="arrowicon_One"
                      />
                    </div>
                    <Img
                      className="h-[328px] md:h-auto object-cover rounded-[50px]"
                      src="images/img_imageplaceholder_328x795.png"
                      alt="imageplaceholde"
                    />
                  </div>
                  <Line className="bg-gray-900 h-px w-full" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[70px] w-full">
                <div className="flex flex-col gap-10 items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <Text
                      className="italic md:text-5xl sm:text-[42px] text-[56px] text-gray-900"
                      size="txtPoppinsLightItalic56"
                    >
                      Digital Marketing
                    </Text>
                    <Line className="bg-gray-900 h-1 mb-11 sm:mt-0 mt-[35px] w-[7%]" />
                  </div>
                  <Line className="bg-gray-900 h-px w-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-spacegrotesk md:gap-10 items-start justify-between max-w-[1616px] mt-[200px] mx-auto md:px-5 w-full">
            <Text
              className="md:text-5xl text-[100px] text-white-A700"
              size="txtSpaceGroteskBold100"
            >
              Projects
            </Text>
            <div className="border border-solid border-white-A700 flex flex-row font-poppins gap-6 items-center justify-center md:mt-0 mt-[29px] p-[27px] sm:px-5 rounded-[15px]">
              <Text
                className="common-pointer ml-3 text-base text-white-A700"
                size="txtPoppinsSemiBold16"
                onClick={() => navigate("/projectsgrid")}
              >
                READ MORE PROJECTS
              </Text>
              <Line className="bg-white-A700 h-0.5 mr-3 my-[11px] w-[31%]" />
            </div>
          </div>
          <div className="flex flex-col font-poppins items-center justify-start mt-[141px] w-full">
            <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1620px] mx-auto md:px-5 w-full">
                <div className="flex flex-col gap-[35px] items-start justify-start">
                  <Text
                    className="bg-cyan-200 flex h-[72px] items-center justify-center sm:px-5 rounded-[50%] text-base text-center text-gray-900 w-[72px]"
                    size="txtPoppinsSemiBold16Gray900"
                  >
                    01
                  </Text>
                  <Text
                    className="md:text-5xl sm:text-[42px] text-[56px] text-white-A700"
                    size="txtSpaceGroteskBold56WhiteA700"
                  >
                    DeziDea
                  </Text>
                </div>
                <div className="flex flex-col gap-[33px] items-start justify-start md:ml-[0] ml-[305px]">
                  <Text
                    className="text-base text-white-A700"
                    size="txtPoppinsSemiBold16"
                  >
                    2 0 2 3
                  </Text>
                  <Text
                    className="leading-[30.00px] text-white-A700 text-xl w-full"
                    size="txtPoppinsRegular20"
                  >
                    At DEZIDEA, embody the essence of architectural excellence,
                    merging innovative design, meticulous construction, and
                    captivating interiors.
                  </Text>
                </div>
                <Img
                  className="md:flex-1 h-[179px] sm:h-auto md:ml-[0] ml-[153px] object-cover rounded-[25px] w-[34%] md:w-full"
                  src="images/img_imageplaceholder_179x550.png"
                  alt="imageplaceholde_One"
                />
              </div>
              <Line className="bg-white-A700_71 h-px w-full" />
            </div>
          </div>
          <div className="flex flex-col font-poppins items-center justify-start mt-[147px] w-full">
            <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1620px] mx-auto md:px-5 w-full">
                <div className="flex flex-col gap-[35px] items-start justify-start">
                  <Text
                    className="bg-cyan-200 flex h-[72px] items-center justify-center sm:px-5 rounded-[50%] text-base text-center text-gray-900 w-[72px]"
                    size="txtPoppinsSemiBold16Gray900"
                  >
                    02
                  </Text>
                  <Text
                    className="md:text-5xl sm:text-[42px] text-[56px] text-white-A700"
                    size="txtSpaceGroteskBold56WhiteA700"
                  >
                    Emobisoft
                  </Text>
                </div>
                <div className="flex flex-col gap-[33px] items-start justify-start md:ml-[0] ml-[244px]">
                  <Text
                    className="text-base text-white-A700"
                    size="txtPoppinsSemiBold16"
                  >
                    2 0 2 3
                  </Text>
                  <Text
                    className="leading-[30.00px] text-white-A700 text-xl w-full"
                    size="txtPoppinsRegular20"
                  >
                    For expanding companies in a variety of industries,
                    including convenience, grocery, liquor, and more, Emobisoft
                    provides a versatile and adaptable solution.
                  </Text>
                </div>
                <Img
                  className="md:flex-1 h-[179px] sm:h-auto md:ml-[0] ml-[113px] object-cover rounded-[25px] w-[34%] md:w-full"
                  src="images/img_imageplaceholder_1.png"
                  alt="imageplaceholde_Two"
                />
              </div>
              <Line className="bg-white-A700_71 h-px w-full" />
            </div>
          </div>
          <div className="flex flex-col font-spacegrotesk items-center justify-start max-w-[1620px] mt-[270px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[34%] md:w-full">
                <Text
                  className="leading-[110.00px] md:text-5xl text-[100px] text-white-A700"
                  size="txtSpaceGroteskBold100"
                >
                  <>
                    Got Any
                    <br />
                    Questions?
                  </>
                </Text>
                <div className="bg-blue_gray-100 h-[42px] md:ml-[0] ml-[486px] mt-[77px] w-[42px]"></div>
                <div className="bg-gray-900 border border-solid border-white-A700 flex flex-row font-poppins gap-6 items-center justify-start mt-[115px] p-[26px] sm:px-5 rounded-[15px] w-[65%] md:w-full">
                  <Text
                    className="common-pointer ml-[21px] mt-0.5 text-base text-white-A700"
                    size="txtPoppinsSemiBold16"
                    onClick={() => navigate("/contact")}
                  >
                    ASK A QUESTION
                  </Text>
                  <Line className="bg-white-A700 h-0.5 my-3 w-[34%]" />
                </div>
              </div>
              <div className="flex md:flex-1 flex-col font-poppins items-center justify-start w-1/2 md:w-full">
                <List
                  className="flex flex-col gap-[46px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                    <div className="flex flex-col gap-5 items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                          size="txtPoppinsSemiBold32"
                        >
                          What services does TerraformTechno offer?
                        </Text>
                        <Img
                          className="h-5 w-5"
                          src="images/img_grid.svg"
                          alt="grid"
                        />
                      </div>
                      <Line className="bg-white-A700_71 h-px w-full" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                          size="txtPoppinsSemiBold32"
                        >
                          Which IT solution is for my business?
                        </Text>
                        <Img
                          className="h-5 w-5"
                          src="images/img_grid.svg"
                          alt="grid"
                        />
                      </div>
                      <Line className="bg-white-A700_71 h-px w-full" />
                    </div>
                  </div>
                </List>
                <div className="flex flex-col items-center justify-start mt-[42px] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-cyan-200"
                        size="txtPoppinsSemiBold32Cyan200"
                      >
                        How much do the services cost?
                      </Text>
                      <div className="bg-white-A700 h-1 sm:mt-0 my-[22px] w-[3%]"></div>
                    </div>
                    <Text
                      className="leading-[30.00px] mt-5 text-white-A700 text-xl w-[97%] sm:w-full"
                      size="txtPoppinsRegular20"
                    >
                      Our pricing varies based on the specific services and
                      needs of your business. We offer flexible pricing options
                      to suit your budget and requirements. Contact us to learn
                      more.
                    </Text>
                    <Line className="bg-white-A700 h-px mt-10 w-full" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[46px] w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                        size="txtPoppinsSemiBold32"
                      >
                        How do I get started with the IT solutions?
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_grid.svg"
                        alt="grid"
                      />
                    </div>
                    <Line className="bg-white-A700_71 h-px w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="font-spacegrotesk sm:h-[2423px] md:h-[2464px] h-[3553px] mt-[200px] md:px-5 relative w-full">
            <div className="flex flex-col m-auto w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[1330px] items-center justify-start mx-auto p-[85px] md:px-10 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group351.svg')" }}
              >
                <Text
                  className="mb-[1032px] md:text-5xl text-[100px] text-center text-gray-900"
                  size="txtSpaceGroteskBold100Gray900"
                >
                  Our Team
                </Text>
              </div>
              <footer className="flex items-center justify-center mt-[-510px] mx-auto w-full z-[1]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[1990px] items-center justify-center mb-[743px] p-[78px] md:px-10 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group54.png')" }}
                >
                  <ul className="flex flex-col items-center justify-center mt-[559px] w-[92%] md:w-full common-column-list">
                    <li>
                      <a href="javascript:">
                        <div className="bg-blue_gray-100 h-[30px] md:ml-[0] ml-[1070px] mr-[520px] w-[30px]"></div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-32 md:text-5xl text-[100px] text-white-A700"
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
                            className="common-pointer ml-3 md:ml-[0] text-base text-white-A700"
                            size="txtPoppinsSemiBold16"
                            onClick={() => navigate("/contact")}
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
                              <div className="flex md:flex-1 flex-col md:gap-10 gap-[115px] items-center justify-start md:mt-0 mt-[107px] w-[259px] md:w-full">
                                <Img
                                  className="common-pointer h-[95px] md:h-auto object-cover w-full"
                                  src="images/img_rectangle1.png"
                                  alt="rectangleSix"
                                  onClick={() => navigate("/home1")}
                                />
                                <div className="flex flex-row items-center justify-between w-full">
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
                                      name="group348"
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
            <div className="absolute flex md:flex-col flex-row font-poppins md:gap-5 inset-x-[0] items-center justify-start mx-auto top-[8%] w-[77%]">
              <div className="flex flex-col items-start justify-start w-[31%] md:w-full">
                <div className="bg-blue_gray-100 h-[583px] rounded-[25px] w-full"></div>
                <Text
                  className="mt-[61px] text-gray-900 text-xl"
                  size="txtPoppinsRegular20Gray900"
                >
                  CEO
                </Text>
                <Text
                  className="mt-[18px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtPoppinsSemiBold32Gray900"
                >
                  Mr. Sheraz
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start ml-14 md:ml-[0] w-[31%] md:w-full">
                <Img
                  className="h-[583px] sm:h-auto object-cover rounded-bl-[25px] rounded-br-[25px] w-full"
                  src="images/img_imageplaceholder_583x452.png"
                  alt="imageplaceholde_Four"
                />
                <Text
                  className="mt-[63px] text-gray-900 text-xl"
                  size="txtPoppinsRegular20Gray900"
                >
                  Graphic Designer
                </Text>
                <Text
                  className="mt-4 md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtPoppinsSemiBold32Gray900"
                >
                  Hamza Fareed
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[57px] w-[31%] md:w-full">
                <Img
                  className="h-[583px] sm:h-auto object-cover rounded-bl-[25px] rounded-br-[25px] w-full"
                  src="images/img_imageplaceholder_2.png"
                  alt="imageplaceholde_Five"
                />
                <Text
                  className="mt-[63px] text-gray-900 text-xl"
                  size="txtPoppinsRegular20Gray900"
                >
                  Web Developer
                </Text>
                <Text
                  className="mt-[17px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtPoppinsSemiBold32Gray900"
                >
                  Hassam Umar
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
