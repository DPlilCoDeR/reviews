import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    let initialPosition = 0;
    const [position, setPosition] = useState(initialPosition)
    const [peopleState, _setPeopleState] = useState(people);

    const prevReview = () => {
        if (position > initialPosition) {
            let actualPosition = position;
            let newPosition = -- actualPosition;
            setPosition(newPosition);
        }
    };

    const nextReview = () => {
        if (position < peopleState.length -1) {
            let actualPosition = position;
            let newPosition = ++ actualPosition;
            setPosition(newPosition);
        }
    };

    const randReview = () => {
        const randomPosition = Math.floor(Math.random() * peopleState.length);
        if (randomPosition !== position) {
            setPosition(randomPosition);
        }
    };

    return (
        
        <section className='review'>
                <FaQuoteRight className='quote-icon'/>
                <div className='img-container'>
                    <img className='person-img' src={peopleState[position].image}/>
                </div>
                <h4 className='author'>
                    {peopleState[position].name}
                </h4>
                <p className='job'>
                    {peopleState[position].job}
                </p>
                <p className='info'>{peopleState[position].text}</p>
                <button onClick={prevReview} className='prev-btn'><FaChevronLeft/></button>
                <button onClick={nextReview} className='next-btn'><FaChevronRight/></button>
                <button onClick={randReview} className='random-btn'>Suprise Me!</button>
        </section>
    )
};

export default Review;