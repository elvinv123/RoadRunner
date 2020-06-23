import RoadRunner from './scripts/game';
import Road from './scripts/road';


const canvas = document.getElementById('car-game');
const canvas2 = document.getElementById('car-game-road');
const roadnew = new Road(canvas2)
roadnew.animate();
new RoadRunner(canvas);
