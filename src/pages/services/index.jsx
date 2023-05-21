import React, { useState } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div>
      <motion.h1>Company History</motion.h1>

      <motion.p>
        Our company was founded in 2000 by two friends who shared a passion for
        technology. We started out as a small startup, but we quickly grew to
        become a leading provider of software solutions.
      </motion.p>

      <motion.p>
        Over the years, we have helped thousands of businesses to improve their
        operations. We are committed to providing our customers with the best
        possible service, and we are always looking for new ways to innovate.
      </motion.p>

      <motion.button onClick={() => setIsVisible(!isVisible)}>
        Learn More
      </motion.button>

      {isVisible && (
        <motion.motion.section
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate="visible"
        >
          <motion.h2>Our History</motion.h2>

          <motion.p>
            In 2000, two friends with a passion for technology founded our
            company. We started out as a small startup, but we quickly grew to
            become a leading provider of software solutions.
          </motion.p>

          <motion.p>
            Over the years, we have helped thousands of businesses to improve
            their operations. We are committed to providing our customers with
            the best possible service, and we are always looking for new ways to
            innovate.
          </motion.p>

          <motion.p>
            We are proud of our history and we are excited about the future. We
            are committed to continuing to provide our customers with the best
            possible service and to helping them to succeed.
          </motion.p>
        </motion.motion.section>
      )}
    </motion.div>
  );
};

export default Services;
