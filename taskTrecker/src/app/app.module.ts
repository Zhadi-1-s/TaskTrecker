import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { TaskComponent } from './components/task/task.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TaskComponent,
    AllTasksComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
