const setScoring = (state = [], action) => {
  switch (action.type) {
    case 'SET_SCORING':
      return {
        ...state,
        values: {
          ...state.values,
          [action.key]: action.value,
        }
      }
    default:
      return state
  }
}

export default setScoring;