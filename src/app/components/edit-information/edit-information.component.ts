import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/service/authenticate/authenticate.service';
import { person } from 'src/assets/data/users';


@Component({
  selector: 'app-edit-information',
  templateUrl: './edit-information.component.html',
  styleUrls: ['./edit-information.component.scss'],
})
export class EditInformationComponent  implements OnInit {

  backButton: string = '/start';

  public dataUser: any;

  oldPass: string = '';
  user: any;

  constructor(private authenticateService: AuthenticateService) { }

  ngOnInit() {
    this.getDataUser();
  }

  async getDataUser(){
    this.dataUser = this.authenticateService.getCurrentUser();
  }

  async guardarDatos(){
    const formData = {
      name: this.dataUser.name,
      lastname: this.dataUser.lastname,
      mail: this.dataUser.mail,
      phone: this.dataUser.phone,
      image_profile: ''
    }

    // Captura los datos y los muestra
    console.log('====================================');
    console.log('Datos guardados: ', formData);
    console.log('====================================');


    // Los guarda en el localStorage
    localStorage.setItem('userData', JSON.stringify(formData));

    // Y los actualiza localmente
    this.dataUser.userData = formData;

    // -------------- o -------------- //
    // Voy a buscar el user en el localStorage
    
    this.user = localStorage.getItem('userData');
    const user = JSON.parse(this.user);
    
    console.log('====================================');
    console.log('[LocalStorage.User] => ', user);
    console.log('====================================');
  }
}
