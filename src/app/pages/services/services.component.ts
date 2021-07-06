import { Component, OnInit } from '@angular/core';
import { servicesData } from '../../API';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services = servicesData;

  constructor() {}

  ngOnInit(): void {}
}
