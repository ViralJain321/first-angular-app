import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ImageComponent } from './image/image.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TemplateComponent } from './template/template.component';
import { ProductComponent } from './product/product.component';
import { BindingExampleComponent } from './binding-example/binding-example.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NgforDirectivesComponent } from './ngfor-directives/ngfor-directives.component';
import { AttrDirectivesComponent } from './attr-directives/attr-directives.component';
import { DirectiveAssignmentComponent } from './directive-assignment/directive-assignment.component';
import { ChangeDirective } from './shared/directives/change.directive';
import { CourseComponent } from './course/course.component';
import { SalutationPipe } from './shared/salutation.pipe';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';
import { GrandchildComponent } from './parent-child/grandchild/grandchild.component';
import { BetterDirectiveDirective } from './shared/directives/better-directive.directive';
import { CustomDirectiveDirective } from './shared/directives/custom-directive.directive';
import { ObservablesComponent } from './observables/observables.component';
import { ShortenPipe } from './shared/pipes/shorten.pipe';
import { SignalsComponent } from './signals/signals.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ImageComponent,
    CustomerDataComponent,
    UserProfileComponent,
    TemplateComponent,
    ProductComponent,
    BindingExampleComponent,
    LoginComponent,
    NgforDirectivesComponent,
    AttrDirectivesComponent,
    DirectiveAssignmentComponent,
    ChangeDirective,
    CourseComponent,
    SalutationPipe,
    ParentComponent,
    ChildComponent,
    GrandchildComponent,
    BetterDirectiveDirective,
    CustomDirectiveDirective,
    ObservablesComponent,
    ShortenPipe,
    SignalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
