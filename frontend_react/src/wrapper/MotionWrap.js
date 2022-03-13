// This stuff wraps our whole page so that it has more animations //
// HOC = higher order component //

import React from 'react';
import { motion } from 'framer-motion';


const MotionWrap = (Component, classNames) => function HOC() {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} //slowly animates in
      transition={{ duration: 0.5 }}
      className={`${classNames} app__flex`}
    >
      <Component />
    </motion.div>
  );
};

export default MotionWrap;