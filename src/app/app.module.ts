import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {NgxPrintModule} from 'ngx-print';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule,NgxPrintModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
