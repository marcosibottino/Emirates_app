import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StartComponent } from './start/start.component';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';


@NgModule({
  declarations: [AppComponent, StartComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SpinnerDialog],
  bootstrap: [AppComponent],
})
export class AppModule {}
