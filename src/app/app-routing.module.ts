import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { FlightComponent } from './components/flight/flight.component';
import { SkywardsComponent } from './components/skywards/skywards.component';
import { MapsComponent } from './components/maps/maps.component';
import { ContactComponent } from './components/contact/contact.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { EntretainmentComponent } from './components/entretainment/entretainment.component';
// import { ComponentsModule } from './components/components.module';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'flight',
    component: FlightComponent
  },
  {
    path: 'skywards',
    component: SkywardsComponent
  },
  {
    path: 'maps',
    component: MapsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'questions',
    component: QuestionsComponent
  },
  {
    path: 'entretainments',
    component: EntretainmentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
