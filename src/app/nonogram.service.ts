import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

export class Nonogram {
  width: number;
  height: number;
  puzzle: number[][][];
  pattern: number[][];

  constructor(width: number, height: number, puzzle: number[][][] = null, pattern: number[][] = null) {
    if (!puzzle && !pattern) {
      throw new Error("Nonogram constructor requires a puzzle specification or pattern specification");
    }
    this.width = width;
    this.height = height;
    this.puzzle = puzzle;
    this.pattern = pattern;
    if (!this.pattern) {
      this.pattern = Nonogram.makeEmptyPattern(width, height);
    }
    // console.log(this);
  }

  makeURL() {
    let s = "";

    

    return "";
  }

  static makeEmptyPattern(width: number, height: number): number[][] {
    
    let grid = [];
    for (let j = 0; j < width; j++) {
      grid.push([]);
      for (let i = 0; i < height; i++) {
        grid[j].push(0);
      }
    }
    console.log(grid);
    return grid;
  }

  static DefaultPuzzle(): Nonogram {
    let puzzle = [
      [        [2,1],[1,3],[2,1,4],[2,5],[10],[8],[3,5],[2,1,4],[1,3],[2,1,1,1,1]],
      [ [4,4],
        [3, 2, 1],
        [3],
        [1,1,2,1,1],
        [2],
        [4,1],
        [6],
        [8,1],
        [9],
        [10]],
    ]
    let pattern = [
      [0,1,1,1,1,0,1,1,1,1],
      [0,0,1,1,1,0,1,1,2,1],
      [0,0,0,0,1,1,1,0,2,0],
      [1,0,1,0,1,1,0,1,0,1],
      [0,2,2,0,1,1,0,0,0,0],
      [0,0,0,1,1,1,1,0,0,1],
      [0,0,1,1,1,1,1,1,0,0],
      [0,1,1,1,1,1,1,1,0,1],
      [1,1,1,1,1,1,1,1,1,0],
      [1,1,1,1,1,1,1,1,1,1]
    ]
    return new Nonogram(10,10,puzzle, pattern);
  }
  static smallTestPuzzle(): Nonogram {
    let puzzle = [
      [[1,1,1,1],[1,1,1],[1,1,1,1],[1,1,1],[1,1,1,1],[1,1,1],],
      [[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],]
    ]
    let pattern = [
      [1,0,1,0,1,0],
      [0,1,0,1,0,1],
      [1,0,1,0,1,0],
      [0,1,0,1,0,1],
      [1,0,1,0,1,0],
      [0,1,0,1,0,1],
      [1,0,1,0,1,0],
    ]
    return new Nonogram(6,7, puzzle, pattern);
  }
  static largeTestPuzzle(): Nonogram {
    let puzzle = [
      [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
      ],
      [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]
      ]
    ]
    let pattern = [
      [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
      [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
      [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
      [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
      [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
      [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
      [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
      [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
      [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
      [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
      [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
      [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
      [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
      [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
      [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
      [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
      [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
      [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
      [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
      [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
      [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
      [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    ]
    return new Nonogram(21,22, puzzle, pattern);
  }
  static NonogramFromURL(url: string): Nonogram {
    return this.DefaultPuzzle();
  }
}


export enum TileValue{
  blank = 0,
  filled = 1,
  crossed = 2
}


@Injectable({
  providedIn: 'root'
})
export class NonogramService {

  nonogram: Nonogram;
  mode: string;
  showSolutions: boolean;
  undoStack = [];
  redoStack = [];



  constructor() {
    // this.nonogram = Nonogram.smallTestPuzzle();
    this.nonogram = Nonogram.DefaultPuzzle();
    // this.nonogram = Nonogram.largeTestPuzzle();
    this.mode = "solve";
    this.showSolutions = true;
  }

  puzzleFromUrl(urlSpec: string) {
    this.nonogram = Nonogram.NonogramFromURL(urlSpec);
    this.undoStack = [];
    this.redoStack = [];
  }

  getSolutions(): Nonogram[] { // TODO
    return [Nonogram.DefaultPuzzle(), Nonogram.DefaultPuzzle()];
  }

  changeTiles(changedTiles) {
    this.undoStack.push(this.deepCopyPattern(this.nonogram.pattern));
    this.redoStack = [];
    
    for (let tile of changedTiles) {
      this.nonogram.pattern[tile.row][tile.col] = tile.fill;
    }
    //Do any updates
  }

  undo() {
    this.redoStack.push(this.deepCopyPattern(this.nonogram.pattern));
    this.nonogram.pattern = this.undoStack.pop();
  }
  redo() {
    if (this.redoStack.length != 0) {
      this.undoStack.push(this.deepCopyPattern(this.nonogram.pattern));
      this.nonogram.pattern = this.redoStack.pop();
    }
  }

  deepCopyPattern(pattern: number[][]): number[][] {
    return JSON.parse(JSON.stringify(pattern));
  }

}
