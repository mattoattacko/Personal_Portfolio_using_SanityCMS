import React from 'react'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'
import { images } from '../../constants'
import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className='badge-cmp app__flex'>
            <span>🌴</span>
            <div style={{ marginLeft: 10 }}>
              <p className='p-text'>Aloha! My name is</p>
              <h1 className='head-text'>Matthew</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Fullstack</p>
            <p className='p-text'>Web Developer</p>
          </div>          
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.mattFixed02} alt='profile background'/>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile circle'
          className='overlay_circle'
        />

      </motion.div>

      {/* Variants let us scale different elements in a div */}
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      > 
        {[images.javascript, images.react, images.node].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}> 
            <img src={circle} alt='circle'/>
          </div>
        ))}
      </motion.div>


    </div>
  )
}

export default AppWrap(Header, 'Home');