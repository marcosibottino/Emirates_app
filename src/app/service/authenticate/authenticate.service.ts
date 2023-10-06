import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { person } from 'src/assets/data/users';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  public currentUser: any = null;

  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController,
    private router: Router
    ) { }

    async onLogin(user: string, pass: string){
      for(const p of person){
        if (user === p.user && pass === p.pass) {
          const toast = await this.toastController.create({
            message: 'Welcome to Emirates',
            duration: 3000,
            translucent: true,
            color: 'success'
          });
          toast.present();

          this.currentUser = p;

          this.router.navigateByUrl('/start')
          return; // Sale del bucle si las credenciales coinciden  }
        } else {
            const toast = await this.toastController.create({
            message: 'Incorrect, try again.',
            duration: 3000,
            translucent: true,
            color: 'danger'
          });
          toast.present();
        }
    }
  }

  getCurrentUser(){
    return this.currentUser;
  }
}
