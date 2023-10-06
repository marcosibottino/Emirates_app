import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './flight/flight.component';
import { EntretainmentComponent } from './entretainment/entretainment.component';
import { MapsComponent } from './maps/maps.component';
import { ContactComponent } from './contact/contact.component';
import { QuestionsComponent } from './questions/questions.component';
import { SkywardsComponent } from './skywards/skywards.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { IonicModule } from '@ionic/angular';
// import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    FlightComponent,
    EntretainmentComponent,
    MapsComponent,
    ContactComponent,
    QuestionsComponent,
    SkywardsComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(
    // Habilitar el scroll en toda la aplicación
    // scrollingEnabled: true
    ),
    // QRCodeModule
    // FlightComponent,
    // EntretainmentComponent,
    // MapsComponent,
    // ContactComponent,
    // QuestionsComponent,
    // SkywardsComponent
  ]
})
export class ComponentsModule { }
