import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Company } from '../company';
import { CompanyService } from '../company.service';
import { CompanyStateService } from '../company-state.service';
import * as companyActions from '../../actions/company.actions';

import { AppState } from '../../models/appState';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  
  companies$: Observable<Company[]>;

  constructor(
    private companyService: CompanyService,
    private store: Store<AppState>
  ) { 
    this.companies$ = this.store.select(state => state.companies);
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): void { 
    // this.companyService.loadCompanies();
    this.store.dispatch(new companyActions.LoadCompaniesAction());
    // this.companies$ = this.companyService.getCompanies();
    // this.companies$ = this.companyStateService.companies$;
  }

  deleteCompany(companyId: number) {
    // this.companyService.deleteCompany(companyId)
    this.store.dispatch(new companyActions.DeleteCompanyAction(companyId));
  }
}
