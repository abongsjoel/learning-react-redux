import React from 'react';

import { useSelector  } from 'react-redux';

import { selectedMuffinsArray } from '../../redux/selectors';

const Muffins = () => {
  const muffins = useSelector(selectedMuffinsArray);

  console.log({ muffins});

  return (
    <ul>
      {muffins.map((muffins) => {
        return <li key={muffins.id}>{muffins.name}</li>
      })}
    </ul>
  )
}

export default Muffins;