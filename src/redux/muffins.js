import { createReducer } from '@reduxjs/toolkit';

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

const reducer = createReducer(initialState, {
  'muffins/like': (state, action) => {
    const muffinToLike = state.muffins.find(muffin => muffin.id === action.payload.id);
    muffinToLike.likes += 1;
  },

  'muffins/load_request': (state) => {
    state.muffinsloading = true;
  },

  'muffins/load_success': (state, action) => {
    state.muffinsloading = false;
    state.muffins = action.payload.muffins;
  },

  'muffins.load_failure': (state, action) => {
    state.muffinsloading = false;
    state.error = action.error;
  },

});

export default reducer;