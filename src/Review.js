import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    let positionArray = 0;
    const [peopleState, setPeopleState] = useState(people)
    console.log(peopleState)
    return (
        <section className='review'>
                <FaQuoteRight className='quote-icon'/>
                <div className='img-container'>
                    <img className='person-img' src={peopleState[positionArray].image}/>
                </div>
                <h4 className='author'>
                    {peopleState[positionArray].name}
                </h4>
                <p className='job'>
                    {peopleState[positionArray].job}
                </p>
                <p className='info'>{peopleState[positionArray].text}</p>
                <button className='prev-btn'><FaChevronLeft/></button>
                <button className='next-btn'><FaChevronRight/></button>
                <button className='random-btn'>Suprise Me!</button>
        </section>
    )
};

export default Review;