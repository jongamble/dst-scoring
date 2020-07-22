import { SCORING_METRICS } from '../data';

export const defaultScoringValues = SCORING_METRICS.reduce((acc, val) => {
  acc[val.id] = val.defaultValue
  return acc;
}, {});