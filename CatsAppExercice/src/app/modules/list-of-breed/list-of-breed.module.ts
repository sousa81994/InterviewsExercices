import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfBreedComponent } from './list-of-breed/list-of-breed.component';
import { BreedComponent } from './list-of-breed/breed/breed.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    ListOfBreedComponent,
    BreedComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class ListOfBreedModule { }
