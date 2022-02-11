import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';


function App() {
  const [reviews, setReviews] = useState(data)
  const [value, setValue] = useState(0)


  useEffect(() => {
    const lastIndex = reviews.length - 1;
    if (value < 0) {
      setValue(lastIndex);
    }
    if (value > lastIndex) {
      setValue(0);
    }
  }, [value, reviews]);

  useEffect(() => {
    let slider = setInterval(() => {
      setValue(value + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [value]);

  const {id, image, name, title, quote} = reviews[value];

  return (
  <main>
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>Slider
        </h2>
      </div>

      <div className='section-center'>
        {reviews.map((review, index) => {
          const {id, image, name, title, quote} = review

          let position = 'nextSlide';
          if (index === value) {
            position = 'activeSlide';
          }
          if (
            index === value - 1 ||
            (value === 0 && value === reviews.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article className={position} key={id}>
              <img className='person-img' src={image} alt={name}/>
              <h4>{name}</h4>
              <div className='title'>{title}</div>
              <div className='text'>{quote}</div>
              <FaQuoteRight className='icon'/>
            </article>
          )
        })} 
            <button className='prev' onClick={() => setValue(value - 1)}>
              <FiChevronLeft/>
            </button>
            <button className='next' onClick={() => setValue(value + 1)}>
              <FiChevronRight/>
            </button>
      </div>
    </section>
  </main>
  )
}

export default App;