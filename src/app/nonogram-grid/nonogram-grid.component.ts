import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NonogramService, TileValue } from '../nonogram.service';
import { SelectContainerComponent } from 'ngx-drag-to-select';
// import {fitText} from '../../assets/fittext.js'
declare var fitText: any;

enum FillMode {
  line,
  rectangle
}
enum FillType {
  toggle,
  cross
}
enum FillDirection {
  vertical,
  horizontal,
  any
}

@Component({
  selector: 'app-nonogram-grid',
  templateUrl: './nonogram-grid.component.html',
  styleUrls: ['./nonogram-grid.component.css']
})
export class NonogramGridComponent implements OnInit, AfterViewInit{
  FillMode = FillMode;
  TileValue = TileValue;
  FillType = FillType;

  fillMode: FillMode = FillMode.line;
  paintMode: boolean = false;
  fillValue: TileValue = TileValue.filled;
  selectedSquares: any;

  @ViewChild(SelectContainerComponent) selectContainer: SelectContainerComponent;

  constructor(private nonogramService: NonogramService) {
    // var ds = new DragSelect({
    //   selectables: document.getElementsByClassName('mat-grid-tile'),
    //   area: document.getElementById("selectableArea")
    // });
  }

  ngOnInit(): void {
    // var selectable = document.getElementsByClassName('mat-grid-tile');
    // console.log(selectable);
    // this.ds = new DragSelect({
    //   selectables: selectable,
    //   area: document.getElementById("selectableArea"),
    //   onElementSelect: function (element) { console.log(element) },
    //   onDragStart: function(x) { console.log(x) },
    // });
    // this.ds.addSelectables(selectable, true);
    // console.log(this.ds.selectables);
    var elementsToFit = document.getElementsByClassName("horizontalNumbers");
    console.log(elementsToFit);
    // for (let el of elementsToFit) {
    //   console.log(el);
    //   fitText(el);
    // }
    // fitText(document.getElementsByClassName("verticalNumbers"))
  }

  ngAfterViewInit() {

    // var elementsToFit = document.getElementsByClassName("horizontalNumbers");
    // console.log(elementsToFit);
    // fitText(elementsToFit,.25);
  }


  gridWidth(): number {
    return this.nonogramService.nonogram.width;
  }
  gridHeight(): number {
    return this.nonogramService.nonogram.height;
  }
  getPattern(): number[][] {
    return this.nonogramService.nonogram.pattern;
  }
  getPuzzle(): number[][][] {
    return this.nonogramService.nonogram.puzzle
  }

  onPaintButtonClick() {
    this.paintMode = !this.paintMode;
  }
  onFillValueToggle(event) {
    console.log(event);
    this.fillValue = (<any>TileValue)[event.value];
  }
  onFillTypeToggle(event) {
    console.log(event);
    this.fillType = (<any>FillType)[event.value];
  }
  onFillModeToggle(event) {
    console.log(event);
    this.fillMode = (this.fillMode + 1) % 2;
    console.log(this.fillMode);
  }
  onUndo() {
    this.nonogramService.undo();
  }
  onRedo() {
    this.nonogramService.redo();
  }

  onTileSelected(selected) {
    // console.log("onTileSelected");
    // console.log(selected);
    // Add preview class for what tile will be if selected
  }

  onTileDeselected(selected) {
    console.log("onTileDeselected");
    console.log(selected);
    // Remove preview class
  }

  onSelectionEnded(selection: any[]) {
    console.log("onSelectionEnded");
    console.log(selection);
    this.selectTiles(selection);
  }

  selectTiles(selection) {
    if (!selection || selection.length == 0) {
      return;
    }
    let changedTiles = [];
    let firstSelected = selection[0];
    let fillDirection = this.getFillDirection(selection);

    if (this.paintMode) {
      // set all to fillValue
      for (let tile of selection) {
        if (this.fillMode==FillMode.rectangle || fillDirection == FillDirection.any
            || (fillDirection == FillDirection.horizontal && tile.row == firstSelected.row)
            || (fillDirection == FillDirection.vertical && tile.col == firstSelected.col)) {
          changedTiles.push({ 'fill': this.fillValue, 'row': tile.row, 'col': tile.col });
        }
      }
    } else {
      for (let tile of selection) {
        if (tile.fill == firstSelected.fill) {
          if (this.fillMode==FillMode.rectangle || fillDirection == FillDirection.any
              || (fillDirection == FillDirection.horizontal && tile.row == firstSelected.row)
              || (fillDirection == FillDirection.vertical && tile.col == firstSelected.col)) {
            if (this.fillValue == firstSelected.fill) {
              changedTiles.push({ 'fill': TileValue.blank, 'row': tile.row, 'col': tile.col });
            } else {
              changedTiles.push({ 'fill': this.fillValue, 'row': tile.row, 'col': tile.col });
            }
          }
        }
      }
    }
    // Remove any preview classes
    console.log(changedTiles);
    this.nonogramService.changeTiles(changedTiles);
  }

  getFillDirection(selection): FillDirection {
    if (selection.length < 2) {
      return FillDirection.any;
    }
    let start = selection[0];
    let second = selection[1];
    let rowDiff = start.row - second.row != 0;
    let colDiff = start.col - second.col != 0
    if ((rowDiff && colDiff) || (!rowDiff && !colDiff)) {
      return FillDirection.any;
    } else if (colDiff) {
      return FillDirection.horizontal;
    } else {
      return FillDirection.vertical;
    }
  }

  getPuzzleTextSizeHorizontal(puzzle: number[]): number {
    let num = 95 / puzzle.join('').length;
    num = Math.min(num, 24);
    return num;
  }
  getPuzzlePositionHorizontal(puzzle: number[], index: number): number {
    let fontsize = this.getPuzzleTextSizeHorizontal(puzzle);
    let numbersAfter = puzzle.slice(index+1);
    let charsAfter = numbersAfter.join('').length;
    return (95 - fontsize*charsAfter)
    
  }
  getPuzzleTextSizeVertical(puzzle: number[]): number {
    let num = 95 / puzzle.join('').length;
    let maxNumLength = (Math.max(...puzzle) + '').length
    num = Math.min(num, 20+ 4/maxNumLength);
    return num;
  }
  getPuzzlePositionVertical(puzzle: number[], index: number): number {
    let fontsize = this.getPuzzleTextSizeVertical(puzzle);
    let numbersAfter = puzzle.length - index - 1;
    return 93 - fontsize * numbersAfter;
  }

}
