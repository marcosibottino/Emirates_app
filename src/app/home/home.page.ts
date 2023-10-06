import { Component } from '@angular/core';
import { AuthenticateService } from '../service/authenticate/authenticate.service';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { person } from 'src/assets/data/users';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user!: string;
  pass!: string;

  constructor(
    private authenticateService: AuthenticateService,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private spinnerDialog: SpinnerDialog
  ) {}

  async login(){
    // this.spinnerDialog.show('Cargando...');
    const loading = await this.loadingController.create({
      message: 'Loading...',
      duration: 10000,
      translucent: true,
      spinner: 'circles'
    })
    await loading.present();

    await loading.dismiss();
    await this.onLogin().then(() => {
      // this.spinnerDialog.hide();
    }).catch(error => {
      console.error('Error al iniciar sesion');
    })
  }

  // async onLogin(){
  //     if(this.user && this.pass){
  //       person.forEach((user) => {
  //         if(this.user === user.user && this.pass === user.pass){
  //           const toast = await this.toastController.create({
  //             message: 'Welcome to Emirates',
  //             duration:
  //           })
  //         }
  //       })
        
  //       // if(this.user == 'user123' && this.pass == 'pass123') {
  //       //   const toast = await this.toastController.create({
  //       //     message: 'Welcome to Emirates',
  //       //     duration: 3000,
  //       //     translucent: true,
  //       //     color: 'success'
  //       //   });
  //       //   toast.present();
  //       //   this.router.navigateByUrl('/start');
  //         } else {
  //         const toast = await this.toastController.create({
  //           message: 'Incorrect, try again.',
  //           duration: 3000,
  //           translucent: true,
  //           color: 'danger'
  //         })
  //         toast.present();
  //     }
  //   } else {
  //     const toast = await this.toastController.create({
  //       message: 'Type something...',
  //       duration: 2000,
  //       translucent: true,
  //       color: 'danger'
  //     })
  //     toast.present();
  //   }
  // }

  async onLogin(){

    this.authenticateService.onLogin(this.user, this.pass);
    

  //   for(const user of person){
  //     if (this.user === user.user && this.pass === user.pass) {
  //       const toast = await this.toastController.create({
  //         message: 'Welcome to Emirates',
  //         duration: 3000,
  //         translucent: true,
  //         color: 'success'
  //       });
  //       toast.present();
  //       this.router.navigateByUrl('/start');
  //       return; // Sale del bucle si las credenciales coinciden  }
  //     }
  // }

  // const toast = await this.toastController.create({
  //   message: 'Incorrect, try again.',
  //   duration: 3000,
  //   translucent: true,
  //   color: 'danger'
  // });
  // toast.present();
}
  async loading() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      duration: 3000,
      translucent: true,
      spinner: 'circles'
    })
    await loading.present();
  }
}
