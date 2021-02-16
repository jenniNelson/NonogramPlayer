import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SolverViewComponent } from './solver-view/solver-view.component';
import { CreatorViewComponent } from './creator-view/creator-view.component';
import { GenerateControlsComponent } from './solver-view/generate-controls/generate-controls.component';
import { ShowSolutionsViewComponent } from './solver-view/show-solutions-view/show-solutions-view.component';
import { GridViewComponent } from './solver-view/grid-view/grid-view.component';
import { NonogramGridComponent } from './nonogram-grid/nonogram-grid.component';
import { NonogramPreviewComponent } from './nonogram-preview/nonogram-preview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { AngularFittextModule } from 'angular-fittext';

import { DragToSelectModule } from 'ngx-drag-to-select';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    SolverViewComponent,
    CreatorViewComponent,
    GenerateControlsComponent,
    ShowSolutionsViewComponent,
    GridViewComponent,
    NonogramGridComponent,
    NonogramPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'solve/:puzzleSpec', component: SolverViewComponent},
      { path: 'solve', redirectTo: '/solve/' },
      { path: 'solver', redirectTo: '/solve/' },
      { path: 'create', component: CreatorViewComponent },
      { path: 'edit', redirectTo: '/create' },
      { path: 'editor', redirectTo: '/create' },
      { path: '', redirectTo: '/solve', pathMatch: 'full' },
    ]),
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    DragToSelectModule.forRoot(),
    AngularFittextModule,
    MatButtonToggleModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
