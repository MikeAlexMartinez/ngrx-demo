import { Injectable } from '@angular/core';
import { CompanyService } from './company.service';
import { BehaviorSubject } from 'rxjs';
import { Company } from './company';

@Injectable()
export class CompanyStateService {

  public companies$ = new BehaviorSubject<Company[]>(null);

  constructor(
    private companyService: CompanyService
  ) { }

  loadCompanies() {
    console.log('LOAD Companies');
    this.companyService.loadCompanies()
      .subscribe(c => this.companies$.next(c));
  }
}
