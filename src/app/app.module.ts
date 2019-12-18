import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http';
import { PostsComponent } from './posts/posts.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './assignment-course-form/course-form.component';
import { PasswordValidationComponent } from './password-validation/password-validation.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component'


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SignupFormComponent,
    CourseComponent,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    DirectivesComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    PasswordValidationComponent,
    PostsComponent,
    HomeComponent,
    NavbarComponent,
    GithubProfileComponent,
    NotFoundComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'followers/:username', component: GithubProfileComponent},
      {path: 'followers', component: GithubFollowersComponent},
      {path: 'posts', component: PostsComponent},
      {path: '**', component: NotFoundComponent}
    ])
  
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
