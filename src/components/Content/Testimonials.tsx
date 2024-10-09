"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { StarIcon } from "lucide-react";

export const Testimonials = () => {
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
    <section ref={ref} className="py-32">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={cardVariants} className="text-center">
              <p className="text-lg font-medium text-gray-600 font-pj">
                Discover How We Have Transformed Their Hiring Experience
              </p>
              <h2 className="font-poppins mt-4 text-3xl font-bold text-neutral sm:text-4xl xl:text-5xl">
                What Our Clients Say
              </h2>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="mt-8 text-center md:mt-16 md:order-3"
            >
              <a
                href="#"
                title=""
                className="pb-2 text-base font-bold leading-7 text-neutral transition-all duration-200 border-b-2 border-neutral hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-neutral focus:ring-offset-2 hover:text-gray-600"
              >
                Check all 2,157 reviews
              </a>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="relative mt-10 md:mt-24 md:order-2"
            >
              <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                <div
                  className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(var(--pc)) -0.55%, oklch(var(--pc)) 22.86%, oklch(var(--pc)) 48.36%, oklch(var(--pc)) 73.33%, oklch(var(--pc)) 99.34%)",
                  }}
                ></div>
              </div>

              <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                {[...Array(3)].map((_, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="flex flex-col overflow-hidden shadow-xl"
                  >
                    <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                      <div className="flex-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, starIndex) => (
                            <StarIcon
                              key={starIndex}
                              size={18}
                              className="text-neutral"
                            />
                          ))}
                        </div>

                        <blockquote className="flex-1 mt-8">
                          <p className="text-lg leading-relaxed text-neutral font-pj">
                            “This has been an incredible solution that has
                            transformed our hiring process!”
                          </p>
                        </blockquote>
                      </div>

                      <div className="flex items-center mt-8">
                        <img
                          className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                          src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                          alt=""
                        />
                        <div className="ml-4">
                          <p className="text-base font-bold text-neutral font-pj">
                            Leslie Alexander
                          </p>
                          <p className="mt-0.5 text-sm font-pj text-gray-600">
                            CEO, Googee
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
