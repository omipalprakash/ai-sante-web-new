"use client";
import React, { useState } from "react";

const ApplicationForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        totalExperience: "",
        linkedinProfile: "",
        currentSalary: "",
        expectedSalary: "",
        reasonToLeave: "",
        currentLocation: "",
        currentCompany: "",
        howDidYouHear: "",
    });

    const [resumeFile, setResumeFile] = useState(null);
    const [errors, setErrors] = useState({});

    // Input Change Handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    // Dropdown Change Handler (if needed for custom dropdowns)
    const handleDropdownChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    // Resume File Select
    const handleResumeSelect = (file) => {
        setResumeFile(file);
        if (errors.resume) {
            setErrors({ ...errors, resume: "" });
        }
    };

    // Email Validation
    const isValidEmail = (email) => {
        return email.includes("@") && email.includes(".");
    };

    // Step-wise Validation
    const validateStep = (currentStep) => {
        const newErrors = {};

        switch (currentStep) {
            case 1:
                if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
                if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
                if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
                if (!formData.email.trim()) {
                    newErrors.email = "Email is required";
                } else if (!isValidEmail(formData.email)) {
                    newErrors.email = "Please enter a valid email";
                }
                break;
            case 2:
                if (!resumeFile) newErrors.resume = "Please upload your resume";
                break;
            case 3:
                if (!formData.totalExperience.trim()) newErrors.totalExperience = "Total experience is required";
                if (!formData.linkedinProfile.trim()) newErrors.linkedinProfile = "LinkedIn profile is required";
                if (!formData.currentSalary.trim()) newErrors.currentSalary = "Current salary is required";
                if (!formData.expectedSalary.trim()) newErrors.expectedSalary = "Expected salary is required";
                break;
            case 4:
                if (!formData.reasonToLeave.trim()) newErrors.reasonToLeave = "Reason to leave is required";
                if (!formData.currentLocation.trim()) newErrors.currentLocation = "Current location is required";
                if (!formData.currentCompany.trim()) newErrors.currentCompany = "Current company is required";
                if (!formData.howDidYouHear.trim()) newErrors.howDidYouHear = "This field is required";
                break;
            default:
                break;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Next Step Handler
    const nextStep = () => {
        if (validateStep(step)) {
            setStep(step + 1);
        }
    };

    // Prev Step Handler
    const prevStep = () => setStep(step - 1);

    // Step Circle Classes
    const getStepCircleClass = (num) => {
        return step >= num
            ? "w-[23px] h-[23px] md:w-[32px] md:h-[32px] lg:w-[46px] lg:h-[46px] rounded-full flex items-center justify-center border border-sage bg-sage text-white font-normal text-[12px] md:text-[14px] lg:text-[20px] shadow-md"
            : "w-[23px] h-[23px] md:w-[32px] md:h-[32px] lg:w-[46px] lg:h-[46px] rounded-full flex items-center justify-center border border-ice bg-ice text-charcoalGray font-normal text-[12px] md:text-[14px] lg:text-[20px]  shadow-md";
    };

    // Step Connector Classes
    const getConnectorClass = (num) => {
        return step > num
            ? "h-[4px] md:h-[6px] lg:h-[8px] rounded-[55px] w-[50px] md:w-[90px] lg:w-[131px] bg-sage"
            : "h-[4px] md:h-[6px] lg:h-[8px] rounded-[55px] w-[50px] md:w-[90px] lg:w-[131px] bg-ice";
    };

    // JSX Start
    return (
        <section className="w-full py-[40px] md:pt-[80px] md:pb-[49px] lg:pt-[100px] lg:pb-[55px]">
            <div className="max-w-[1404px] mx-auto px-4 sm:px-6 md:px-8">

                <h2 className="text-center text-sage mb-4">Apply for this job</h2>
                <p className="mb-[29px] text-center text-charcoalGray">
                    Please fill the form below to receive a quote for your project.<br />
                    Feel free to add as much detail as needed.
                </p>
                <div className="pt-[18px] pb-[26px] px-[10px] md:pt-[27px] md:pb-[60px] md:px-[44px]  lg:pt-[40px] lg:pb-[88px] lg:px-[64px] bg-white rounded-b-[34px] sm:rounded-3xl max-w-[1216px] min-h-[600px] mx-auto shadow-lg border border-[#EFF0F6]">
                    {/* Progress Circles */}
                    <div>
                        <div className="flex flex-wrap items-center mb-[19px] lg:mb-[27px] max-w-[727px] mx-auto  gap-1 sm:gap-4 justify-center">
                            {[1, 2, 3, 4].map((num, index) => (
                                <div key={num} className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                                    <div className={getStepCircleClass(num)}>{num}</div>
                                    {index < 3 && <div className={getConnectorClass(num)}></div>}
                                </div>
                            ))}
                        </div>
                        <div className="border border-gray max-w-[341px] md:max-w-[550px] lg:max-w-[798px] mx-auto mb-[22px] md:mb-[28px] lg:mb-[40px]" />
                    </div>

                    {/* Step 1 */}
                    {step === 1 && (
                        <div className="space-y-[35px] md:space-y-[53px] lg:space-y-[80px]">
                            <div className="grid grid-cols-1 gap-[15px] md:grid-cols-2 md:gap-y-[28px]  md:gap-x-[35px] lg:gap-y-[40px] lg:gap-x-[50px]">
                                {/* First Name */}
                                <div>
                                    <label className="block font-medium text-cocoa mb-[8px] md:mb-[10px] lg:mb-[15px]">
                                        First Name <span className="text-scarlet">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="Enter First Name"
                                        className="w-full px-[30px] py-2 min-h-[66px] border border-ice rounded-[46px] focus:outline-none shadow-[0_2px_6px_0_rgba(19,18,66,0.07)]"
                                    />
                                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                                </div>
                                {/* Last Name */}
                                <div>
                                    <label className="block font-medium text-cocoa mb-[8px] md:mb-[10px] lg:mb-[15px]">
                                        Last Name <span className="text-scarlet">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Enter Last Name"
                                        className="w-full px-[30px] py-2 min-h-[66px] border border-ice rounded-[46px] focus:outline-none shadow-[0_2px_6px_0_rgba(19,18,66,0.07)]"
                                    />
                                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                                </div>
                                {/* Phone Number */}
                                <div>
                                    <label className="block font-medium text-cocoa mb-[8px] md:mb-[10px] lg:mb-[15px]">
                                        Phone Number <span className="text-scarlet">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        placeholder="Enter Phone Number"
                                        className="w-full px-[30px] py-2 min-h-[66px] border border-ice rounded-[46px] focus:outline-none shadow-[0_2px_6px_0_rgba(19,18,66,0.07)]"
                                    />
                                    {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                                </div>
                                {/* Email */}
                                <div>
                                    <label className="block font-medium text-cocoa mb-[8px] md:mb-[10px] lg:mb-[15px]">Email <span className="text-scarlet">*</span></label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter Email"
                                        className="w-full px-[30px] py-2 min-h-[66px] border border-ice rounded-[46px] focus:outline-none shadow-[0_2px_6px_0_rgba(19,18,66,0.07)]"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    onClick={nextStep}
                                    className="max-w-[113px] min-h-[41px] rounded-[10px] px-[24px] py-[7px] bg-sage hover:bg-sageDark text-white font-erstoria cursor-pointer"
                                >
                                    Next Step
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                        <div className="space-y-[35px] md:space-y-[53px] lg:space-y-[80px]">
                            <h3 className="text-xl font-semibold text-sage mb-4">Upload Resume</h3>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    className="hidden"
                                    id="resume-upload"
                                    onChange={(e) => handleResumeSelect(e.target.files[0])}
                                />
                                <label htmlFor="resume-upload" className="cursor-pointer">
                                    <div className="text-gray-500 font-medium">
                                        {resumeFile ? `Selected: ${resumeFile.name}` : "Click to upload your resume (PDF, DOC, DOCX)"}
                                    </div>
                                </label>
                            </div>
                            {errors.resume && <p className="text-red-500 text-sm">{errors.resume}</p>}
                            <div className="flex justify-between mt-6">
                                <button
                                    onClick={prevStep}
                                    className="px-6 py-2 bg-ice text-charcoalGray rounded-md hover:bg-gray-400 hover:text-black cursor-pointer"
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={nextStep}
                                    className="px-6 py-2 bg-sage text-white rounded-md hover:bg-sageDark font-erstoria cursor-pointer"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3 */}
                    {step === 3 && (
                        <div className="space-y-[35px] md:space-y-[53px] lg:space-y-[80px]">
                            <h3 className="text-xl font-semibold text-sage mb-4">Experience Details</h3>
                            <div className="grid grid-cols-1 gap-[15px] md:grid-cols-2 md:gap-y-[28px]  md:gap-x-[35px] lg:gap-y-[40px] lg:gap-x-[50px]">

                                {/* Total Experience */}
                                <div>
                                    <label className="block font-medium text-cocoa mb-[8px] md:mb-[10px] lg:mb-[15px]">Total Experience <span className="text-scarlet">*</span></label>
                                    <input
                                        type="text"
                                        name="totalExperience"
                                        value={formData.totalExperience}
                                        onChange={handleChange}
                                        placeholder="e.g., 3 years"
                                        className="w-full px-[30px] py-2 min-h-[66px] border border-ice rounded-[46px] focus:outline-none shadow-[0_2px_6px_0_rgba(19,18,66,0.07)]"
                                    />
                                    {errors.totalExperience && <p className="text-red-500 text-sm mt-1">{errors.totalExperience}</p>}
                                </div>
                                {/* LinkedIn Profile */}
                                <div>
                                    <label className="block font-medium text-cocoa mb-[8px] md:mb-[10px] lg:mb-[15px]">LinkedIn Profile <span className="text-scarlet">*</span></label>
                                    <input
                                        type="url"
                                        name="linkedinProfile"
                                        value={formData.linkedinProfile}
                                        onChange={handleChange}
                                        placeholder="https://linkedin.com/in/yourprofile"
                                        className="w-full px-[30px] py-2 min-h-[66px] border border-ice rounded-[46px] focus:outline-none shadow-[0_2px_6px_0_rgba(19,18,66,0.07)]"
                                    />
                                    {errors.linkedinProfile && <p className="text-red-500 text-sm mt-1">{errors.linkedinProfile}</p>}
                                </div>
                                {/* Current Salary */}
                                <div>
                                    <label className="block font-medium text-cocoa mb-[8px] md:mb-[10px] lg:mb-[15px]">Current Salary <span className="text-scarlet">*</span></label>
                                    <input
                                        type="text"
                                        name="currentSalary"
                                        value={formData.currentSalary}
                                        onChange={handleChange}
                                        placeholder="e.g., $50,000"
                                        className="w-full px-[30px] py-2 min-h-[66px] border border-ice rounded-[46px] focus:outline-none shadow-[0_2px_6px_0_rgba(19,18,66,0.07)]"
                                    />
                                    {errors.currentSalary && <p className="text-red-500 text-sm mt-1">{errors.currentSalary}</p>}
                                </div>
                                {/* Expected Salary */}
                                <div>
                                    <label className="block font-medium text-cocoa mb-[8px] md:mb-[10px] lg:mb-[15px]">Expected Salary <span className="text-scarlet">*</span></label>
                                    <input
                                        type="text"
                                        name="expectedSalary"
                                        value={formData.expectedSalary}
                                        onChange={handleChange}
                                        placeholder="e.g., $60,000"
                                        className="w-full px-[30px] py-2 min-h-[66px] border border-ice rounded-[46px] focus:outline-none shadow-[0_2px_6px_0_rgba(19,18,66,0.07)]"
                                    />
                                    {errors.expectedSalary && <p className="text-red-500 text-sm mt-1">{errors.expectedSalary}</p>}
                                </div>
                            </div>
                            <div className="flex justify-between mt-6">
                                <button
                                    onClick={prevStep}
                                    className="px-6 py-2 bg-ice text-charcoalGray rounded-md hover:bg-gray-400 hover:text-black cursor-pointer"
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={nextStep}
                                    className="px-6 py-2 bg-sage text-white rounded-md hover:bg-sageDark font-erstoria cursor-pointer"
                                >
                                    Next
                                </button>

                            </div>
                        </div>
                    )}

                    {/* Step 4 */}
                    {step === 4 && (
                        <div className="space-y-[35px] md:space-y-[53px] lg:space-y-[80px]">
                            <h3 className="text-xl font-semibold text-sage mb-4">Additional Information</h3>
                            <div className="grid grid-cols-1 gap-[15px] md:grid-cols-2 md:gap-y-[28px]  md:gap-x-[35px] lg:gap-y-[40px] lg:gap-x-[50px]">
                                {/* Reason to Leave */}
                                <div>
                                    <label className="block font-medium text-cocoa mb-[8px] md:mb-[10px] lg:mb-[15px]">Reason to Leave <span className="text-scarlet">*</span></label>
                                    <textarea
                                        name="reasonToLeave"
                                        value={formData.reasonToLeave}
                                        onChange={handleChange}
                                        placeholder="Describe yourself here..."
                                        rows={3}
                                        className="w-full px-[30px] py-2 min-h-[66px] border border-ice rounded-[46px] focus:outline-none shadow-[0_2px_6px_0_rgba(19,18,66,0.07)]"
                                    />
                                    {errors.reasonToLeave && <p className="text-red-500 text-sm mt-1">{errors.reasonToLeave}</p>}
                                </div>
                                {/* Current Location */}
                                <div>
                                    <label className="block font-medium text-cocoa mb-[8px] md:mb-[10px] lg:mb-[15px]">Current Location <span className="text-scarlet">*</span></label>
                                    <input
                                        type="text"
                                        name="currentLocation"
                                        value={formData.currentLocation}
                                        onChange={handleChange}
                                        placeholder="e.g., New York, NY"
                                        className="w-full px-[30px] py-2 min-h-[66px] border border-ice rounded-[46px] focus:outline-none shadow-[0_2px_6px_0_rgba(19,18,66,0.07)]"
                                    />
                                    {errors.currentLocation && <p className="text-red-500 text-sm mt-1">{errors.currentLocation}</p>}
                                </div>
                                {/* Current Company */}
                                <div>
                                    <label className="block font-medium text-cocoa mb-[8px] md:mb-[10px] lg:mb-[15px]">Current Company <span className="text-scarlet">*</span></label>
                                    <input
                                        type="text"
                                        name="currentCompany"
                                        value={formData.currentCompany}
                                        onChange={handleChange}
                                        placeholder="e.g., ABC Corp"
                                        className="w-full px-[30px] py-2 min-h-[66px] border border-ice rounded-[46px] focus:outline-none shadow-[0_2px_6px_0_rgba(19,18,66,0.07)]"
                                    />
                                    {errors.currentCompany && <p className="text-red-500 text-sm mt-1">{errors.currentCompany}</p>}
                                </div>
                                {/* How Did You Hear */}
                                <div className="relative">
                                    <label className="block font-medium text-cocoa mb-[8px] md:mb-[10px] lg:mb-[15px]">
                                        How did you hear about us? <span className="text-scarlet">*</span>
                                    </label>

                                    <select
                                        name="howDidYouHear"
                                        value={formData.howDidYouHear}
                                        onChange={handleChange}
                                        className="w-full appearance-none px-[30px] py-2 min-h-[66px] border border-ice rounded-[46px] focus:outline-none shadow-[0_2px_6px_0_rgba(19,18,66,0.07)]"
                                    >
                                        <option value="">Select an option</option>
                                        <option value="Job Board">Job Board</option>
                                        <option value="Social Media">Social Media</option>
                                        <option value="Referral">Referral</option>
                                        <option value="Company Website">Company Website</option>
                                        <option value="Other">Other</option>
                                    </select>

                                    {/* Custom dropdown arrow with 5px right margin */}
                                    <svg
                                        className="absolute right-[15px] top-[75%] -translate-y-[75%] pointer-events-none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M5.5 7l4.5 4.5L14.5 7" />
                                    </svg>

                                    {errors.howDidYouHear && (
                                        <p className="text-red-500 text-sm mt-1">{errors.howDidYouHear}</p>
                                    )}
                                </div>

                            </div>
                            <div className="flex justify-between mt-6">
                                <button
                                    onClick={prevStep}
                                    className="px-6 py-2 bg-ice text-charcoalGray rounded-md hover:bg-gray-400 hover:text-black cursor-pointer"
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={nextStep}
                                    className="px-6 py-2 bg-sage text-white rounded-md hover:bg-sageDark font-erstoria cursor-pointer"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Thank You (Step 5) */}
                    {step === 5 && (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">🎉</div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Thank You!</h3>
                            <p className="text-gray-600 mb-6">
                                Your application has been submitted successfully. We'll get back to you soon!
                            </p>
                            <button
                                onClick={() => {
                                    setStep(1);
                                    setFormData({
                                        firstName: "",
                                        lastName: "",
                                        phoneNumber: "",
                                        email: "",
                                        totalExperience: "",
                                        linkedinProfile: "",
                                        currentSalary: "",
                                        expectedSalary: "",
                                        reasonToLeave: "",
                                        currentLocation: "",
                                        currentCompany: "",
                                        howDidYouHear: "",
                                    });
                                    setResumeFile(null);
                                    setErrors({});
                                }}
                                className="px-6 py-2 bg-sage text-white rounded-md hover:bg-sageDark font-erstoria cursor-pointer"
                            >
                                Submit Another Application
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ApplicationForm;
