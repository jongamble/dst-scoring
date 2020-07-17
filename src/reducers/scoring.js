import { SCORING_METRICS } from '../data';

const defaultScoringValues = SCORING_METRICS.reduce((acc, val) => {
  acc[val.id] = val.defaultValue
  return acc;
}, {});
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