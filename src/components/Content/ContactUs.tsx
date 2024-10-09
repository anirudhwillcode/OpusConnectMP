"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  LocateIcon,
  MailIcon,
  MapIcon,
  PhoneIcon,
  PinIcon,
} from "lucide-react";

export const ContactUs = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section ref={ref} className="py-32 bg-gray-100">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-poppins text-3xl font-bold leading-tight text-neutral sm:text-4xl lg:text-5xl">
              Contact us
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
              Get in Touch with Us Today to Elevate Your Recruitment Strategy
            </p>
          </div>

          <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
              <motion.div
                variants={cardVariants}
                className="overflow-hidden bg-white rounded-xl"
              >
                <div className="p-6">
                  <PhoneIcon
                    size={32}
                    className="text-neutral-content mx-auto"
                  />
                  <p className="mt-6 text-lg font-medium text-neutral">
                    +1-123-456-1890
                  </p>
                  <p className="mt-1 text-lg font-medium text-neutral">
                    +1-123-456-1890
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={cardVariants}
                className="overflow-hidden bg-white rounded-xl"
              >
                <div className="p-6">
                  <MailIcon
                    size={32}
                    className="text-neutral-content mx-auto"
                  />
                  <p className="mt-6 text-lg font-medium text-neutral">
                    contact@example.com
                  </p>
                  <p className="mt-1 text-lg font-medium text-neutral">
                    info@example.com
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={cardVariants}
                className="overflow-hidden bg-white rounded-xl"
              >
                <div className="p-6">
                  <PinIcon size={32} className="text-neutral-content mx-auto" />
                  <p className="mt-6 text-lg font-medium leading-relaxed text-neutral">
                    8502 Some Rd. SomeWhere, CITY 98380, USA
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={cardVariants}
              className="mt-6 overflow-hidden bg-white rounded-xl"
            >
              <div className="px-6 py-12 sm:p-12">
                <h3 className="text-3xl font-semibold text-center text-neutral">
                  Send us a message
                </h3>

                <form action="#" method="POST" className="mt-14">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div>
                      <label className="text-base font-medium text-neutral">
                        {" "}
                        Your name{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="input input-bordered w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-base font-medium text-neutral">
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          placeholder="Your Email"
                          className="input input-bordered w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-base font-medium text-neutral">
                        {" "}
                        Phone number{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          placeholder="Your Phone Number"
                          className="input input-bordered w-full"
                        />
                      </div>{" "}
                    </div>
                    <div>
                      <label className="text-base font-medium text-neutral">
                        {" "}
                        Company name{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          placeholder="Company Name"
                          className="input input-bordered w-full"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-base font-medium text-neutral">
                        {" "}
                        Message{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <textarea
                          placeholder="Your Message"
                          className="textarea textarea-bordered textarea-lg w-full"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 text-center">
                    <button className="btn btn-neutral w-full">
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
