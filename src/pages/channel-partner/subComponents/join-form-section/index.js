import { useState } from 'react';
import styles from './joinForm.module.css';
import Image from 'next/image';
import { icons } from '@/utility/image';
import { motion } from 'framer-motion';
import { staticData, variants } from '@/lib/channel-partner';

const JoinFormSection = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    companyName: '',
    phone: '',
    country: '',
    organizationType: '',
    industry: '',
    promotionalMethod: '',
    referralSource: '',
    captcha: '',
    acceptTerms: false,
    acceptDeclaration: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required.';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required.';
      if (!formData.email.trim()) newErrors.email = 'Email is required.';
      if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required.';
      if (!formData.country.trim()) newErrors.country = 'Country is required.';
      if (!formData.organizationType.trim()) newErrors.organizationType = 'Organization Type is required.';
      if (!formData.industry.trim()) newErrors.industry = 'Industry is required.';
    }

    if (step === 2) {
      if (!formData.promotionalMethod.trim()) newErrors.promotionalMethod = 'Promotional Method is required.';
      if (!formData.referralSource.trim()) newErrors.referralSource = 'Referral Source is required.';
      if (!formData.captcha.trim()) newErrors.captcha = 'Captcha is required.';
      if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept Terms.';
      if (!formData.acceptDeclaration) newErrors.acceptDeclaration = 'You must accept Declaration.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!validateStep()) return;
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = () => {
    // You can send formData to an API here!
    console.log('Submitted data:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <section className="w-full bg-white py-6 px-4 md:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-center">
      <div className="w-full container flex flex-col-reverse lg:flex-row items-center justify-between gap-6 md:gap-10">
        {/* Left: Form Section */}
        <div className="w-full lg:w-1/2 max-w-lg">
          {/* Step 1 */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={variants.transition}
            >
              <h2
                className="text-[45px] md:text-3xl font-[400] mb-4"
                style={{ fontFamily: 'Erstoria' }}
              >
                {staticData.step1.title}
              </h2>
              <form className="space-y-4">
                {/* First Name */}
                <div>
                  <label
                    className={`block font-semibold text-sm mb-2 ${styles.label}`}
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <div className={`w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 mb-6 ${styles.field}`}>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Add First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full  ${styles.field}`}
                    />
                    {errors.firstName && (
                      <span className="text-red-500 text-xs">{errors.firstName}</span>
                    )}
                  </div>
                </div>

                {/* Last Name */}
                <div>
                  <label
                    className={`block font-semibold text-sm mb-2 ${styles.label}`}
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <div className={`w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 mb-6 ${styles.field}`}>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Add Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full   ${styles.field}`}
                    />
                    {errors.lastName && (
                      <span className="text-red-500 text-xs">{errors.lastName}</span>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    className={`block font-semibold text-sm mb-2 ${styles.label}`}
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className={`w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 mb-6 ${styles.field}`}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Add Email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full ${styles.field}`}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    className={`block font-semibold text-sm mb-2 ${styles.label}`}
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className={`w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 mb-6 ${styles.field}`}>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Add Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full  ${styles.field}`}
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-xs">{errors.phone}</span>
                    )}
                  </div>
                </div>

                {/* Country */}
                <div>
                  <label
                    className={`block font-semibold text-sm mb-2 ${styles.label}`}
                  >
                    Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={`w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 mb-4 cursor-pointer ${styles.field}`}
                  >
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="Canada">Canada</option>
                  </select>
                  {errors.country && (
                    <span className="text-red-500 text-xs">{errors.country}</span>
                  )}
                </div>

                {/* Organization Type */}
                <div>
                  <label
                    className={`block font-semibold text-sm mb-2 ${styles.label}`}
                  >
                    Organization Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="organizationType"
                    value={formData.organizationType}
                    onChange={handleChange}
                    className={`w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 mb-4 cursor-pointer ${styles.field}`}
                  >
                    <option value="">Select Organization Type</option>
                    <option value="Retail">Retail</option>
                    <option value="Agency">Agency</option>
                  </select>
                  {errors.organizationType && (
                    <span className="text-red-500 text-xs">{errors.organizationType}</span>
                  )}
                </div>

                {/* Industry */}
                <div>
                  <label
                    className={`block font-semibold text-sm mb-2 ${styles.label}`}
                  >
                    Industry <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className={`w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 mb-4 cursor-pointer ${styles.field}`}
                  >
                    <option value="">Select Industry</option>
                    <option value="IT">IT</option>
                    <option value="Healthcare">Healthcare</option>
                  </select>
                  {errors.industry && (
                    <span className="text-red-500 text-xs">{errors.industry}</span>
                  )}
                </div>

                <div className="border-b border-[#17100E66] pb-4">
                  <button
                    type="submit"
                    onClick={handleNext}
                    className="w-full bg-black text-white py-2 rounded-md font-semibold cursor-pointer"
                  >
                    Next
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-start">Step 1/2</p>
              </form>
            </motion.div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={variants.transition}
            >
              <h2
                className="text-[45px] md:text-3xl font-[400] mb-4"
                style={{ fontFamily: 'Erstoria' }}
              >
                {staticData.step2.title}
              </h2>
              <h3 className="text-xl font-semibold mb-1">
                {staticData.step2.subtitle}
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                {staticData.step2.description}
              </p>
              <form className="space-y-4">
                {/* Primary Promotional Method */}
                <div>
                  <label
                    className={`block font-semibold text-sm mb-2 ${styles.label}`}
                  >
                    Primary Promotional Method{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="promotionalMethod"
                    placeholder="Add Primary Promotional Method"
                    value={formData.promotionalMethod}
                    onChange={handleChange}
                    className={`w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 mb-4 ${styles.field}`}
                  />
                  {errors.promotionalMethod && (
                    <span className="text-red-500 text-xs">{errors.promotionalMethod}</span>
                  )}
                </div>

                {/* How did you hear */}
                <div>
                  <label
                    className={`block font-semibold text-sm mb-2 ${styles.label}`}
                  >
                    How did you hear about the program?{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="referralSource"
                    placeholder="Add referral source"
                    value={formData.referralSource}
                    onChange={handleChange}
                    className={`w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 mb-4 ${styles.field}`}
                  />
                  {errors.referralSource && (
                    <span className="text-red-500 text-xs">{errors.referralSource}</span>
                  )}
                </div>

                {/* Captcha */}
                <div>
                  <label
                    className={`block font-semibold text-sm mb-2 ${styles.label}`}
                  >
                    Enter the captcha <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="captcha"
                    placeholder="Enter Captcha"
                    value={formData.captcha}
                    onChange={handleChange}
                    className={`w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 ${styles.field}`}
                  />
                  <p className="mt-1 text-orange-500 italic">epe6b4</p>
                  {errors.captcha && (
                    <span className="text-red-500 text-xs">{errors.captcha}</span>
                  )}
                </div>

                {/* Terms and Declaration */}
                <div className="space-y-4">
                  <label className="flex items-start gap-2 text-sm">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    I accept the lorem Ipsum agreement, Terms of Service and Privacy Policy
                  </label>
                  {errors.acceptTerms && (
                    <span className="text-red-500 text-xs">{errors.acceptTerms}</span>
                  )}
                  <label className="flex items-start gap-2 text-sm">
                    <input
                      type="checkbox"
                      name="acceptDeclaration"
                      checked={formData.acceptDeclaration}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    I declare that I am not: (i) a Lorem Ipsum reseller partner or their employee or relative, and agree not to participate in any other partnership program offered by Lorem Ipsum at least for a period of 12 months or (ii) a Lorem Ipsum employee or their relative
                  </label>
                  {errors.acceptDeclaration && (
                    <span className="text-red-500 text-xs">{errors.acceptDeclaration}</span>
                  )}
                </div>

                <div className="border-b border-[#17100E66] pb-4">
                  <button
                    type="submit"
                    onClick={handleNext}
                    className="w-full bg-black text-white py-2 rounded-md font-semibold cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-start">Step 2/2</p>
              </form>
            </motion.div>
          )}

          {/* Step 3 (Success) */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={variants.transition}
            >
              <div className="flex flex-col items-center justify-center min-h-64 text-center px-4 gap-2">
                <h1
                  className="font-[400] text-[40px]"
                  style={{ fontFamily: 'Erstoria' }}
                >
                  Thanks!
                </h1>
                <p
                  className="font- text-[20px]"
                  style={{ fontFamily: 'Erstoria' }}
                >
                  A member of the team will be in
                  <br />
                  touch with you shortly.
                </p>
                <button
                  onClick={handleSubmit}
                  className="w-full cursor-pointer mt-4 text-[13px] md:text-[14px] lg:text-[16px] bg-black text-white py-2 rounded font-semibold hover:bg-gray-800 transition active:bg-gray-600"
                >
                  Finish
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Right: Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className='relative w-full aspect-[725/844]'>
            <Image
              src={icons.joinFormImage}
              alt="Handshake Illustration"
              fill
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinFormSection;
