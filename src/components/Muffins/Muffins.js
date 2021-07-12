import React, { useEffect } from 'react';

import { useSelector, useDispatch  } from 'react-redux';

import { selectedMuffinsArray, selectMuffinsLoadError, selectMuffinsLoading } from '../../redux/selectors';
import { likeMuffin, loadMuffins  } from '../../redux/actions';

const Muffins = () => {
  const muffins = useSelector(selectedMuffinsArray);
  const muffinsLoading = useSelector(selectMuffinsLoading);
  const loadError = useSelector(selectMuffinsLoadError);

  const dispatch = useDispatch();

  console.log({ muffins, muffinsLoading, loadError});

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