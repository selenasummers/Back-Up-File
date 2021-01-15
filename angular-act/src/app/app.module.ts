import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstSampleComponent } from './first-sample/first-sample.component';
import { SecondSampleComponent } from './second-sample/second-sample.component';
import { ThirdSampleComponent } from './third-sample/third-sample.component';
import { SampleComponent } from './sample/sample.component';
import { ReusableComponent } from './reusable/reusable.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { UpdateFormComponent } from './update-form/update-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstSampleComponent,
    SecondSampleComponent,
    ThirdSampleComponent,
    SampleComponent,
    ReusableComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    UpdateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
