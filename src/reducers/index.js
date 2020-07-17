import { combineReducers } from "@reduxjs/toolkit";
import selectedTeam from './selectedTeam';
import scoring from './scoring';

export default combineReducers({selectedTeam, scoring});