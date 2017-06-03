import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ProjectService } from 'app/services/project.service';

@Component({
  templateUrl: './edit.component.html'
})
export class AdminProjectsCategoriesEditComponent implements OnInit {
  model: any = {};
  loading = true;
  errors = {
    name: null
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectService.getCategory(params['id'])
        .subscribe(
          category => {
            this.loading = false;
            this.model._id = category._id;
            this.model.name = category.name;
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
    this.projectService.updateCategory(this.model)
      .subscribe(
        category => {
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
