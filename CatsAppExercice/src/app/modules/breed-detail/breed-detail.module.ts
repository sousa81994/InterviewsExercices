import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreedDetailComponent } from './breed-detail/breed-detail.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    BreedDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BreedDetailComponent }
    ]),
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ]
})
export class BreedDetailModule { }
