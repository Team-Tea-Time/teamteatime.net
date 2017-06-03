import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ProjectCategory } from 'app/models/project-category.model';
import { ProjectService } from 'app/services/project.service';

@Component({
  templateUrl: './edit.component.html'
})
export class AdminProjectsEditComponent implements OnInit {
  model: any = {};
  loading = true;
  editing = true;
  categories: ProjectCategory[];
  initialSummary: string = null;
  errors = {
    name: null,
    category: null,
    summary: null
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectService.getCategories()
        .subscribe(
          categories => this.categories = categories
        );

      this.projectService.getProject(params['id'])
        .subscribe(
          project => {
            this.loading = false;
            this.model._id = project._id;
            this.model.name = project.name;
            this.model.slug = project.slug;
            this.model.category_id = project.category._id;
            this.initialSummary = project.summary;
            this.model.summary = project.summary;
            this.model.url = project.url;
            this.model.documentation_repo = project.documentation_repo;
            this.model.download_url = project.download_url;
            this.model.tags = project.tags;
          },
          error => {
            this.loading = false;
            this.errors = error.json();
          }
        )
    });
  }

  submit() {
    this.loading = true;
    this.projectService.updateProject(this.model)
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
