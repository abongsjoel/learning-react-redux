import { createStore } from 'redux';

const initialState = {
  muffins: [
    { id: 1, name: 'Chocolate chip muffin', likes: 11 },
    { id: 2, name: 'Blueberry muffin', likes: 10 },
  ],
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    default: 
      return state;
  }
};

const store = createStore( reducer );

export default store;