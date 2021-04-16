import { readFileSync } from 'fs';

export default class TextFile {
  private data: Array<string> = [];

  constructor(path: string) {
    try {
      const data = readFileSync(path);
      this.data = data.toString().split(/\r?\n/).map(item => item.trim());
    } catch (e) {
      throw new e;
    }
  }

  public getData(): Array<string> {
    return this.data;
  }
}