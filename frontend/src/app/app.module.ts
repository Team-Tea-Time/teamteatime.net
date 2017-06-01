import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FrontComponent } from './views/front/front.component';
import { LoginComponent } from './views/login/login.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { SplashComponent } from './views/partials/splash/splash.component';
import { BlogComponent } from './views/blog/blog.component';
import { PostDetailComponent } from './views/blog/post-detail/post-detail.component';
import { AdminComponent } from './views/admin/admin.component';
import { AdminPostsComponent } from './views/admin/posts/posts.component';
import { AdminPostsCreateComponent } from './views/admin/posts/create/create.component';

import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';

import { AuthService } from './services/auth.service';
import { BlogService } from './services/blog.service';
import { SplashService } from './services/splash.service';

import { MomentAgoDirective } from './directives/moment-ago.directive';

import { SafeHtmlPipe } from './pipes/safe-html.pipe';

import { GlobalRequestOptions } from './request-options';

const routes: Routes = [
  { path: '', component: FrontComponent, data: { title: "Welcome" } },
  { path: 'blog/:id/:slug', component: PostDetailComponent },
  { path: 'blog', component: BlogComponent, data: { title: "Tea Time Blog" } },
  { path: 'projects', component: ProjectsComponent, data: { title: "Tea Time Projects" } },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard],
    canActivateChild: [GuestGuard],
    data: { title: "Log in" }
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    data: { title: "Admin Dashboard" },
    children: [
      { path: 'posts', component: AdminPostsComponent, data: { title: "Blog posts" } },
      { path: 'posts/create', component: AdminPostsCreateComponent, data: { title: "Create blog post" } }
    ]
  },
  { path: '**', component: NotFoundComponent, data: { title: "Not found" } }
];

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    LoginComponent,
    NotFoundComponent,
    SplashComponent,
    ProjectsComponent,
    BlogComponent,
    MomentAgoDirective,
    SafeHtmlPipe,
    PostDetailComponent,
    AdminComponent,
    AdminPostsComponent,
    AdminPostsCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuard,
    GuestGuard,
    AuthService,
    BlogService,
    SplashService,
    { provide: RequestOptions, useClass: GlobalRequestOptions }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
