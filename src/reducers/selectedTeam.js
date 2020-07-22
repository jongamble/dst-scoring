import { TEAMS } from '../data';

const INITIAL_STATE = {id: 'all', name: 'all', games: {}}
const selectedTeam = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_SELECTED_TEAM':
      const teamInfo = TEAMS.find((x) => x.id === action.id) || INITIAL_STATE;
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