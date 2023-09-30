import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController
    ) { }
}
