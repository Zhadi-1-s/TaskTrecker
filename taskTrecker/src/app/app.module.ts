import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { TaskComponent } from './components/task/task.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnumToArrayPipe } from './shared/pipes/enumToArray.pipe';
import { TaskService } from './shared/services/task.service';

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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EnumToArrayPipe,TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
