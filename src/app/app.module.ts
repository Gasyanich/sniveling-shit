import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, Inject } from '@angular/core';
import { MaterialModule } from "./material-module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';

import { VkStatComponent } from "./components/vk-stat/vk-stat.component";
import { FilmListComponent } from "./components/films/film-list/film-list.component";
import { NavMenuComponent } from "./components/nav-menu/nav-menu.component";
import { MessageCountService } from './services/message-count.service';
import { DuringTimeService } from './services/during-time.service';
import { VkMessageSenderService } from './services/vk-message-sender.service';
import { Observable } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    VkStatComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,

  ],
  providers: [
    MessageCountService, DuringTimeService, VkMessageSenderService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

