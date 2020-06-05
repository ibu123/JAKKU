import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { LetterComponent } from './letter/letter.component';


const routes: Routes = [
  {
    path: '',
    component:LetterComponent

  }];
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSelectModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
