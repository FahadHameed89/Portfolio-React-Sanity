import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

const currentTestimonialIndex = testimonials[currentIndex];

  return (
    <>
        {testimonials.length && (
          <>
          <div className='app__testimonial-item app__flex'>
            <img src={urlFor(currentTestimonialIndex.imgurl)} alt="testimonial" />
            <div className='app__testimonial-content'>
                <p className='p-text'>{currentTestimonialIndex.feedback}</p>
                <div>
                  <h4 className='bold-text'>{currentTestimonialIndex.name}</h4>
                  <h5 className='p-text'>{currentTestimonialIndex.company}</h5>
                </div>
            </div>
          </div>
          </>
        )}
        
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  "app__primarybg"
  );