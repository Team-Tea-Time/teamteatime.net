import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { User } from 'app/models/user.model';
import { ToastService } from 'app/services/toast.service';
import { UserService } from 'app/services/user.service';

@Component({
  templateUrl: './edit.component.html'
})
export class AdminUsersEditComponent implements OnInit {
  loading: Subscription;
  model: User = new User();
  editing: boolean = false;
  errors = {
    name: null,
    email: null,
    password: null
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.loading = this.userService.getUser(params['id'])
          .subscribe(
            user => {
              this.editing = true;
              this.model._id = user._id;
              this.model.name = user.name;
              this.model.email = user.email;
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
      ? this.userService.update(this.model)
      : this.userService.create(this.model);

    this.loading = observable.subscribe(
        user => {
          this.router.navigate(['/admin/users']);
          this.toastService.add('success', `'${user.name}' saved.`);
        },
        error => {
          this.errors = error.json();
        }
      );
  }
}
