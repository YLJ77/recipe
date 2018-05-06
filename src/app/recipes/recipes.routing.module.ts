import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes.component';
import {RecipesStartComponent} from './recipes-start/recipes-start.component';
import {RecipesEditComponent} from './recipes-edit/recipes-edit.component';
import {RecipesDetailComponent} from './recipes-detail/recipes-detail.component';

const recipesRoutes: Routes = [
  { path: '', component: RecipesComponent, children: [
      { path: '', component: RecipesStartComponent },
      { path: 'new', component: RecipesEditComponent },
      { path: ':id', component: RecipesDetailComponent },
      { path: ':id/edit', component: RecipesEditComponent },
    ] },
];
@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule {

}
