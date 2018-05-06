import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
  { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModules {

}





