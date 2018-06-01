import { NgModule } from '@angular/core';

import {

} from '@angular/material';

const MATERIAL_MODULES = [

];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class MaterialModule { }
