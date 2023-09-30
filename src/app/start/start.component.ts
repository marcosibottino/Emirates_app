import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

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
    }
  }
}
