import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FrontComponent } from './views/front/front.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { SplashComponent } from './partials/splash/splash.component';
import { ProjectsComponent } from './views/projects/projects.component';

const routes: Routes = [
  { path: '', component: FrontComponent, data: { title: "Welcome" } },
  { path: 'projects', component: ProjectsComponent, data: { title: "Tea Time Projects" } },
  { path: '**', component: NotFoundComponent, data: { title: "Not found" } }
];

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    NotFoundComponent,
    SplashComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
