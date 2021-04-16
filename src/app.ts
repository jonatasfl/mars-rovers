import { resolve } from 'path';

import TextFile from "./models/TextFile";

const txtFile = new TextFile(resolve(__dirname, '..', 'input.txt'));
const instructions = txtFile.getData();
console.log(instructions);