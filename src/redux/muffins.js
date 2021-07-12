export const likeMuffin = (muffinId) => ({
  type: 'muffin/like',
  payload: { id: muffinId }
})

export const loadMuffins = () => async (dispatch) => {
  dispatch({
    type: 'muffins/load_request',
  });

  try {
    const response = await fetch(
      'http://localhost:3001/muffins'
    );
    const data = await response.json();

    dispatch({
      type: 'muffins/load_success',
      payload: {
        muffins: data,
      },
    });
  } catch (e) {
    dispatch({
      type: 'muffins/load_failure',
      error: 'Failed to load muffins',
    });
  }
}

export const selectMuffinsState = (rootState) => rootState.muffins;
export const selectMuffinsArray = (rootState) => selectMuffinsState(rootState).muffins;
export const selectMuffinsLoading = (rootState) => selectMuffinsState(rootState).selectMuffinsLoading;
export const selectMuffinsLoadError = (rootState) => selectMuffinsState(rootState).error;

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

export default reducer;