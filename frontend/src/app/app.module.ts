import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FrontComponent } from './views/front/front.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { SplashComponent } from './views/partials/splash/splash.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { BlogComponent } from './views/blog/blog.component';
import { PostDetailComponent } from './views/blog/post-detail/post-detail.component';
import { AdminComponent } from './views/admin/admin.component';
import { AdminPostsComponent } from './views/admin/posts/posts.component';

import { BlogService } from './services/blog.service';
import { SplashService } from './services/splash.service';

import { MomentAgoDirective } from './directives/moment-ago.directive';

import { SafeHtmlPipe } from './pipes/safe-html.pipe';

const routes: Routes = [
  { path: '', component: FrontComponent, data: { title: "Welcome" } },
  { path: 'blog/:id/:slug', component: PostDetailComponent },
  { path: 'blog', component: BlogComponent, data: { title: "Tea Time Blog" } },
  { path: 'projects', component: ProjectsComponent, data: { title: "Tea Time Projects" } },
  { path: 'admin', component: AdminComponent, data: { title: "Admin Dashboard" }, children: [
    { path: 'posts', component: AdminPostsComponent, data: { title: "Blog posts" } }
  ] },
  { path: '**', component: NotFoundComponent, data: { title: "Not found" } }
];

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    NotFoundComponent,
    SplashComponent,
    ProjectsComponent,
    BlogComponent,
    MomentAgoDirective,
    SafeHtmlPipe,
    PostDetailComponent,
    AdminPostsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BlogService, SplashService],
  bootstrap: [AppComponent]
})
export class AppModule { }
