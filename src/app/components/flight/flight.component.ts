import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss'],
})
export class FlightComponent  implements OnInit {

  backButton: string = '/start';

  barcodeValue = 'QRCode Generated.'

  constructor() { }

  ngOnInit() {}

}
