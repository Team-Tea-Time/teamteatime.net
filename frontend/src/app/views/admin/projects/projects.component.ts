import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { Project } from 'app/models/project.model';
import { ProjectCategory } from 'app/models/project-category.model';
import { MediaService } from 'app/services/media.service';
import { ProjectService } from 'app/services/project.service';
import { SplashService } from 'app/services/splash.service';
import { ToastService } from 'app/services/toast.service';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class AdminProjectsComponent implements OnInit {
  loadingCategories: Subscription;
  loadingProjects: Subscription;
  projects: Project[];
  categories: ProjectCategory[];
  page: number = 1;
  total: number;
  error: string;

  constructor(
    private mediaService: MediaService,
    private projectService: ProjectService,
    private splashService: SplashService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadingCategories = this.getCategories();
    this.loadingProjects = this.getProjects();
  }

  getCategories(): Subscription {
    return this.projectService.getCategories().subscribe(categories => this.categories = categories);
  }

  getProjects(): Subscription {
    return this.projectService.getProjects(this.page)
      .subscribe(data => {
        this.total = data.total;
        this.projects = data.projects;
      });
  }

  goToPage(page: number) {
    this.page = page;
    this.getProjects();
  }

  deleteCategory(category) {
    if (
      !category.projects.length
      && confirm(`Are you sure you want to remove the category '${category.name}'?`)
    ) {
      this.projectService.deleteCategory(category._id).subscribe(
        document => {
          this.categories = this.categories.filter(c => {
            return c._id !== document._id
          });
          this.toastService.add('success', `${document.name} deleted.`);
        },
        error => this.error = <any>error
      )
    }
  }

  deleteProject(project) {
    if (confirm(`Are you sure you want to remove the project '${project.name}'?`)) {
      for (let key of project.images) {
        this.mediaService.deleteObject(key).subscribe();
      }

      this.projectService.deleteProject(project._id).subscribe(
        document => {
          this.projects = this.projects.filter(p => {
            return p._id !== document._id
          });
          this.getCategories();
          this.toastService.add('success', `${document.name} deleted.`);
        },
        error => this.error = <any>error
      )
    }
  }
}
