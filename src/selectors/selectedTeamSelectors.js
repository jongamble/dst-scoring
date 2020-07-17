export const getSelectedTeam = (state) => state.selectedTeam;
export const getSelectedTeamGames = (state) => state.selectedTeam?.games || [];