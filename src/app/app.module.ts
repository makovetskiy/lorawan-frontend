import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';

import {CdkTableModule} from '@angular/cdk';
import {
  MdButtonModule,
  MdInputModule,
  MdCardModule,
  MdToolbarModule,
  MdSlideToggleModule,
  MdTabsModule,
  MdSidenavModule,
  MdIconModule,
  MdTooltipModule,
  MdTableModule,
  MdSortModule,
  MdPaginatorModule,
  MaterialModule,
  MdListModule
} from '@angular/material';

import {Routes, RouterModule} from '@angular/router';

import { LoginformComponent } from './loginform/loginform.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { CustomersComponent } from './customers/customers.component';
import { RadiomoduleComponent } from './radiomodule/radiomodule.component';
import { ApplicationsComponent } from './applications/applications.component';
import { RadioduletypeComponent } from './radioduletype/radioduletype.component';
import { AbonentComponent } from './abonent/abonent.component';


const userRoutes: Routes = [
    { path: 'profile', component: UserProfileComponent}
];

// определение маршрутов
const appRoutes: Routes =[
    {path: '', redirectTo:'login', pathMatch: 'full'},
    { path: 'login', component: LoginformComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'dash', component: DashboardComponent,canActivate: [AuthGuard], children: [
        {path: 'profile', component: UserProfileComponent, outlet:'content'},
        {path: 'abonent', component: AbonentComponent, outlet:'content'},
        {path: 'application', component: ApplicationsComponent, outlet:'content'},
        {path: 'customers', component: CustomersComponent, outlet:'content'},
        {path: 'radiomodule', component: RadiomoduleComponent, outlet:'content'},
        {path: 'radiomoduletype', component: RadioduletypeComponent, outlet:'content'},
        {path: 'config', component: ConfigurationComponent, outlet:'content'},
    ] },
    
];


@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    NavbarComponent,
    RegisterComponent,
    DashboardComponent,
    UserProfileComponent,
    ConfigurationComponent,
    CustomersComponent,
    RadiomoduleComponent,
    ApplicationsComponent,
    RadioduletypeComponent,
    AbonentComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdInputModule,
    MdCardModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdSlideToggleModule,
    MdTabsModule,
    RouterModule.forRoot(appRoutes),
    MdSidenavModule,
    MdIconModule,
    MdTooltipModule,
    MdTableModule,
    CdkTableModule,
    MdPaginatorModule,
    MdSortModule,
    NgxDatatableModule,
    MdListModule
  ],
  providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
