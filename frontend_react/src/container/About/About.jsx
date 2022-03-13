import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import './About.scss'
import { urlFor, client } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'


// Changed these static 'abouts' cards to a more dynamic approach using the Sanity CMS client. Easier for future updates.
// const abouts = [
//   { title: 'Web Development', description: 'I am a good web developer', imgUrl: images.about01 },
//   { title: 'Frontend Development', description: 'I am a good web developer', imgUrl: images.about02 },
//   { title: 'Backend Development', description: 'I am a good web developer', imgUrl: images.about03 },
//   { title: 'MERN Stack', description: 'I am a good web developer', imgUrl: images.about04 },
// ]

const About = () => {
  const [abouts, setAbouts] = useState([]);

  //fetches about section
  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query)
      .then((data) => setAbouts(data));
  }, [])
  
  return (
    <>
      <h2 className='head-text'><span>Good Development</span> <br /> means <span>Good Business</span></h2>

      <div className='app__profiles'> 
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'About',
  'app__whitebg'
);
  //'about' is the id we want to scroll to