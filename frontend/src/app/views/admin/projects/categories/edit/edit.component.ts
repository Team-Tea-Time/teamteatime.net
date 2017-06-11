import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { ProjectCategory } from 'app/models/project-category.model';
import { ProjectService } from 'app/services/project.service';
import { ToastService } from 'app/services/toast.service';

@Component({
  templateUrl: './edit.component.html'
})
export class AdminProjectsCategoriesEditComponent implements OnInit {
  loading: Subscription;
  model: ProjectCategory = new ProjectCategory();
  editing: boolean = false;
  errors = {
    name: null
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.loading = this.projectService.getCategory(params['id'])
          .subscribe(
            category => {
              this.editing = true;
              this.model._id = category._id;
              this.model.name = category.name;
            },
            error => {
              this.errors = error.json();
            }
          );
      }
    });
  }

  submit() {
    let observable = this.editing
      ? this.projectService.updateCategory(this.model)
      : this.projectService.createCategory(this.model);

    this.loading = observable.subscribe(
        category => {
          this.router.navigate(['/admin/projects']);
          this.toastService.add('success', `'${category.name}' saved.`);
        },
        error => {
          this.errors = error.json();
        }
      );
  }
}
