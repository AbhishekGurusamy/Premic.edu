import { NgModule, APP_INITIALIZER } from '@angular/core';
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

import { User } from './shared/user.model';
import { CommomServiceService } from './service/commom-service.service';


export function whoAmILoader(whoAmIService: CommomServiceService ): () => Promise<any> {
  return () => {
    const token = localStorage.getItem('token');
    if (token) {
      whoAmIService.setToken(token);
    }
    return whoAmIService.initialize();
  };
}

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
  providers: [
    CommomServiceService,User,
    {
      provide: APP_INITIALIZER,
      useFactory: whoAmILoader,
      deps: [CommomServiceService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
