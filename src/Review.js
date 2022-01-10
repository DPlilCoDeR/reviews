import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    let initialPosition = 0;
    const [position, setPosition] = useState(initialPosition)
    const {name, job, image, text} = people[position]

    const prevReview = () => {
        if (position > initialPosition) {
            let actualPosition = position;
            let newPosition = -- actualPosition;
            setPosition(newPosition);
        }
    };

    const nextReview = () => {
        if (position < people.length -1) {
            let actualPosition = position;
            let newPosition = ++ actualPosition;
            setPosition(newPosition);
        }
    };

    const randReview = () => {
        const randomPosition = Math.floor(Math.random() * people.length);
        if (randomPosition !== position) {
            setPosition(randomPosition);
        }
    };

    return (
        
        <article className='review'>
                <div className='img-container'>
                    <img className='person-img' src={image}/>
                    <span className='quote-icon'>
                        <FaQuoteRight />
                    </span>
                </div>
                <h4 className='author'>{name}</h4>
                <p className='job'>{job}</p>
                <p className='info'>{text}</p>
                <div className='button-container'>
                    <button onClick={prevReview} className='prev-btn'><FaChevronLeft/></button>
                    <button onClick={nextReview} className='next-btn'><FaChevronRight/></button>
                </div>
                <button onClick={randReview} className='random-btn'>Suprise Me!</button>
        </article>
    )
};

export default Review;