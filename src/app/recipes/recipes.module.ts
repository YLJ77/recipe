import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes.component';
import {RecipesStartComponent} from './recipes-start/recipes-start.component';
import {RecipesListComponent} from './recipes-list/recipes-list.component';
import {RecipesItemComponent} from './recipes-list/recipes-item/recipes-item.component';
import {RecipesEditComponent} from './recipes-edit/recipes-edit.component';
import {RecipesDetailComponent} from './recipes-detail/recipes-detail.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RecipesRoutingModule} from './recipes.routing.module';
import {ShortenPipe} from '../shared/shorten.pipe';
import {SharedModule} from '../shared/shared.module';

@NgModule ({
  declarations: [
    RecipesComponent,
    RecipesStartComponent,
    RecipesListComponent,
    RecipesItemComponent,
    RecipesEditComponent,
    RecipesDetailComponent,
    ShortenPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule {

}
