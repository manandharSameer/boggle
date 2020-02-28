import Default from "./components/default";
import Score from "./components/score";
import Play from "./components/play";

export const DEFAULT_ROUTE = '/';
export const SCORE_ROUTE = '/score';
export const PLAY_ROUTE = '/play';

const Routes = [
    {path: '/', name: 'default', component: Default, exact: true},
    {path: '/score', name: 'score', component: Score, exact: true},
    {path: '/play', name: 'play', component: Play, exact: true},
];

export default Routes;
