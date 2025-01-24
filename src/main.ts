/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers, // Include providers from appConfig
    importProvidersFrom(HttpClientModule,NgxPaginationModule), // Ensure HttpClientModule is globally available
  ],
}).catch((err) => console.error(err));
