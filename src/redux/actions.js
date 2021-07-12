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