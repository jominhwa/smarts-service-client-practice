import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyMngmtRoutingModule } from './company-mngmt-routing.module';
import { NgMaterialUIModule } from 'src/app/ng-material-ui/ng-material-ui.module';
import { MatInputModule } from '@angular/material/input';
import { AddCompanyComponent } from './add-company/add-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';

@NgModule({
  declarations: [
    CompanyListComponent,
    AddCompanyComponent,
    EditCompanyComponent,
  ],
  imports: [
    CommonModule,
    NgMaterialUIModule,
    MatInputModule,
    CompanyMngmtRoutingModule,
  ],
  providers: [],
})
export class CompanyMngmtModule {}
