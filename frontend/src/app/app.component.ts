import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { AuthService } from './services/auth.service';
import { SplashService } from './services/splash.service';
import { ToastService } from './services/toast.service';

import { Toast } from './models/toast.model';

import debounce from 'debounce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Loading...';
  toasts: Toast[] = [];
  atTop = true;
  links = [
    { path: '/', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];
  now = Date.now();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private splashService: SplashService,
    private toastService: ToastService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe(event => {
        if (!event['title']) {
          this.splashService.title.subscribe(title => {
            this.setTitle(title);
          });
        } else {
          this.setTitle(event['title']);
        }
      });

    // Monitor scroll position to keep atTop up to date
    window.onscroll = debounce(event => {
      this.atTop = !(window.pageYOffset || document.documentElement.scrollTop);
    }, 15);

    // Handle toast
    this.toastService.bag.subscribe(toasts => this.toasts = toasts);
  }

  setTitle(title: string) {
    this.titleService.setTitle(`${title} - Team Tea Time`);
    this.title = title;
  }

  dismissToast(toast: Toast) {
    this.toastService.dismiss(toast);
  }
}
