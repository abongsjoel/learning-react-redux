import React, { useEffect } from 'react';

import { useSelector, useDispatch  } from 'react-redux';

import { selectMuffinsArray, selectMuffinsLoadError, selectMuffinsLoading } from '../../redux/muffins';
import { likeMuffin, loadMuffins  } from '../../redux/muffins';

const Muffins = () => {
  const muffins = useSelector(selectMuffinsArray);
  const muffinsLoading = useSelector(selectMuffinsLoading);
  const loadError = useSelector(selectMuffinsLoadError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMuffins())
  }, [dispatch])
  
  return muffinsLoading ? (
    <p>Loading...</p>
  ) : loadError ? (
    <p>{ loadError }</p>
  ) : (
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