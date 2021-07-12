import React from 'react';

import { useSelector, useDispatch  } from 'react-redux';

import { selectedMuffinsArray } from '../../redux/selectors';
import { likeMuffin  } from '../../redux/actions';

const Muffins = () => {
  const muffins = useSelector(selectedMuffinsArray);

  const dispatch = useDispatch();

  
  console.log({ muffins});
  
  return (
    <ul>
      {muffins.map((muffin) => {
      const handleLike = () => {
        dispatch(likeMuffin(muffin.id))
      }
        return (
          <li key={muffin.id}>
            {muffin.name} 
            <button onClick={handleLike}>Like</button>
            <i>{muffin.likes}</i>
          </li>
        )
      })}
    </ul>
  )
}

export default Muffins;