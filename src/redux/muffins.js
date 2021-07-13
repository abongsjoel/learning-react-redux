import { createReducer, createAction, createAsyncThunk } from '@reduxjs/toolkit';

// export const likeMuffin = (muffinId) => ({
//   type: 'muffin/like',
//   payload: { id: muffinId }
// })
export const likeMuffin = createAction(
  'muffins/like',
  (muffinId) => {
    return { payload: {id: muffinId }}
  }
)

export const loadMuffins = createAsyncThunk(
  'muffins/load',
  async () => {
    const response = await fetch(
      'http://localhost:3001/muffins'
    );
    const muffins = await response.json();
    return { muffins };
  }
)

export const selectMuffinsState = (rootState) => rootState.muffins;
export const selectMuffinsArray = (rootState) => selectMuffinsState(rootState).muffins;
export const selectMuffinsLoading = (rootState) => selectMuffinsState(rootState).selectMuffinsLoading;
export const selectMuffinsLoadError = (rootState) => selectMuffinsState(rootState).error;

const initialState = {
  muffins: [],
};

const reducer = createReducer(initialState, {
  [likeMuffin]: (state, action) => {
    const muffinToLike = state.muffins.find(muffin => muffin.id === action.payload.id);
    muffinToLike.likes += 1;
  },

  [loadMuffins.pending]: (state) => {
    state.muffinsloading = true;
  },

  [loadMuffins.fulfilled]: (state, action) => {
    state.muffinsloading = false;
    state.muffins = action.payload.muffins;
  },

  [loadMuffins.rejected]: (state) => {
    state.muffinsloading = false;
    state.error = 'Failed to load muffins.';
  },

});

export default reducer;