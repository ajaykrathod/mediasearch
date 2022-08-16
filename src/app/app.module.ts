import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { SearchComponent } from './routes/search/search.component';
import { ProfileComponent } from './routes/profile/profile.component';
import { LoginComponent } from './routes/login/login.component';
import { SignupComponent } from './routes/signup/signup.component';
import { ForgotComponent } from './routes/forgot/forgot.component';
import { UnsplashComponent } from './components/unsplash/unsplash.component';
import { GiphyComponent } from './components/giphy/giphy.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { GeneralComponent } from './components/general/general.component';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent,
    ForgotComponent,
    UnsplashComponent,
    GiphyComponent,
    YoutubeComponent,
    GeneralComponent,
    SocialmediaComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
