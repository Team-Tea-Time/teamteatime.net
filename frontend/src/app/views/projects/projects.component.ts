import { Component, OnInit } from '@angular/core';

import { ProjectCategory } from 'app/models/project-category.model';
import { ProjectService } from 'app/services/project.service';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {
  categories: ProjectCategory[];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getCategories(true).subscribe(
      categories => this.categories = categories
    );
  }
}
