import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StartComponent } from './start/start.component';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [AppComponent, StartComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ComponentsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SpinnerDialog],
  bootstrap: [AppComponent],
})
export class AppModule {}
