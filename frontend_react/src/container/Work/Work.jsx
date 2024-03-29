import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss'


const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  //fetches our portfolio data 
  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      });
  }, []);


  // The little pill buttons //
  // Handles pill filtering and animations //
  const handleWorkFilter = (item) => {
    setActiveFilter(item);

    //Retriggers the shuffle animation of the cards once category is changed
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  }

  return (
    <>
      <h2 className='head-text'>My Creative <span>Portfolio</span></h2>

      <div className='app__work-filter'>
        {['All', 'JavaScript', 'React', 'React Native', 'TypeScript', 'NextJS', 'CSS/SCSS', 'Tailwind', 'Material UI', 'Bootstrap', 'Sanity CMS', 'GraphQL', 'Social', 'Artificial Intelligence', 'Crypto', 'Metaverse'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>


      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">

              {/* Project Images */}
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div 
                whileHover={{ opacity: [0, 1]}}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>   

                <a href={work.codeLink} target="_blank" rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            {/* Title & Description */}
            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>{work.description}</p>

              <div className='app__work-tag app__flex'> 
                <p className='p-text'>{work.tags[0]}</p>
              </div>
            </div>

          </div>
        ))}
      </motion.div>
      <h2 className='smol_text'>Check Out My <a href='https://github.com/mattoattacko' target='_blank' rel='noreferrer' >Github</a> <span>for More Projects! </span></h2>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'Work',
  'app__primarybg'
);