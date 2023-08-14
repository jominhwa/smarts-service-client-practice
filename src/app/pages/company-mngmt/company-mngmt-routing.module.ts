import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyListComponent } from './company-list/company-list.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';

const routes: Routes = [
  {
    path: 'company-list',
    component: CompanyListComponent,
  },
  {
    path: 'add-company',
    component: AddCompanyComponent,
  },
  {
    path: 'edit-company',
    component: EditCompanyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyMngmtRoutingModule {}
