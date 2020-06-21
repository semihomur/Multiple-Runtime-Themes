import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { NbThemeModule,
        NbCardModule,
        NbLayoutModule,
        NbSelectModule,
        NbListModule,
        NbDatepickerModule,
        NbInputModule } from '@nebular/theme';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MaterialModule,
      AppRoutingModule,
      NbThemeModule.forRoot({ name: 'default' }),
      NbDatepickerModule.forRoot(),
      NbSelectModule,
      NbListModule,
      NbLayoutModule,
      NbCardModule,
      NbInputModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
