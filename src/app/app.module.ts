import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';

import { AppComponent } from './app.component';
import { HighlightDirective } from './shared/highlight.directive';
import { UnlessDirective } from './shared/unless.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import {AppRoutingModules} from './app-routing.modules';
import {RecipeService} from './recipes/recipe.service';
import {RecipesModule} from './recipes/recipes.module';
import {SharedModule} from './shared/shared.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HighlightDirective,
    UnlessDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModules,
    RecipesModule,
    SharedModule,
    ShoppingListModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
