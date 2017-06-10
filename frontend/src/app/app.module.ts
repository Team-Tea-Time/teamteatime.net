import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TagInputModule } from 'ng2-tag-input';
import { TrumbowygModule } from 'ng2-lazy-trumbowyg';
import { TruncateModule } from 'ng2-truncate';
import { NgxPaginationModule } from 'ngx-pagination';
import { BusyModule } from 'angular2-busy';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { ProjectsDocsComponent } from './views/projects/docs/docs.component';
import { FileSelectComponent } from './views/partials/file-select/file-select.component';
import { SplashComponent } from './views/partials/splash/splash.component';
import { BlogComponent } from './views/blog/blog.component';
import { PostDetailComponent } from './views/blog/post-detail/post-detail.component';
import { AdminComponent } from './views/admin/admin.component';
import { AdminProjectsComponent } from './views/admin/projects/projects.component';
import { AdminProjectsCategoriesCreateComponent } from './views/admin/projects/categories/create/create.component';
import { AdminProjectsCategoriesEditComponent } from './views/admin/projects/categories/edit/edit.component';
import { AdminProjectsEditComponent } from './views/admin/projects/edit/edit.component';
import { AdminPostsComponent } from './views/admin/posts/posts.component';
import { AdminPostsCreateComponent } from './views/admin/posts/create/create.component';
import { AdminPostsEditComponent } from './views/admin/posts/edit/edit.component';

import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';

import { AuthService } from './services/auth.service';
import { BlogService } from './services/blog.service';
import { GitHubService } from './services/github.service';
import { MediaService } from './services/media.service';
import { ProjectService } from './services/project.service';
import { SplashService } from './services/splash.service';

import { MomentDirective } from './directives/moment.directive';

import { KeysPipe } from './pipes/keys.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

import { GlobalRequestOptions } from './request-options';

const routes: Routes = [
  { path: '', component: ProjectsComponent, data: { title: "It's Tea Time." } },
  { path: 'docs/:slug', component: ProjectsDocsComponent },
  { path: 'docs/:slug/:branch', component: ProjectsDocsComponent },
  { path: 'docs/:slug/:branch/:object', component: ProjectsDocsComponent },
  { path: 'blog', component: BlogComponent, data: { title: "Tea Time Blog" } },
  { path: 'blog/tag/:tag', component: BlogComponent },
  { path: 'blog/:slug', component: PostDetailComponent },
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
      { path: 'projects', component: AdminProjectsComponent, data: { title: "Projects" } },
      { path: 'projects/categories/create', component: AdminProjectsCategoriesCreateComponent, data: { title: "Create project category" } },
      { path: 'projects/categories/:id/edit', component: AdminProjectsCategoriesEditComponent, data: { title: "Edit project category" } },
      { path: 'projects/create', component: AdminProjectsEditComponent, data: { title: "Create project" } },
      { path: 'projects/:id/edit', component: AdminProjectsEditComponent, data: { title: "Edit project" } },
      { path: 'posts', component: AdminPostsComponent, data: { title: "Blog posts" } },
      { path: 'posts/create', component: AdminPostsCreateComponent, data: { title: "Create blog post" } },
      { path: 'posts/:id/edit', component: AdminPostsEditComponent, data: { title: "Edit blog post" } }
    ]
  },
  { path: '**', component: NotFoundComponent, data: { title: "Not found" } }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    FileSelectComponent,
    SplashComponent,
    ProjectsComponent,
    ProjectsDocsComponent,
    BlogComponent,
    MomentDirective,
    KeysPipe,
    SafeHtmlPipe,
    PostDetailComponent,
    AdminComponent,
    AdminProjectsComponent,
    AdminProjectsCategoriesCreateComponent,
    AdminProjectsCategoriesEditComponent,
    AdminProjectsEditComponent,
    AdminPostsComponent,
    AdminPostsCreateComponent,
    AdminPostsEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    TagInputModule,
    TrumbowygModule,
    TruncateModule,
    NgxPaginationModule,
    BusyModule
  ],
  providers: [
    AuthGuard,
    GuestGuard,
    AuthService,
    BlogService,
    GitHubService,
    MediaService,
    ProjectService,
    SplashService,
    { provide: RequestOptions, useClass: GlobalRequestOptions }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
