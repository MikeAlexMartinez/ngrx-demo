import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss']
})
export class CompanyTableComponent {
  @Input() companies: Company[];
  @Output() deleteCompany = new EventEmitter<number>();
}
