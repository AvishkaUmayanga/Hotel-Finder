import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({rating})=>{
    const starArray = [1,2,3,4,5]

    return(
        <div>
          {starArray.map(i =>(
            <FontAwesomeIcon key={1}
             icon={faStar}
             color={rating >= i ? '#F44336' : 'lightGray'}
             className='w-3 '
            />
          ))}
        </div>
    )
}

export default StarRating;
