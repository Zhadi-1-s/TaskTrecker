import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';

const routes: Routes = [
  {path:'',redirectTo:'main',pathMatch:'full'},
  {path:'main',component:MainComponent},
  {path:'create',component:CreateTaskComponent},
  {path:'tasks',component:AllTasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
