import { computeWeeklyScore } from './computeWeeklyScore';

export const computeYearlyScore = (teamYearScores, scoringRules) => {
  return Object.keys(teamYearScores).reduce((acc, week)=>{
    return acc + computeWeeklyScore(teamYearScores[week], scoringRules);
  }, 0)
}