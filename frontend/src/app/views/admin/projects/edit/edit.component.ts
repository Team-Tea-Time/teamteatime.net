import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Project } from 'app/models/project.model';
import { ProjectCategory } from 'app/models/project-category.model';
import { MediaService } from 'app/services/media.service';
import { ProjectService } from 'app/services/project.service';

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class AdminProjectsEditComponent implements OnInit {
  model: any = {
    images: []
  };
  s3Queue = [];
  loading = false;
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
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.projectService.getCategories()
      .subscribe(
        categories => this.categories = categories
      );

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.projectService.getProject(params['id'])
          .subscribe(
            project => {
              this.loading = false;
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
              this.loading = false;
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
      this.mediaService.deleteObject(key).subscribe(
        response => {
          this.model.images = this.model.images.filter(image => {
            return image != key;
          });
          this.s3Queue = [];
          this.submit(false);
        }
      );
    }
  }

  submit(redirect: boolean = true) {
    this.loading = true;

    for (let object of this.s3Queue) {
      this.model.images.push(object.file.name);
    }

    let observable = this.editing
      ? this.projectService.updateProject(this.model)
      : this.projectService.createProject(this.model);

    observable.subscribe(
        project => {
          for (let object of this.s3Queue) {
            this.mediaService.completeS3Request(object).subscribe();
          }

          this.loading = false;

          if (redirect) {
            this.router.navigate(['/admin/projects']);
          }
        },
        error => {
          this.loading = false;
          this.s3Queue = [];
          this.errors = error.json();
        }
      );
  }
}
