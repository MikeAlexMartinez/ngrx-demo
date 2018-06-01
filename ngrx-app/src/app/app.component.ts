import { Component, OnInit } from '@angular/core';
import { CompanyStateService } from './company/company-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hello sydney, welcome to fbc';
  companiesCount = 0;

  constructor(

  ) { }

  ngOnInit() {

  }
}
