import Default from "./components/default";
import Score from "./components/score";
import Play from "./components/play";

const Routes = [
    {path: '/', name: 'default', component: Default, exact: true},
    {path: '/score', name: 'score', component: Score, exact: true},
    {path: '/play', name: 'play', component: Play, exact: true},
];

export default Routes;
