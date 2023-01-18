import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from "@angular/forms";
import { WithErrorComponent } from './with-error/with-error.component';
import { StandardComponent } from './standard/standard.component';
import {RouterModule} from "@angular/router";
import { ComplexComponent } from './complex/complex.component';
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    WithErrorComponent,
    StandardComponent,
    ComplexComponent
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: StandardComponent},
      {path: 'standard', component: StandardComponent},
      {path: 'withError', component: WithErrorComponent},
      {path: 'complex', component: ComplexComponent},
    ]),
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
