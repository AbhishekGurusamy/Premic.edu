import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './common/authentication/login/login.component';
import { UploadVideoComponent } from './superadmin/video/upload-video/upload-video.component';
import { EditVideoComponent } from './superadmin/video/edit-video/edit-video.component';
import { CreateUserComponent } from './superadmin/authentication/create-user/create-user.component';
import { DashboardComponent } from './common/home/dashboard/dashboard.component';
import { NavbarComponent } from './common/home/navbar/navbar.component';
import { FooterComponent } from './common/home/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WatchvideoComponent } from './common/home/watchvideo/watchvideo.component';
import { LandingComponent } from './landingpage/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UploadVideoComponent,
    EditVideoComponent,
    CreateUserComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    WatchvideoComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
