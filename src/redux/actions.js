export const likeMuffin = (muffinId) => ({
  type: 'muffin/like',
  payload: { id: muffinId }
})