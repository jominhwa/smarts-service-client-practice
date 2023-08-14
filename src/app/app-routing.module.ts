import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'company-mngmt',
    loadChildren: () =>
      import('./pages/company-mngmt/company-mngmt.module').then(
        (m) => m.CompanyMngmtModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
