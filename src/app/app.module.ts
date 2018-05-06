import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './shared/highlight.directive';
import { UnlessDirective } from './shared/unless.directive';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UnlessDirective,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
