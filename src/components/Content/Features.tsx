"use client";
import { motion, useInView } from "framer-motion";
import {
  BriefcaseIcon,
  UserCheck,
  UserPlus,
  ClipboardList,
  GlobeIcon,
  BarChart2Icon,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const Features = () => {
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has already triggered
  const sectionRef = useRef<HTMLDivElement>(null); // Reference to the section
  const isInView = useInView(sectionRef); // Hook to check if section is in view

  useEffect(() => {
    // Trigger animation only once when the section comes into view
    if (isInView && !hasAnimated) {
      setHasAnimated(true); // Mark the animation as triggered
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3 }}
      className="py-32 font-poppins"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            className=" font-poppins text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj"
          >
            Empower Your Recruitment with Our Comprehensive Placement Portal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj"
          >
            Streamline job postings, application tracking, and student-company
            interactions for an efficient placement process.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-2 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-4 xl:mt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="p-12 card bg-primary-content"
          >
            <BriefcaseIcon className="mx-auto" size={32} />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Job Postings
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Companies can post new job openings, making it easy for students
              to view and apply for relevant positions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="p-12 card bg-primary-content"
          >
            <ClipboardList className="mx-auto" size={32} />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Application Management
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Track and manage all applications in one place, ensuring a smooth
              process for both students and recruiters.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9 }}
            className="p-12 card bg-primary-content"
          >
            <UserCheck className="mx-auto" size={32} />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Candidate Shortlisting
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Shortlist candidates based on qualifications and performance to
              streamline the interview process.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="p-12 card bg-primary-content"
          >
            <UserPlus className="mx-auto" size={32} />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Student Profiles
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Students can create and update profiles, showcasing their skills,
              experience, and certifications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.1 }}
            className="p-12 card bg-primary-content"
          >
            <GlobeIcon className="mx-auto" size={32} />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Secure Access for Companies
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Companies can access only their respective sections, maintaining
              data privacy and secure collaboration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="p-12 card bg-primary-content"
          >
            <BarChart2Icon className="mx-auto" size={32} />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Analytics and Reporting
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Track key metrics like student applications, job views, and
              placement success rates for better insights.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
