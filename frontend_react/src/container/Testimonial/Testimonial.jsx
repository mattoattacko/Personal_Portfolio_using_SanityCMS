import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';


const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query)
      .then((data) => {
        setTestimonials(data);
    });

    client.fetch(brandsQuery)
      .then((data) => {
        setBrands(data);
    });
  }, []);

  const testis = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            {/* Get the current index of a specific testimonial, and get the img url of that specific testimonial */}
            <img src={urlFor(testis.imgurl)} alt='testimonial' />
            <div className='app__testimonial-content'>
              <p className='p-text'>{testis.feedback}</p>
              <div>
                <h4 className='bold-text'>{testis.name}</h4>
                <h4 className='p-test'>{testis.company}</h4>
              </div>
            </div>
          </div>

          {/* Move across different testimonials */}
          {/* we provide the number of the testimonial we want to see in the onClick */}
          {/* if we are already on the first index, then we cant go back. So we cant just use 'currentIndex - 1' */}
          {/* if the current index is equal to zero then we move to 'testimonials.length - 1'. So we move to the last testimonial */}
          {/* if we are not on the first one, we can go back. So 'currentIndex - 1' */}
          <div className='app__testimonial-btns app__flex'>
            <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex) }>
              <HiChevronLeft />
            </div>          
            <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1) }>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      {/* Move across different brands */}
      <div className='app__testimonial-brands app__flex'>
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'Testimonial',
  'app__primarybg',
);
