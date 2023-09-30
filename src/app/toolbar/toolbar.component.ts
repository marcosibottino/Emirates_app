import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent  implements OnInit {

  @Input() data:any;

  constructor(private router: Router) { }

  ngOnInit() {}

  backButton(route: string){
    if(route){
      this.router.navigateByUrl(route);
    }
  }

}
