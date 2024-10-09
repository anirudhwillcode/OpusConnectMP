"use client";
import { motion, useInView } from "framer-motion";
import {
  BarChart2Icon,
  BrainCircuitIcon,
  Clock10Icon,
  MousePointer2,
  PhoneCallIcon,
  Settings2Icon,
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
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            className=" font-poppins text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj"
          >
            Revolutionize Your Hiring Process with Our Advanced Recruitment
            Software
          </motion.h2>
          <motion.p
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj"
          >
            Streamline Talent Acquisition, Simplify Workflow, and Find the
            Perfect Fit Faster Than Ever Before
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-2 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-4 xl:mt-24">
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="p-12 card bg-primary-content"
          >
            <BrainCircuitIcon className="mx-auto" size={32} />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              AI-Powered Candidate Sourcing
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Utilize advanced AI algorithms to identify and attract top talent
              from various sources, including job boards, social media
              platforms, and professional networks.
            </p>
          </motion.div>

          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="p-12 card bg-primary-content"
          >
            <MousePointer2 className="mx-auto" size={32} />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Efficient Applicant Tracking System (ATS)
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Streamline the recruitment process with a comprehensive ATS that
              allows you to manage applicants, track their progress, and
              collaborate with your hiring team seamlessly.
            </p>
          </motion.div>

          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9 }}
            className="p-12 card bg-primary-content"
          >
            <Settings2Icon className="mx-auto" size={32} />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Customizable Assessment Tools
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Create and administer customized assessments to evaluate
              candidates skills, competencies, and fit for the role, ensuring
              you make informed hiring decisions.
            </p>
          </motion.div>

          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="p-12 card bg-primary-content"
          >
            <Clock10Icon className="mx-auto" size={32} />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Automated Interview Scheduling
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Simplify the scheduling process and eliminate back-and-forth
              emails with automated interview scheduling tools that sync with
              your calendar and the candidate&apos;s availability.
            </p>
          </motion.div>

          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.1 }}
            className="p-12 card bg-primary-content"
          >
            <PhoneCallIcon className="mx-auto" size={32} />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Centralized Communication Hub
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Facilitate efficient communication between recruiters, hiring
              managers, and candidates with a centralized communication hub,
              ensuring everyone stays informed and engaged throughout the
              recruitment process.
            </p>
          </motion.div>

          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="p-12 card bg-primary-content"
          >
            <BarChart2Icon className="mx-auto" size={32} />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Comprehensive Analytics and Reporting
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Gain valuable insights into your recruitment efforts with
              comprehensive analytics and reporting tools, allowing you to track
              key metrics, identify trends, and optimize your hiring strategy
              for better results.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
