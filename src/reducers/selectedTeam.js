import { TEAMS } from '../data';

const selectedTeam = (state = [], action) => {
  switch (action.type) {
    case 'SET_SELECTED_TEAM':
      const teamInfo = TEAMS.find((x) => x.id === action.id) || {id: 'all', name: 'all', games: {}}
      return {
        ...state,
        id: teamInfo.id,
        name: teamInfo.name,
        games: teamInfo.games
      }
    default:
      return state
  }
}

export default selectedTeam;