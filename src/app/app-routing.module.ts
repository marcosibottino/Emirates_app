import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { FlightComponent } from './components/flight/flight.component';
import { SkywardsComponent } from './components/skywards/skywards.component';
import { MapsComponent } from './components/maps/maps.component';
import { ContactComponent } from './components/contact/contact.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { EntretainmentComponent } from './components/entretainment/entretainment.component';
import { EditInformationComponent } from './components/edit-information/edit-information.component';
import { AuthguardService } from './service/authguard/authguard.service';
// import { ComponentsModule } from './components/components.module';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: StartComponent,
    canActivate: [AuthguardService]
  },
  {
    path: 'flight',
    component: FlightComponent,
    canActivate: [AuthguardService]
  },
  {
    path: 'skywards',
    component: SkywardsComponent,
    canActivate: [AuthguardService]
  },
  {
    path: 'maps',
    component: MapsComponent,
    canActivate: [AuthguardService]
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [AuthguardService]
  },
  {
    path: 'questions',
    component: QuestionsComponent,
    canActivate: [AuthguardService]
  },
  {
    path: 'entretainments',
    component: EntretainmentComponent,
    canActivate: [AuthguardService]
  },
  {
    path: 'edit_info',
    component: EditInformationComponent,
    canActivate: [AuthguardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
