import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  muffins: [],
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

    case 'muffins/load_request':
      return { ...state, muffinsloading: true};

    case 'muffins/load_success':
      const { muffins } = action.payload;
      return { ...state, muffinsloading: false, muffins }

    case 'muffins/load_failure':
      const { error } = action;
      return { ...state, muffinsloading: false, error }
      
    default: 
      return state;
  }
};

const store = createStore( reducer, applyMiddleware(thunk) );

export default store;