import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { Project } from 'app/models/project.model';
import { ProjectCategory } from 'app/models/project-category.model';
import { MediaService } from 'app/services/media.service';
import { ProjectService } from 'app/services/project.service';
import { ToastService } from 'app/services/toast.service';

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class AdminProjectsEditComponent implements OnInit {
  loading: Subscription;
  model: Project = new Project();
  s3Queue = [];
  editing = false;
  categories: ProjectCategory[];
  initialSummary: String = null;
  errors = {
    name: null,
    category_id: null,
    summary: null
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mediaService: MediaService,
    private projectService: ProjectService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.projectService.getCategories()
      .subscribe(
        categories => this.categories = categories
      );

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.loading = this.projectService.getProject(params['id'])
          .subscribe(
            project => {
              this.editing = true;
              this.model._id = project._id;
              this.model.name = project.name;
              this.model.slug = project.slug;
              this.model.images = project.images;
              this.model.category_id = project.category._id;
              this.initialSummary = project.summary;
              this.model.summary = project.summary;
              this.model.url = project.url;
              this.model.source_repo = project.source_repo;
              this.model.documentation_repo = project.documentation_repo;
              this.model.download_url = project.download_url;
              this.model.tags = project.tags;
            },
            error => {
              this.errors = error.json();
            }
          )
      }
    });
  }

  onSelectImage(image) {
    this.s3Queue.push(image);
  }

  deleteImage(key) {
    if (confirm(`Are you sure you want to remove the image '${key}'?`)) {
      this.loading = this.mediaService.deleteObject(key).subscribe(
        response => {
          this.model.images = this.model.images.filter(image => {
            return image != key;
          });
          this.s3Queue = [];
          this.submit(false);
          this.toastService.add('success', 'Image deleted.');
        }
      );
    }
  }

  submit(redirect: boolean = true) {
    for (let object of this.s3Queue) {
      this.model.images.push(object.file.name);
    }

    let observable = this.editing
      ? this.projectService.updateProject(this.model)
      : this.projectService.createProject(this.model);

    this.loading = observable.subscribe(
        project => {
          for (let object of this.s3Queue) {
            this.mediaService.completeS3Request(object).subscribe();
          }

          if (redirect) {
            this.router.navigate(['/admin/projects']);
            this.toastService.add('success', `'${project.name}' saved.`);
          }
        },
        error => {
          this.s3Queue = [];
          this.errors = error.json();
        }
      );
  }
}
