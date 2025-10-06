'use client';
import { icons } from '@/utility/image';
import Image from 'next/image';
import {
  Feedback_Header,
  Feedback_Text,
  feedbackData,
  feedbackData2,
  secondaryFeedbackData,
} from './constants';
import { motion } from 'framer-motion';

const fadeSlideVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const FeedbackGrid = () => {
  return (
    <section className="bg-[#F5F5F5] w-full pt-[16px] pb-[64px] md:py-[35px] lg:pt-[50px] lg:pb-[29px]">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex   flex-col justify-between h-full"></div>
        <div className="hidden md:block">
          {/* Section 1 */}
          <div className="relative grid  md:grid-cols-3 gap-3 md:mx-[50px] lg:mx-[111px] lg:gap-6  place-items-center">
            <div className="relative w-full">
              <motion.div
                variants={fadeSlideVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute z-0  left-[-15px]   lg:left-[-40px] top-[45px] lg:top-[96px] max-w-[50px] min-h-[69px] block md:hidden lg:block lg:max-w-[143px] lg:min-h-[193px] "
              >
                <Image
                  src={icons.blurImage1}
                  alt="Blur 1"
                  width={143}
                  height={193}
                />
              </motion.div>

              <motion.div
                variants={fadeSlideVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white  max-w-[269]  px-[6px] py-[6px] md:px-[14px] md:py-[12px] lg:px-[18px] lg:py-[20px] rounded-lg relative z-10"
              >

                <div className="section-topTitle mb-[3.5px] md:mb-[6px] lg:mb[9px] px-[8px] md:px-[16px] py-[4px] md:py-[10px]">
                  {feedbackData.headerText}
                </div>
                <p className="text-[10px] md:text-[14px] lg:text-[16px]  line-clamp-5 md:overflow-hidden md:whitespace-normal leading-[1.2]  md:leading-[1.5] text-black">
                  {Feedback_Text.text}
                </p>
              </motion.div>
            </div>
            <div className="relative left-[20px] lg:left-[80px] top-[-50px] w-full">
              <motion.div
                variants={fadeSlideVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="white-box flex align-center overflow-wrap text-[#000000] text-[14px] lg:text-[16px] max-w-[60px] max-h-[60px] lg:max-h-[84px] lg:max-w-[84px] px-[8px] py-[19px] md:px-[14px] md:py-[9px] lg:px-[14px] lg:py-[16px] "
              >
                {Feedback_Text.secondText2}
              </motion.div>
            </div>
            <div className="relative w-full left-[20px] lg:left-[80px]">
              <motion.div
                variants={fadeSlideVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute z-0 left-[0px] top-[-110px] lg:left-[30px] lg:top-[-120px]"
              >
                <Image
                  src={icons.blurImage2}
                  alt="Blur 2"
                  width={245}
                  height={121}
                />
              </motion.div>

              <motion.div
                variants={fadeSlideVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white absolute left-[-20px] lg:left-[20px] top-[-80px]  max-w-[8.063rem] max-h-[7.813rem]  md:max-w-[13.188rem] md:max-h-[11.438rem] lg:max-w-[253px] lg:max-h-[235px]  py-5 px-[13px] gap-[3.5px] md:gap-[6.5px] lg:gap-[9px]  z-10"
              >

                <div className="section-topTitle  mb-[3.5px] md:mb-[6px] lg:mb[9px] px-[8px] md:px-[16px] py-[4px] md:py-[10px]">
                  {feedbackData.headerText}
                </div>
                <div className="text-[18px]  lg:text-[52px]  text-black">
                  {feedbackData.percentage}
                </div>
                <p className="square-title border-b border-black  text-black font-medium">
                  {/* {feedbackData.description} */}
                </p>
                <div className="square-title  text-black">
                  {feedbackData.name}
                </div>
                <div className="square-title text-black">
                  {feedbackData.title}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="relative grid  md:grid-cols-4 gap-3 w-full  md:mx-[50px] md:mt-[18px] md:mb-[9px] lg:mx-[111px]">
            <div className="flex justify-end items-center w-full">
              <motion.div
                variants={fadeSlideVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex justify-end lg:mt-[25px] md:mb-[24px]  max-w-[100px] lg:max-w-[141px] max-h-[100px] lg:max-h-[141px] "
              >
                <Image
                  src={icons.person}
                  alt="Person"
                  width={141}
                  height={141}
                />
              </motion.div>
            </div>
            <div className="flex justify-start items-cener w-full col-span-2">
              <motion.h2
                variants={fadeSlideVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className=" z-20 text-center text[38px] text-[52px] max-w-lg font-Erstoria text-[#453030]"
              >
                {/* {Feedback_Header} */}
              </motion.h2>
            </div>
            <div className="relative left-[0px] lg:left-[-75px] top-[0px] lg:top-[110px] w-full">
              <motion.div
                variants={fadeSlideVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="white-box flex text-[14px] lg:text-[16px] overflow-wrap text-[#000000] justify-center max-w-[60px] max-h-[60px] lg:max-h-[84px] lg:max-w-[84px] px-[8px] py-[19px] md:px-[14px] md:py-[9px] lg:px-[14px] lg:py-[16px]"
              >
                {Feedback_Text.secondText2}
              </motion.div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="relative grid  md:grid-cols-3 gap-3 w-full  mu-[45px] lg:my-[65px] md:mx-[50px] lg:mx-[111px]">
            <div className="flex justify-start items-end">
              <motion.div
                variants={fadeSlideVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white hidden md:block  max-w-[8.063rem] max-h-[7.813rem]  md:max-w-[13.188rem] md:max-h-[11.438rem] lg:max-w-[253px] lg:max-h-[235px]  py-5 px-[13px] gap-[3.5px] md:gap-[6.5px] lg:gap-[9px] relative z-10"
              >

                <div className="section-topTitle  mb-[3.5px] md:mb-[6px] lg:mb[9px] px-[8px] md:px-[16px] py-[4px] md:py-[10px]">
                  {feedbackData2.headerText}
                </div>
                <div className="text-[18px]  lg:text-[52px]  text-black">
                  {feedbackData2.percentage}
                </div>
                <p className="square-title border-b border-black  text-black font-medium">
                  {/* {feedbackData2.description} */}
                </p>
                <div className="square-title  text-black">
                  {feedbackData2.name}
                </div>
                <div className="square-title text-black">
                  {feedbackData2.title}
                </div>
              </motion.div>
            </div>
            <div className="relative mt-[-96px] w-full">
              <div className="hidden lg:block ">
                <motion.div
                  variants={fadeSlideVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="absolute z-0  left-[-15px] top-[45px] lg:left-[150px] lg:top-[130px]"
                >
                  <Image
                    src={icons.blurImage3}
                    alt="Blur 3"
                    width={245}
                    height={121}
                  />
                </motion.div>

                <motion.div
                  variants={fadeSlideVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-white w-full max-w-[129px]  md:max-w-[288px] md:max-h-[221.2px] lg:max-w-[302px]  lg:max-h-[252px] px-[7px] py-[6px] md:px-[14px] md:py-[12px] lg:px-[9px] lg:py-[20px] rounded-lg relative z-10 h-auto overflow-"
                >

                  <div className="section-topTitle mb-[9px]">
                    {secondaryFeedbackData.headerText}
                  </div>
                  <p className="text-[10px] md:text-[14px] lg:text-[16px] text-black leading-[1] md:leading-[1] border-b border-black pb-[9px] line-clamp-3 md:line-clamp-none">
                    {secondaryFeedbackData.description}
                  </p>
                  <div className="md:text-[14px] lg:text-[16px] pt-[9px] text-black">
                    {secondaryFeedbackData.name}
                  </div>
                  <div className="md:text-[14px] lg:text-[16px] text-black">
                    {secondaryFeedbackData.title}
                  </div>
                </motion.div>
              </div>
              <div className="lg:hidden relative md:block ">
                <motion.div
                  variants={fadeSlideVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="max-w-[72.5px]  max-h-[72.5px] absolute left-[25px] top-[150px]"
                >
                  <Image
                    src={icons.person2}
                    alt="Person 2"
                    width={102}
                    height={102}
                  />
                </motion.div>
              </div>
            </div>
            {/* THERD PART */}
            <div className="relative mt-[-96px] w-full">
              <div className="lg:hidden md:block ">
                <motion.div
                  variants={fadeSlideVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="absolute z-0 max-w-[227px] max-h-[77px] left-[-110px] top-[45px] "
                >
                  <Image
                    src={icons.blurImage3}
                    alt="Blur 3"
                    width={245}
                    height={121}
                  />
                </motion.div>

                <motion.div
                  variants={fadeSlideVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-white left-[-80px] top-[45px] md:max-w-[288px] md:max-h-[221.2px]   md:px-[14px] md:py-[12px]  rounded-lg relative z-10 h-auto overflow-"
                >

                  <div className="section-topTitle mb-[9px]">
                    {secondaryFeedbackData.headerText}
                  </div>
                  <p className="text-[10px] md:text-[14px] lg:text-[16px] overflow-hidden text-black leading-[1] md:leading-[1] border-b border-black pb-[9px] line-clamp-3 md:line-clamp-none">
                    {secondaryFeedbackData.description}
                  </p>
                  <div className="md:text-[14px] lg:text-[16px] pt-[9px] text-black">
                    {secondaryFeedbackData.name}
                  </div>
                  <div className="md:text-[14px] lg:text-[16px] text-black">
                    {secondaryFeedbackData.title}
                  </div>
                </motion.div>
              </div>
              <div className="md:hidden relative lg:block ">
                <motion.div
                  variants={fadeSlideVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="max-w-[102px]  max-h-[102px] absolute left-[-95px] top-[250px]"
                >
                  <Image
                    src={icons.person2}
                    alt="Person 2"
                    width={102}
                    height={102}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          {/* Section 1 */}
          <div className="relative grid  grid-cols-4 w-full  mx-[16px]">
            <div className="flex justify-start items-cener w-full col-span-3">
              <motion.h2
                variants={fadeSlideVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className=" z-20 text-left text-[24px] max-w-lg font-Erstoria text-[#453030]"
              >
                {/* {Feedback_Header} */}
              </motion.h2>
            </div>
          </div>
          {/* Section 2 */}
          <div className="relative grid grid-cols-3 gap-1 w-full mt-[24px]  mx-[16px]">
            <div className="relative w-full">
              <motion.div
                variants={fadeSlideVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute z-0  left-[-15px] top-[5px] max-w-[50px] min-h-[69px] "
              >
                <Image
                  src={icons.blurImage1}
                  alt="Blur 1"
                  width={143}
                  height={193}
                />
              </motion.div>

              <motion.div
                variants={fadeSlideVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white  max-w-[98px] max-h-[86px] px-[6px] py-[6px] rounded-lg relative z-10"
              >

                <div className="section-topTitle mb-[3.5px] px-[8px] py-[4px] ">
                  {feedbackData.headerText}
                </div>
                <p className="text-[10px]  line-clamp-4 overflow-hidden leading-[1.2] text-black">
                  {Feedback_Text.text}
                </p>
              </motion.div>
            </div>
            <div className="flex justify-center items-end w-full">
              <motion.div
                variants={fadeSlideVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex justify-start  max-w-[62px] max-h-[62px]"
              >
                <Image
                  src={icons.person}
                  alt="Person"
                  width={141}
                  height={141}
                />
              </motion.div>
            </div>
            <div className="relative top-[-20px] mr-[16px] w-full">
              <motion.div
                variants={fadeSlideVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute z-0  left-[-22px] top-[25px] max-w-[50px] min-h-[69px] "
              >
                <Image
                  src={icons.blurImage1}
                  alt="Blur 1"
                  width={143}
                  height={193}
                />
              </motion.div>

              <motion.div
                variants={fadeSlideVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white  max-w-[98px] max-h-[86px] px-[6px] py-[6px] rounded-lg relative z-10"
              >

                <div className="section-topTitle mb-[3.5px] px-[8px] py-[4px] ">
                  {feedbackData.headerText}
                </div>
                <p className="text-[10px]  line-clamp-4 overflow-hidden leading-[1.2] text-black">
                  {Feedback_Text.text}
                </p>
              </motion.div>
            </div>
          </div>
          {/* Section 3 */}
          <div className="relative grid grid-cols-3 gap-1 w-full mt-[57px]  mx-[16px]">
            <div className="flex align-end">
              <motion.div
                variants={fadeSlideVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="white-box flex align-center overflow-wrap text-[#000000] text-[10px]  max-w-[60px] max-h-[60px]  px-[8px] py-[19px] "
              >
                {Feedback_Text.secondText}
              </motion.div>
            </div>
            <div className="relative w-full">
              <motion.div
                variants={fadeSlideVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute left-[-25px] top-[-25px] max-w-[95.5px] max-h-[47px]"
              >
                <Image
                  src={icons.blurImage2}
                  alt="Blur 2"
                  width={245}
                  height={121}
                />
              </motion.div>
            </div>
            <div className="relative w-full ">
              <motion.div
                variants={fadeSlideVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute left-[-30px] top-[-50px] max-w-[95.5px] max-h-[47px]"
              >
                <Image
                  src={icons.blurImage2}
                  alt="Blur 2"
                  width={245}
                  height={121}
                />
              </motion.div>

              <motion.div
                variants={fadeSlideVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white absolute left-[-20px]  top-[-50px]  max-w-[129px] max-h-[125px] py-[7px] px-[6px] z-10"
              >

                <div className="section-topTitle  mb-[3.5px] px-[8px] md:px-[16px] py-[4px] md:py-[10px]">
                  {feedbackData2.headerText}
                </div>
                <div className="text-[18px]  text-black">
                  {feedbackData2.percentage}
                </div>
                <p className="square-title border-b border-black  text-black font-medium">
                  {feedbackData2.description}
                </p>
                <div className="square-title  text-black">
                  {feedbackData2.name}
                </div>
                <div className="square-title taxt-[10px] text-black">
                  {feedbackData2.title}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackGrid;
