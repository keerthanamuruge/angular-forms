import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsingFormComponent } from './Component/using-form/using-form.component';
import { UsingClassModelComponent } from './Component/using-class-model/using-class-model.component';
import { UsingFormBuilderComponent } from './Component/using-form-builder/using-form-builder.component';
import { UsingformgroupandformcontrolComponent } from './Component/usingformgroupandformcontrol/usingformgroupandformcontrol.component';
import { FormValidationComponent } from './Component/form-validation/form-validation.component';
import { FormGroupComponent } from './Component/form-group/form-group.component';
import { ReactiveFormsComponent } from './Component/reactive-forms/reactive-forms.component';
import { FormbuilderComponent } from './Component/formbuilder/formbuilder.component';
import { ReactiveFormValidationComponent } from './Component/reactive-form-validation/reactive-form-validation.component';
import { FormValidationTrialComponent } from './Component/form-validation-trial/form-validation-trial.component';


@NgModule({
  declarations: [
    AppComponent,
    UsingFormComponent,
    UsingClassModelComponent,
    UsingFormBuilderComponent,
    UsingformgroupandformcontrolComponent,
    FormValidationComponent,
    FormGroupComponent,
    ReactiveFormsComponent,
    FormbuilderComponent,
    ReactiveFormValidationComponent,
    FormValidationTrialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
