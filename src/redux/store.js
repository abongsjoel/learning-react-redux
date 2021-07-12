import { createStore } from 'redux';

const initialState = {
  muffins: [
    { id: 1, name: 'Chocolate chip muffin', likes: 11 },
    { id: 2, name: 'Blueberry muffin', likes: 10 },
  ],
};

const reducer = (state = initialState, action) => {
  
  switch(action.type) {
    case 'muffin/like':
      const { id } = action.payload;
      return {
        ...state,
        muffins: state.muffins.map((muffin) => {
          if(muffin.id === id) {
            return {...muffin, likes: muffin.likes + 1};
          }
          return muffin;
        })
      }
    default: 
      return state;
  }
};

const store = createStore( reducer );

export default store;