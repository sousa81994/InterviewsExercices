import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfBreedComponent } from './modules/list-of-breed/list-of-breed/list-of-breed.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-of-breeds', pathMatch: 'full'},
  { path: 'list-of-breeds', /* loadChildren: () => import('./routes/aiproject/aiproject.module').then(m => m.AiprojectModule)*/ 
  component: ListOfBreedComponent},
  { path: 'breed-detail',
    loadChildren: () => import('src/app/modules/breed-detail/breed-detail.module').then(m => m.BreedDetailModule)}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
