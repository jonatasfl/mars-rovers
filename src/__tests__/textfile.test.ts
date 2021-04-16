import { resolve } from 'path'

import TextFile from "../models/TextFile"

describe('Tests for TextFile model', () => {
  it('should be defined with correct file path', () => {
    const path = resolve(__dirname, '..', '..', 'input.txt');
    expect(new TextFile(path)).toBeDefined();
  });

  it('should throw error if invalid file pathis provided', () => {
    const path = resolve(__dirname, '..', '..', 'inputttttt.txt');
    expect(() => new TextFile(path)).toThrow();
  });

  it('should be able to get the file contents as array', () => {    
    const path = resolve(__dirname, '..', '..', 'input.txt');
    const file = new TextFile(path);
    const getDataMock = jest.spyOn(file, 'getData');
    getDataMock.mockReturnValue(['5 5', '1 2 N'])
    expect(file.getData()).toEqual(['5 5', '1 2 N']);
    expect(getDataMock).toHaveBeenCalled();
  });
})