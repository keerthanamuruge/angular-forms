import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGroupComponent } from './Component/form-group/form-group.component';
import { FormValidationTrialComponent } from './Component/form-validation-trial/form-validation-trial.component';
import { FormbuilderComponent } from './Component/formbuilder/formbuilder.component';
import { ReactiveFormValidationComponent } from './Component/reactive-form-validation/reactive-form-validation.component';
import { ReactiveFormsComponent } from './Component/reactive-forms/reactive-forms.component';

const routes: Routes = [
  {path: 'reactive_form', component: ReactiveFormsComponent},
  {path: 'formgroup', component: FormGroupComponent},
  {path: 'frombuilder', component: FormbuilderComponent},
  {path: 'reactive-validation', component:ReactiveFormValidationComponent},
  {path: 'reactive-validation-trail', component:FormValidationTrialComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
