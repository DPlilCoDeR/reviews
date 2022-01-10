import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    let positionArray = 0;
    const [peopleState, setPeopleState] = useState(people)
    console.log(peopleState)
    return (
        <section>
                {peopleState[positionArray].name} <br/>
                {peopleState[positionArray].job}
            <img src={peopleState[positionArray].image}/>
            <p>{peopleState[positionArray].text}</p>
        </section>
    )
};

export default Review;