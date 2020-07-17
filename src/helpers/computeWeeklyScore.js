const computePointsAllowed = (pointsAllowed) => {
  if (pointsAllowed === 0) return 'pointsAllowed0';
  if (pointsAllowed < 7) return 'pointsAllowed6';
  if (pointsAllowed < 14) return 'pointsAllowed13';
  if (pointsAllowed < 21) return 'pointsAllowed20';
  if (pointsAllowed < 28) return 'pointsAllowed27';
  if (pointsAllowed < 35) return 'pointsAllowed34';
  return 'pointsAllowed35';
}

const computeYardsAllowed = (yardsAllowed) => {
  if (yardsAllowed < 100) return 'yardsAllowed99';
  if (yardsAllowed < 200) return 'yardsAllowed199';
  if (yardsAllowed < 300) return 'yardsAllowed299';
  if (yardsAllowed < 400) return 'yardsAllowed399';
  if (yardsAllowed < 500) return 'yardsAllowed499';
  return 'yardsAllowed500';
}

export const computeWeeklyScore = (weeklyStats, scoringRules) => {
  console.log('weeklyStats', weeklyStats);
  console.log('scoringRules', scoringRules);
  return Object.keys(weeklyStats).reduce((acc, stat) => {
    
    switch (stat) {
      case 'pointsAllowed':
        const pointsAllowed = weeklyStats[stat];
        const computedPointsAllowed = computePointsAllowed(pointsAllowed);
        acc += parseInt(scoringRules[computedPointsAllowed]);
        break;
      case 'yardsAllowed':
        const yardsAllowed = weeklyStats[stat];
        acc += parseInt(scoringRules[computeYardsAllowed(yardsAllowed)])
        break;
      default:
        acc += scoringRules[stat] * weeklyStats[stat];
        break;
    }
    return acc;
  }, 0)
}