import { resolve } from 'path';

import Rover from './models/Rover';
import Plateau from './models/Plateau';
import TextFile from "./models/TextFile";

const txtFile = new TextFile(resolve(__dirname, '..', 'input.txt'));
const [plateauTopRight, rover1setup, rover1cmd, rover2setup, rover2cmd] = txtFile.getData();

const [ptTopRightX, ptTopRightY] = plateauTopRight.split(' ');
const plateau = new Plateau(+ptTopRightX, + ptTopRightY);

const [r1x, r1y, r1dir] = rover1setup.split(' ');
const rover1 = new Rover(plateau, +r1x, +r1y, r1dir);
console.log(rover1.execute(rover1cmd));

const [r2x, r2y, r2dir] = rover2setup.split(' ');
const rover2 = new Rover(plateau, +r2x, +r2y, r2dir);
console.log(rover2.execute(rover2cmd));