import { ARIZONA } from './arizona';
import { ATLANTA } from './atlanta';
import { BALTIMORE } from './baltimore';
import { BUFFALO } from './buffalo';
import { CAROLINA } from './carolina';
import { CHICAGO } from './chicago';
import { CINCINNATI } from './cincinnati';
import { CLEVELAND } from './cleveland';
import { DALLAS } from './dallas';
import { DENVER } from './denver';
import { DETROIT } from './detroit';
import { GREEN_BAY } from './greenBay';
import { HOUSTON } from './houston';
import { INDIANAPOLIS } from './indianapolis';
import { JACKSONVILLE } from './jacksonville';
import { KANSAS_CITY } from './kansasCity';
import { LA_CHARGERS } from './laChargers';
import { LA_RAMS } from './laRams';
import { MIAMI } from './miami';
import { MINNESOTA } from './minnesota';
import { NEW_ENGLAND } from './newEngland';
import { NEW_ORLEANS } from './newOrleans';
import { NY_GIANTS } from './nyGiants';
import { NY_JETS } from './nyJets';
import { OAKLAND } from './oakland';
import { PHILADELPHIA } from './philadelphia';
import { PITTSBURGH } from './pittsburgh';
import { SAN_FRANCISCO } from './sanFrancisco';
import { SEATTLE } from './seattle';
import { TAMPA_BAY } from './tampaBay';
import { TENNESSEE } from './tennessee';
import { WASHINGTON } from './washington';

export const TEAMS = [
  ARIZONA,
  ATLANTA,
  BALTIMORE,
  BUFFALO,
  CAROLINA,
  CHICAGO,
  CINCINNATI,
  CLEVELAND,
  DALLAS,
  DENVER,
  DETROIT,
  GREEN_BAY,
  HOUSTON,
  INDIANAPOLIS,
  JACKSONVILLE,
  KANSAS_CITY,
  LA_CHARGERS,
  LA_RAMS,
  MIAMI,
  MINNESOTA,
  NEW_ENGLAND,
  NEW_ORLEANS,
  NY_GIANTS,
  NY_JETS,
  OAKLAND,
  PHILADELPHIA,
  PITTSBURGH,
  SAN_FRANCISCO,
  SEATTLE,
  TAMPA_BAY,
  TENNESSEE,
  WASHINGTON
];

export const SCORING_METRICS = [
  { id: "pointsAllowed0", name: "Points Allowed: 0", defaultValue: 15 },
  { id: "pointsAllowed6", name: "Points Allowed: 1-6", defaultValue: 10 },
  { id: "pointsAllowed13", name: "Points Allowed: 7-13", defaultValue: 8 },
  { id: "pointsAllowed20", name: "Points Allowed: 14-20", defaultValue: 6 },
  { id: "pointsAllowed27", name: "Points Allowed: 21-27", defaultValue: 4 },
  { id: "pointsAllowed34", name: "Points Allowed: 28-34", defaultValue: 2 },
  { id: "pointsAllowed35", name: "Points Allowed: 35+", defaultValue: 0 },
  { id: "sacks", name: "Sacks", defaultValue: 1 },
  { id: "interceptions", name: "Interceptions", defaultValue: 2 },
  { id: "fumbleRecovery", name: "Fumble Recovery", defaultValue: 1 },
  { id: "touchdowns", name: "Touchdowns", defaultValue: 6 },
  { id: "safety", name: "Safety", defaultValue: 2 },
  { id: "blockedKicks", name: "Blocked Kicks", defaultValue: 2 },
  { id: "returnTd", name: "Return TDs", defaultValue: 7 },
  { id: "fourthDownStop", name: "4th Down Stops", defaultValue: 1 },
  { id: "tackleForLoss", name: "Tackle for Loss", defaultValue: .25 },
  { id: "yardsAllowed99", name: "Yards Allowed 0-99", defaultValue: 5 },
  { id: "yardsAllowed199", name: "Yards Allowed 100-199", defaultValue: 4 },
  { id: "yardsAllowed299", name: "Yards Allowed 200-299", defaultValue: 3 },
  { id: "yardsAllowed399", name: "Yards Allowed 300-399", defaultValue: 2 },
  { id: "yardsAllowed499", name: "Yards Allowed 400-499", defaultValue: 1 },
  { id: "yardsAllowed500", name: "Yards Allowed 500+", defaultValue: 0 },
  { id: "threeAndOuts", name: "3-and-outs", defaultValue: .5 },
  { id: "patReturned", name: "PAT Returned", defaultValue: 2 }
]