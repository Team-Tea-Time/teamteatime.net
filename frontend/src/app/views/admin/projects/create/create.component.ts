import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectCategory } from 'app/models/project-category.model';
import { ProjectService } from 'app/services/project.service';

@Component({
  templateUrl: '../edit/edit.component.html'
})
export class AdminProjectsCreateComponent implements OnInit {
  model: any = {};
  loading = false;
  editing = false;
  categories: ProjectCategory[];
  initialSummary: string = null;
  errors = {
    name: null,
    category_id: null,
    summary: null
  };

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getCategories()
      .subscribe(
        categories => this.categories = categories
      );
  }

  submit() {
    this.loading = true;
    this.projectService.createProject(this.model)
      .subscribe(
        project => {
          this.loading = false;
          this.router.navigate(['/admin/projects']);
        },
        error => {
          this.loading = false;
          this.errors = error.json();
        }
      );
  }
}
