import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PwdForgotComponent } from './components/pwd-forgot/pwd-forgot.component';
import { UserService } from './services/user.service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { PwdResetComponent } from './components/pwd-reset/pwd-reset.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ToolbarComponent } from './components/dashboard/toolbar/toolbar.component';
import { MainNavComponent } from './components/dashboard/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CreatenoteComponent } from './components/dashboard/createnote/createnote.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { SearchboxComponent } from './components/dashboard/searchbox/searchbox.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PwdForgotComponent,
    PwdResetComponent,
    DashboardComponent,
    ToolbarComponent,
    MainNavComponent,
    CreatenoteComponent,
    SidebarComponent,
    SearchboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
