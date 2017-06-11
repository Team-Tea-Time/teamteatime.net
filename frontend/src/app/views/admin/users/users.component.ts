import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { User } from 'app/models/user.model';
import { UserService } from 'app/services/user.service';
import { SplashService } from 'app/services/splash.service';
import { ToastService } from 'app/services/toast.service';

@Component({
  templateUrl: './users.component.html'
})
export class AdminUsersComponent implements OnInit {
  loading: Subscription;
  users: User[];
  error: string;

  constructor(
    private userService: UserService,
    private splashService: SplashService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.loading = this.userService.list().subscribe(users => this.users = users);
  }

  delete(user) {
    if (confirm(`Are you sure you want to remove user '${user.name}'?`)) {
      this.loading = this.userService.destroy(user).subscribe(
        document => {
          this.users = this.users.filter(u => {
            return u._id !== document._id
          });
          this.toastService.add('success', `'${document.name}' deleted.`);
        },
        error => this.error = <any>error
      )
    }
  }
}
