import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';


function App() {
  const [reviews, setReviews] = useState(data)
  const [value, setValue] = useState(0)

  const slide = () => {
    if (value == reviews.length - 1) {
      setValue(0)
      return
    }
    if(value <= reviews.length - 1){
      setValue(value + 1)
    }
  }

  useEffect(() => {
    setTimeout(slide, 3000)
  })

  const {id, image, name, title, quote} = reviews[value];

  return <main>
    <section>
      <div className='title'>
        
        <h2>Slider</h2>
      </div>

    </section>
    <section className='section-center'>
      <article>
          <h4>{name}</h4>
          <img className='person-img' src={image}/>
          <div className='title'>{title}</div>
          <div className='text'>{quote}</div>
      </article>
    </section>
  </main>;
}

export default App;