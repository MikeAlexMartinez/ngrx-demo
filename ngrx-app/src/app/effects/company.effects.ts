import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { CompanyService } from '../company/company.service';
import * as companyActions from './../actions/company.actions';
import { LoadCompaniesSuccessAction } from '../actions/company.actions';
import { switchMap, map } from  'rxjs/operators';

@Injectable()
export class CompanyEffects {
  constructor (
    private action$: Actions,
    private companyService: CompanyService
  ) { }

  @Effect() loadCompanies$ = this.action$
    .ofType(companyActions.LOAD_COMPANIES)
    .pipe(
      switchMap(() => {
        return this.companyService.loadCompanies()
          .pipe(
            map(companies => new companyActions.LoadCompaniesSuccessAction(companies))
          );

      })
    );
}
