import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Subscription } from 'rxjs';

import { Project } from 'app/models/project.model';
import { GitHubService } from 'app/services/github.service';
import { ProjectService } from 'app/services/project.service';
import { SplashService } from 'app/services/splash.service';

@Component({
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.less']
})
export class ProjectsDocsComponent implements OnInit {
  params: Params;
  loadingProject: Subscription;
  loadingBranches: Subscription;
  loadingTree: Subscription;
  loadingConfig: Subscription;
  loadingContent: Subscription;
  project: Project;
  branches: object[];
  currentBranch: string;
  config: object;
  content: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gitHubService: GitHubService,
    private projectService: ProjectService,
    private splashService: SplashService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.params = params;
      this.getProject(params['slug'], params['branch'], params['object']);
    });
  }

  getProject(slug: string, branch: string, object: string) {
    this.loadingProject = this.projectService.getProjectBySlug(slug).subscribe(
      project => {
        this.project = project;
        this.splashService.setTitle(`${project.name} Documentation`);
        this.getBranches(project.documentation_repo, branch, object);
      }
    );
  }

  getBranches(repo: string, branch: string, object: string) {
    this.loadingBranches = this.gitHubService.getBranches(repo).subscribe(
      branches => {
        branches = branches.reverse();
        this.branches = branches;

        if (!branch) {
          branch = branches[0].name;
        }

        this.currentBranch = branch;

        let commit = branches.find(b => {
          return b.name == branch;
        }).commit;
        this.getTree(repo, commit.sha, object);
      }
    );
  }

  getTree(repo: string, treeSha: string, object: string) {
    this.loadingTree = this.gitHubService.getTree(repo, treeSha).subscribe(
      tree => {
        tree = tree.tree;

        this.getConfig(repo, tree);

        if (!object) {
          object = 'introduction.md';
          this.router.navigate(
            (this.params.branch) ? [object] : [this.currentBranch, object],
            { relativeTo: this.route }
          );
        }

        let sha = tree.find(o => {
          return o.path == object;
        }).sha;

        this.loadingContent = this.getBlob(repo, sha, true).subscribe(
          content => {
            this.content = content;
          }
        );
      }
    );
  }

  getConfig(repo: string, tree) {
    let sha = tree.find(o => {
      return o.path == '_config.json';
    }).sha;

    this.loadingConfig = this.getBlob(repo, sha).subscribe(
      config => this.config = config
    );
  }

  getBlob(repo: string, sha: string, render: boolean = false) {
    return this.gitHubService.getBlob(repo, sha, render);
  }
}
