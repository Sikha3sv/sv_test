import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubmissionComponent } from './submission/submission.component';

const routes: Routes = [{path: 'Dashboard',component: DashboardComponent},
{path: '', redirectTo: '/Dashboard',pathMatch:'full'},
{path: 'submit', component: SubmissionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
