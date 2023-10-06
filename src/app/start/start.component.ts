import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../service/authenticate/authenticate.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent  implements OnInit {

  public dataUser: any;

  constructor(
    private router: Router,
    private authenticateService: AuthenticateService
    ) { }

  ngOnInit() {
    this.getDataUser();
  }

  GoTo(route: string){
    switch(route){
      case 'flight':
        this.router.navigateByUrl('/flight')
      break;
      case 'skywards':
        this.router.navigateByUrl('/skywards')
      break;
      case 'maps':
        this.router.navigateByUrl('/maps')
      break;
      case 'entretainments':
        this.router.navigateByUrl('/entretainments')
      break;
      case 'contact':
        this.router.navigateByUrl('/contact')
      break;
      case 'questions':
        this.router.navigateByUrl('/questions')
      break;
      case 'edit_info':
        this.router.navigateByUrl('/edit_info')
      break;
      }
  }

  async getDataUser(){
    const dataUser = await this.authenticateService.getCurrentUser();
    this.dataUser = dataUser;
    console.log('Datos de Usuario:', this.dataUser)
  }
}
