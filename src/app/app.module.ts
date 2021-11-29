import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialExampleModule} from './material.module'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { ShowDirective } from './show.directive';
import { HomePageComponent } from './home-page/home-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselMultipleComponent } from './components/carousel-multiple/carousel-multiple.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    ShowDirective,
    HomePageComponent,
    CarouselComponent,
    CarouselMultipleComponent,
    FooterComponent,
    SearchInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
