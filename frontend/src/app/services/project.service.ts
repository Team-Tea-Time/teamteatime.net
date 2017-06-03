import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Project } from 'app/models/project.model';
import { ProjectCategory } from 'app/models/project-category.model';

@Injectable()
export class ProjectService {
  private urlCategories = '/api/project-categories';
  private urlProjects = '/api/projects';

  constructor(private http: Http) {}

  getCategories(withProjects = false): Observable<ProjectCategory[]> {
    return this.http.get(this.urlCategories)
      .map(this.extractData);
  }

  getProjects(page = null) {
    let url = (page) ? `${this.urlProjects}?page=${page}` : this.urlProjects;
    return this.http.get(url)
      .map(this.extractData);
  }

  getCategory(id: string): Observable<ProjectCategory> {
    return this.http.get(`${this.urlCategories}/${id}`)
      .map(this.extractData);
  }

  getProject(id: string): Observable<Project> {
    return this.http.get(`${this.urlProjects}/${id}`)
      .map(this.extractData);
  }

  createCategory(data: ProjectCategory): Observable<ProjectCategory> {
    return this.http.post(this.urlCategories, data)
      .map(this.extractData);
  }

  createProject(data: Project): Observable<Project> {
    return this.http.post(this.urlProjects, data)
      .map(this.extractData);
  }

  updateCategory(category: ProjectCategory): Observable<Project> {
    return this.http.put(`${this.urlCategories}/${category._id}`, category)
      .map(this.extractData);
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put(`${this.urlProjects}/${project._id}`, project)
      .map(this.extractData);
  }

  deleteCategory(id: string): Observable<ProjectCategory> {
    return this.http.delete(`${this.urlCategories}/${id}`)
      .map(this.extractData);
  }

  deleteProject(id: string): Observable<Project> {
    return this.http.delete(`${this.urlProjects}/${id}`)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
}
