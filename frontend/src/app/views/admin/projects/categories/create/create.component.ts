import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectService } from 'app/services/project.service';

@Component({
  templateUrl: '../edit/edit.component.html'
})
export class AdminProjectsCategoriesCreateComponent {
  model: any = {};
  loading = false;
  errors = {
    name: null
  };

  constructor(private router: Router, private projectService: ProjectService) {}

  submit() {
    this.loading = true;
    this.projectService.createCategory(this.model)
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
