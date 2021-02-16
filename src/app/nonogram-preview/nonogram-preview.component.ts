import { Component, OnInit, Input} from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list'
import {Nonogram, NonogramService} from '../nonogram.service'

@Component({
  selector: 'app-nonogram-preview',
  templateUrl: './nonogram-preview.component.html',
  styleUrls: ['./nonogram-preview.component.css']
})
export class NonogramPreviewComponent implements OnInit {

  @Input('solution') solution: Nonogram;

  constructor(private nonogramService : NonogramService) { }

  ngOnInit(): void {
  }

  getGrid(): number[][] {
    return this.solution.pattern;

  }

  gridWidth(): number {
    return this.solution.width;
  }
  gridHeight(): number {
    return this.solution.height;
  }

}
