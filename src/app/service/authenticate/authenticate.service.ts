import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { person } from 'src/assets/data/users';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  public currentUser: any = null;

  user?: string;
  pass?: string;

  userLS: any;

  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController,
    private router: Router
    ) { }

    async onLogin(user: string, pass: string){
      for(const p of person){
        if (user === p.user && pass === p.pass) {
          this.user = user;
          this.pass = pass;
          const toast = await this.toastController.create({
            message: 'Welcome to Emirates',
            duration: 3000,
            translucent: true,
            color: 'success'
          });
          toast.present();

          this.currentUser = p;

          localStorage.setItem('user', JSON.stringify(this.currentUser));
          localStorage.setItem('userData', JSON.stringify(this.currentUser.userData))

          this.userLS = localStorage.getItem('userData');
          this.currentUser = JSON.parse(this.userLS);

          this.router.navigateByUrl('/start')
          return;
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
    console.log('====================================');
    console.log('Usuario Obtenido LS: ', this.currentUser);
    console.log('====================================');
    return this.currentUser;
  }
}
