"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const jobListings = [
  {
    title: "UI/UX Designer",
    location: "Ahmedabad",
    positions: 2,
    featured: true,
  },
  // {
  //   title: "React Developer",
  //   location: "Ahmedabad",
  //   positions: 3,
  //   featured: false,
  // },
  // {
  //   title: "Python",
  //   location: "Ahmedabad",
  //   positions: 1,
  //   featured: false,
  // },
  // {
  //   title: "Motion Graphics Designer",
  //   location: "Ahmedabad",
  //   positions: 5,
  //   featured: false,
  // },
  // {
  //   title: "Digital Marketing Executive",
  //   location: "Ahmedabad",
  //   positions: 1,
  //   featured: false,
  // },
  // {
  //   title: "AI/ML Engineer (Intern)",
  //   location: "Ahmedabad",
  //   positions: 4,
  //   featured: false,
  // },
  // {
  //   title: "Senior QA Engineer",
  //   location: "Ahmedabad",
  //   positions: 3,
  //   featured: false,
  // },
  // {
  //   title: "Sales Manager",
  //   location: "Ahmedabad",
  //   positions: 1,
  //   featured: false,
  // },
]

export default function OpenRoles() {
  const [selectedJob, setSelectedJob] = useState(0) // Default to first job (UI/UX Designer)

  const handleJobClick = (index) => {
    setSelectedJob(index)
  }

  return (
    <section className="open-roles py-[20px] md:py-[30px] lg:py-[50px]">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-[25px] md:mb-[30px] lg:mb-[40px]">
          <h2 className="text-goldenBrown mb-[18px] md:mb-[20px] lg:mb-[25px]">Open Roles</h2>
          <h3 className="text-cocoa mb-[10px]">Got other ideas?</h3>
          <p>
            Send Us your portfolio and CV to{" "}
            <a href="mailto:hr@aisante.in" className="text-black underline hover:text-goldenBrown transition-colors">
              hr@aisante.in
            </a>
          </p>
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
          {jobListings.map((job, index) => (
            <Link href="/career-details">
              <div
                key={index}
                onClick={() => handleJobClick(index)}
                className={`
              rounded-[10px] px-[15px] py-[10px] md:px-[25px] md:py-[16px] flex items-center justify-between cursor-pointer
              transition-all duration-200 hover:scale-[1.02] hover:shadow-lg
              ${selectedJob === index ? "bg-black text-white" : "bg-iceBlue text-gray-800 hover:bg-ice"}
            `}
              >
                <div className="flex-1 min-w-0">
                  <h4 className="text-[14px] md:text-[18px] font-medium mb-[10px] truncate pr-2">{job.title}</h4>
                  <p className={`text-xs sm:text-sm ${selectedJob === index ? "text-gray-300" : "text-gray-500"}`}>
                    {job.location}
                  </p>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                  <span
                    className={`text-[14px] md:text-[18px] font-medium mb-[10px] ${selectedJob === index ? "text-white" : "text-gray-800"}`}
                  >
                    {job.positions} Position{job.positions > 1 ? "s" : ""}
                  </span>
                  <ArrowUpRight
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${selectedJob === index ? "text-white" : "text-gray-600"}`}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
