import { Component, OnInit, ElementRef } from '@angular/core';
import { element } from 'protractor';
import { NonogramService } from '../../nonogram.service';

@Component({
  selector: 'app-show-solutions-view',
  templateUrl: './show-solutions-view.component.html',
  styleUrls: ['./show-solutions-view.component.css']
})
export class ShowSolutionsViewComponent implements OnInit {

  constructor(private nonogramService: NonogramService) { 
  }

  ngOnInit(): void {
  }

  getSolutions() {
    return this.nonogramService.getSolutions();
  }

  onShow() {
    this.nonogramService.showSolutions = true;
  }

  onHide() {
    this.nonogramService.showSolutions = false;
  }

  showingSolutions(): boolean {
    return this.nonogramService.mode == "solve" && this.nonogramService.showSolutions;
  }

}
