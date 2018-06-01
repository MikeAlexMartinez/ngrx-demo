import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment.prod';

// Third party
//    Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//    NgRx
import { StoreModule } from '@ngrx/store';
import { companyReducer } from './reducers/company.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffects } from './effects/company.effects';

// My Modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { HomeModule } from './home/home.module';

// My Services
//    Company
import { CompanyStateService } from './company/company-state.service';

// My Components
import { AppComponent } from './app.component';
//    Company
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyTableComponent } from './company/company-table/company-table.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyEditComponent,
    CompanyTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    StoreModule.forRoot({ companies: companyReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([CompanyEffects])
  ],
  providers: [
    CompanyStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
