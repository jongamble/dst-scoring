import { defaultScoringValues } from '../helpers';

const initialState = defaultScoringValues;

const setScoring = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SCORING':
      return {
        ...state,
        [action.key]: action.value,
      }
    default:
      return state
  }
}

export default setScoring;