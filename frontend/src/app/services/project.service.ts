import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Project } from 'app/models/project.model';
import { ProjectCategory } from 'app/models/project-category.model';
import { Service } from './service';

@Injectable()
export class ProjectService extends Service {
  private urlCategories = '/api/project-categories';
  private urlProjects = '/api/projects';

  getCategories(withProjects: Boolean = false): Observable<ProjectCategory[]> {
    let url = withProjects
      ? `${this.urlCategories}?withProjects=true`
      : this.urlCategories;

    return this.get(url);
  }

  getProjects(page = null) {
    let url = (page) ? `${this.urlProjects}?page=${page}` : this.urlProjects;
    return this.get(url);
  }

  getCategory(id: string): Observable<ProjectCategory> {
    return this.get(`${this.urlCategories}/${id}`);
  }

  getProject(id: string): Observable<Project> {
    return this.get(`${this.urlProjects}/${id}`);
  }

  getProjectBySlug(slug: string): Observable<Project> {
    return this.get(`${this.urlProjects}/slug/${slug}`);
  }

  createCategory(category: ProjectCategory): Observable<ProjectCategory> {
    return this.post(this.urlCategories, category);
  }

  createProject(project: Project): Observable<Project> {
    return this.post(this.urlProjects, project);
  }

  updateCategory(category: ProjectCategory): Observable<Project> {
    return this.put(`${this.urlCategories}/${category._id}`, category);
  }

  updateProject(project: Project): Observable<Project> {
    return this.put(`${this.urlProjects}/${project._id}`, project);
  }

  deleteCategory(id: string): Observable<ProjectCategory> {
    return this.delete(`${this.urlCategories}/${id}`);
  }

  deleteProject(id: string): Observable<Project> {
    return this.delete(`${this.urlProjects}/${id}`);
  }
}
