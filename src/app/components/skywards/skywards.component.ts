import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skywards',
  templateUrl: './skywards.component.html',
  styleUrls: ['./skywards.component.scss'],
})
export class SkywardsComponent  implements OnInit {

  backButton: string = '/start';

  constructor() { }

  ngOnInit() {}

}
