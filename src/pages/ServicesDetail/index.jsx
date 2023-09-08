import React from "react";

import { Img, Input, Line, Text } from "components";

const ServicesDetailPage = () => {
  return (
    <>
      <div className="bg-blue_gray-100_01 flex flex-col font-spacegrotesk items-center justify-end mx-auto pt-[62px] w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <div className="h-[434px] md:px-5 relative w-full">
            <div className="flex sm:flex-col flex-row font-poppins sm:gap-5 items-center justify-center mb-[undefinedpx] ml-auto mr-[150px] mt-5 w-[26%] z-[1]">
              <Text
                className="text-base text-gray-900"
                size="txtPoppinsRegular16Gray900"
              >
                ABOUT US
              </Text>
              <Text
                className="ml-16 sm:ml-[0] text-base text-gray-900"
                size="txtPoppinsRegular16Gray900"
              >
                SERVICES
              </Text>
              <Text
                className="ml-16 sm:ml-[0] text-base text-gray-900"
                size="txtPoppinsRegular16Gray900"
              >
                PROJECT
              </Text>
              <Text
                className="sm:ml-[0] ml-[71px] text-base text-gray-900"
                size="txtPoppinsRegular16Gray900"
              >
                CONTACT
              </Text>
            </div>
            <Img
              className="h-[65px] mb-[-3px] ml-[150px] object-cover w-[10%] z-[1]"
              src="images/img_rectangle1.png"
              alt="rectangleSeven"
            />
            <div className="flex flex-col justify-start mt-auto mx-auto w-full">
              <div className="bg-blue_gray-100 h-[21px] md:ml-[0] ml-[476px] mr-[1423px] w-[21px]"></div>
              <div className="bg-blue_gray-100 h-[30px] md:ml-[0] ml-[1074px] mr-[816px] mt-[31px] w-[30px]"></div>
              <div className="bg-gradient2  flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[7px] pb-[86px] md:px-10 sm:px-5 px-[86px] w-full">
                <Text
                  className="mb-[38px] ml-16 md:ml-[0] md:mt-0 mt-[30px] md:text-5xl text-[100px] text-gray-900"
                  size="txtSpaceGroteskBold100Gray900"
                >
                  Mobile Development
                </Text>
                <div className="bg-blue_gray-100 h-[77px] md:ml-[0] ml-[330px] md:mt-0 mt-[120px] w-[6%]"></div>
                <div className="bg-blue_gray-100 h-[21px] mb-44 md:ml-[0] ml-[194px] w-[21px]"></div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 gap-[69px] items-center justify-start max-w-[1620px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-20 items-center justify-start w-[62%] md:w-full">
              <Img
                className="h-[665px] sm:h-auto object-cover rounded-bl-[25px] rounded-br-[25px] w-full"
                src="images/img_imageplaceholder_665x1001.png"
                alt="imageplaceholde"
              />
              <Text
                className="leading-[30.00px] text-gray-900 text-xl"
                size="txtPoppinsRegular20Gray900"
              >
                <>
                  Mobile development is a crucial service for any IT company. As
                  technology evolves, more and more people are using mobile
                  devices to access the internet and carry out daily activities.
                  Therefore, having a mobile presence is essential for
                  businesses to reach their target audience. Mobile development
                  involves creating applications or software specifically
                  designed for mobile devices such as smartphones and tablets.
                  These applications can be developed for various operating
                  systems such as iOS, Android, or Windows.
                  <br />
                  <br />
                  Our IT company specializes in mobile development, providing
                  high-quality and user-friendly applications to our clients.
                  Our team of developers has expertise in various programming
                  languages such as Java, Swift, and Kotlin, among others. We
                  work closely with our clients to understand their needs and
                  requirements, ensuring that the application we develop meets
                  their expectations. We also provide ongoing support and
                  maintenance for the applications to ensure they continue to
                  function optimally. Our mobile development services enable
                  businesses to increase their reach, improve customer
                  engagement, and ultimately grow their business.
                  <br />
                  <br />
                  One of the key benefits of mobile development is the ability
                  to offer personalized experiences for users. With the use of
                  mobile applications, businesses can collect valuable data on
                  user behavior and preferences, allowing them to tailor their
                  offerings to meet specific needs. This personalized approach
                  not only enhances user experience but also increases customer
                  loyalty and retention.
                  <br />
                  Our team of developers has experience in building custom
                  applications that offer personalized experiences, helping our
                  clients to stand out in a crowded market.
                </>
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[34%] md:w-full">
              <div className="bg-gradient1  border border-solid flex flex-col gap-7 items-start justify-start p-[42px] md:px-10 sm:px-5 rounded-[25px] w-full white_A700_33_white_A700_00_border23">
                <Text
                  className="md:ml-[0] ml-[13px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtPoppinsSemiBold32Gray900"
                >
                  Search
                </Text>
                <Input
                  name="group370"
                  placeholder="Enter your keywords ..."
                  className="p-0 placeholder:text-gray-900_87 text-left text-xl w-full"
                  wrapClassName="flex mb-[5px] md:ml-[0] ml-[13px] w-[94%]"
                  suffix={
                    <div className="mb-2 ml-3 w-6 bg-gray-900">
                      <Img
                        className="h-6 my-auto"
                        src="images/img_search.svg"
                        alt="search"
                      />
                    </div>
                  }
                  color="gray_900_87"
                  size="xs"
                  variant="underline"
                ></Input>
              </div>
              <div className="bg-gradient1  border border-solid flex flex-col items-start justify-start p-[42px] md:px-10 sm:px-5 rounded-[25px] w-full white_A700_33_white_A700_00_border24">
                <Text
                  className="md:ml-[0] ml-[13px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtPoppinsSemiBold32Gray900"
                >
                  Services
                </Text>
                <Text
                  className="md:ml-[0] ml-[13px] mt-[31px] text-gray-900 text-xl"
                  size="txtPoppinsRegular20Gray900"
                >
                  <>&gt; Web Development</>
                </Text>
                <Text
                  className="md:ml-[0] ml-[22px] mt-[15px] text-gray-900 text-xl"
                  size="txtPoppinsSemiBold20"
                >
                  <>&gt; Mobile Development</>
                </Text>
                <Text
                  className="ml-3.5 md:ml-[0] mt-4 text-gray-900 text-xl"
                  size="txtPoppinsRegular20Gray900"
                >
                  <>&gt; Cyber Security</>
                </Text>
                <Text
                  className="md:ml-[0] ml-[13px] mt-4 text-gray-900 text-xl"
                  size="txtPoppinsRegular20Gray900"
                >
                  <>&gt; Digital Marketing</>
                </Text>
                <Text
                  className="md:ml-[0] ml-[13px] mt-4 text-gray-900 text-xl"
                  size="txtPoppinsRegular20Gray900"
                >
                  <>&gt; Cloud Computing</>
                </Text>
                <Text
                  className="ml-3.5 md:ml-[0] mt-[15px] text-gray-900 text-xl"
                  size="txtPoppinsRegular20Gray900"
                >
                  <>&gt; Software Development</>
                </Text>
                <Text
                  className="md:ml-[0] ml-[13px] mt-4 text-gray-900 text-xl"
                  size="txtPoppinsRegular20Gray900"
                >
                  <>&gt; IT Project Management</>
                </Text>
                <Text
                  className="md:ml-[0] ml-[13px] mt-[15px] text-gray-900 text-xl"
                  size="txtPoppinsRegular20Gray900"
                >
                  <>&gt; Data Analysis</>
                </Text>
                <Text
                  className="mb-[3px] ml-3.5 md:ml-[0] mt-4 text-gray-900 text-xl"
                  size="txtPoppinsRegular20Gray900"
                >
                  <>&gt; Network Management</>
                </Text>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[586px] items-center justify-start p-[43px] md:px-10 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_contact.svg')" }}
              >
                <div className="flex flex-col items-start justify-start mb-3 w-[91%] md:w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtPoppinsSemiBold32"
                  >
                    Contact
                  </Text>
                  <div className="flex flex-row gap-6 items-center justify-start mt-[23px] w-[58%] md:w-full">
                    <Img
                      className="h-7 w-7"
                      src="images/img_call.svg"
                      alt="call"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsBold24"
                    >
                      +92 321 6812169
                    </Text>
                  </div>
                  <div className="flex flex-row gap-6 items-start justify-start mt-[21px] w-[78%] md:w-full">
                    <Img
                      className="h-7 w-7"
                      src="images/img_vector_cyan_200_28x28.svg"
                      alt="vector_Four"
                    />
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtPoppinsRegular20"
                    >
                      info@terraformtechno.com
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-start justify-start mt-[22px] w-full">
                    <Img
                      className="h-7 w-7"
                      src="images/img_locationicon.svg"
                      alt="locationicon"
                    />
                    <Text
                      className="leading-[30.00px] text-white-A700 text-xl"
                      size="txtPoppinsRegular20"
                    >
                      <>
                        NewYork, NewYork 10065
                        <br />
                        United State of America
                      </>
                    </Text>
                  </div>
                  <Img
                    className="h-[65px] md:h-auto md:ml-[0] ml-[9px] mt-[178px] object-cover w-[42%] sm:w-full"
                    src="images/img_rectangle1.png"
                    alt="rectangleSeven_One"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="font-poppins md:h-[1042px] h-[886px] max-w-[1602px] mt-[156px] mx-auto md:px-5 relative w-full">
            <div className="absolute h-[886px] inset-[0] justify-center m-auto w-[886px] md:w-full">
              <div className="backdrop-opacity-[0.5] bg-gray-900_9e blur-[500.00px] h-[614px] m-auto rounded-[50%] w-[614px]"></div>
              <div className="absolute h-[886px] inset-[0] justify-center m-auto w-[886px] md:w-full">
                <Img
                  className="h-[886px] m-auto object-cover w-[886px]"
                  src="images/img_framephoto.png"
                  alt="framephoto"
                />
                <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[53px] md:px-10 sm:px-5 rounded-[50px] w-2/5">
                  <Img
                    className="h-[90px] md:h-auto mb-[264px] mt-[297px] object-cover w-full"
                    src="images/img_rectangle1.png"
                    alt="rectangleTen"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bg-gradient1  border border-solid flex flex-col items-start justify-start left-[0] p-16 md:px-10 sm:px-5 rounded-[25px] top-[2%] w-[29%] white_A700_33_white_A700_00_border25">
              <Img
                className="h-[72px] w-[72px]"
                src="images/img_easyicon.svg"
                alt="easyicon"
              />
              <Text
                className="mt-[55px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                size="txtPoppinsSemiBold32Gray900"
              >
                Easy Access
              </Text>
              <Text
                className="leading-[26.00px] mb-5 mt-[7px] text-base text-gray-900"
                size="txtPoppinsRegular16Gray900"
              >
                <>
                  Mobile development services for business
                  <br />
                  to provide convenient access to their
                  <br />
                  products and services.
                </>
              </Text>
            </div>
            <div className="absolute bg-gradient1  border border-solid bottom-[2%] flex flex-col items-start justify-start left-[0] p-16 md:px-10 sm:px-5 rounded-[25px] w-[29%] white_A700_33_white_A700_00_border26">
              <Img
                className="h-16 w-16"
                src="images/img_hearticon.svg"
                alt="hearticon"
              />
              <Text
                className="mt-[62px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                size="txtPoppinsSemiBold32Gray900"
              >
                Personal Experience
              </Text>
              <Text
                className="leading-[26.00px] mb-5 mt-2 text-base text-gray-900"
                size="txtPoppinsRegular16Gray900"
              >
                <>
                  Our team builds custom mobile apps for personalized user
                  experiences that
                  <br />
                  match with your business goals.
                </>
              </Text>
            </div>
            <div className="absolute bg-gradient1  border border-solid flex flex-col items-start justify-start p-16 md:px-10 sm:px-5 right-[0] rounded-[25px] top-[2%] w-[29%] white_A700_33_white_A700_00_border27">
              <Img
                className="h-16 w-16"
                src="images/img_shareicon.svg"
                alt="shareicon"
              />
              <Text
                className="mt-[62px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                size="txtPoppinsSemiBold32Gray900"
              >
                High Engagement
              </Text>
              <Text
                className="leading-[26.00px] mb-5 mt-2 text-base text-gray-900"
                size="txtPoppinsRegular16Gray900"
              >
                <>
                  Our mobile development services enhance user engagement and
                  <br />
                  retention for apps usage.
                </>
              </Text>
            </div>
            <div className="absolute bg-gradient1  border border-solid bottom-[2%] flex flex-col items-start justify-start p-16 md:px-10 sm:px-5 right-[0] rounded-[25px] w-[29%] white_A700_33_white_A700_00_border28">
              <Img
                className="h-[72px] w-[72px]"
                src="images/img_increaseicon.svg"
                alt="increaseicon"
              />
              <Text
                className="mt-[54px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                size="txtPoppinsSemiBold32Gray900"
              >
                Increase Efficiency
              </Text>
              <Text
                className="leading-[26.00px] mb-5 mt-2 text-base text-gray-900 w-full"
                size="txtPoppinsRegular16Gray900"
              >
                Our mobile development solutions increase efficiency by
                automating processes and streamlining operations.
              </Text>
            </div>
          </div>
          <div className="font-poppins h-[2899px] md:h-[2970px] mt-[140px] md:px-5 relative w-full">
            <div className="absolute bg-gray-900 flex flex-col md:gap-10 gap-[88px] inset-x-[0] justify-start mx-auto p-[72px] md:px-10 sm:px-5 rounded-[50px] top-[0] w-[85%]">
              <div className="h-[330px] ml-2 md:ml-[0] mr-[622px] relative w-[58%] md:w-full">
                <Text
                  className="leading-[110.00px] m-auto md:text-5xl text-[100px] text-white-A700"
                  size="txtSpaceGroteskBold100"
                >
                  <>
                    Ready to take
                    <br />
                    your
                    <br />
                    to the next level?
                  </>
                </Text>
                <Text
                  className="absolute h-max inset-y-[0] italic my-auto right-[4%] md:text-5xl text-[100px] text-white-A700"
                  size="txtPoppinsLightItalic100WhiteA700"
                >
                  Business’ IT
                </Text>
              </div>
              <div className="bg-white-A700 flex md:flex-col flex-row gap-[22px] items-center justify-end md:ml-[0] ml-[1069px] mr-2 p-[27px] sm:px-5 rounded-[15px] w-[28%] md:w-full">
                <Text
                  className="text-base text-gray-900"
                  size="txtPoppinsSemiBold16Gray900"
                >
                  GET FREE CONSULTATION
                </Text>
                <Line className="bg-gray-900 h-0.5 mr-3 md:mt-0 my-[11px] w-[29%]" />
              </div>
            </div>
            <footer className="absolute flex inset-[0] items-center justify-center m-auto w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col gap-6 h-[1235px] items-center justify-center mb-[1595px] p-[107px] md:px-10 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group377.png')" }}
              >
                <div className="bg-blue_gray-100 h-[22px] md:ml-[0] ml-[1642px] mr-[42px] mt-[546px] w-[22px]"></div>
                <div className="flex flex-col gap-12 justify-start md:ml-[0] ml-[43px] mr-[127px] w-[91%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <div className="flex md:flex-1 flex-col gap-[49px] justify-start w-[62%] md:w-full">
                      <div className="flex flex-row sm:gap-10 items-end justify-between md:ml-[0] ml-[184px] w-[81%] md:w-full">
                        <div className="bg-blue_gray-100 h-[29px] mt-[134px] w-[29px]"></div>
                        <div className="flex flex-col md:gap-10 gap-[67px] items-start justify-start">
                          <Text
                            className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                            size="txtPoppinsSemiBold32Gray900"
                          >
                            Newsletter
                          </Text>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-4 items-center justify-start w-full">
                              <div className="flex flex-row items-start justify-between w-full">
                                <Text
                                  className="text-gray-900_87 text-xl"
                                  size="txtPoppinsRegular20Gray90087"
                                >
                                  Email Address
                                </Text>
                                <Img
                                  className="h-7 mt-0.5 w-7"
                                  src="images/img_arrowicon.svg"
                                  alt="arrowicon_One"
                                />
                              </div>
                              <Line className="bg-gray-900 h-px w-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mr-[78px] w-[92%] md:w-full">
                        <Img
                          className="h-[95px] md:h-auto mb-6 object-cover"
                          src="images/img_rectangle1.png"
                          alt="rectangleNine"
                        />
                        <div className="flex flex-row items-center justify-between sm:mt-0 mt-[71px] w-[31%] sm:w-full">
                          <Img
                            className="h-[42px] w-[43px]"
                            src="images/img_eye_gray_900_42x43.svg"
                            alt="eye"
                          />
                          <Img
                            className="h-12 w-12"
                            src="images/img_facebookicon_gray_900.svg"
                            alt="facebookicon"
                          />
                          <Img
                            className="h-10 w-10"
                            src="images/img_twittericon_gray_900.svg"
                            alt="twittericon"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col md:gap-10 gap-[63px] items-start justify-start ml-40 md:ml-[0] md:mt-0 mt-1 w-[8%] md:w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                        size="txtPoppinsSemiBold32Gray900"
                      >
                        Explore
                      </Text>
                      <ul className="flex flex-col items-start justify-start md:w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-gray-900_9e text-xl"
                          >
                            <Text size="txtPoppinsRegular20Gray9009e">
                              About Us
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mt-[15px] text-gray-900_9e text-xl"
                          >
                            <Text size="txtPoppinsRegular20Gray9009e">
                              Services
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mt-[18px] text-gray-900_9e text-xl"
                          >
                            <Text size="txtPoppinsRegular20Gray9009e">
                              Project
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mt-3.5 text-gray-900_9e text-xl"
                          >
                            <Text size="txtPoppinsRegular20Gray9009e">
                              Contact
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex md:flex-1 flex-col md:gap-10 gap-[67px] items-center justify-start md:ml-[0] ml-[185px] w-[9%] md:w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                        size="txtPoppinsSemiBold32Gray900"
                      >
                        Contact
                      </Text>
                      <ul className="flex flex-col gap-4 items-start justify-start md:w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-gray-900_9e text-xl"
                          >
                            <Text size="txtPoppinsRegular20Gray9009e">
                              Email
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-gray-900_9e text-xl"
                          >
                            <Text size="txtPoppinsRegular20Gray9009e">
                              Phone
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-gray-900_9e text-xl"
                          >
                            <Text size="txtPoppinsRegular20Gray9009e">
                              Address
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-gray-900_9e text-xl"
                          >
                            <Text size="txtPoppinsRegular20Gray9009e">
                              Social Media
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-blue_gray-100 h-12 md:ml-[0] ml-[982px] mr-[506px] w-12"></div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetailPage;
