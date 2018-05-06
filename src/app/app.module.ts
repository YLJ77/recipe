import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';

import { AppComponent } from './app.component';
import { HighlightDirective } from './shared/highlight.directive';
import { UnlessDirective } from './shared/unless.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import {AppRoutingModules} from './app-routing.modules';
import {RecipeService} from './recipes/recipe.service';
import {SharedModule} from './shared/shared.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HighlightDirective,
    UnlessDirective,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModules,
    SharedModule,
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
