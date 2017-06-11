import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { ContactService } from 'app/services/contact.service';
import { ToastService } from 'app/services/toast.service';

@Component({
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  sending: Subscription;
  model = {
    email_address: null,
    email: null,
    message: null
  };
  errors = {
    email_address: null,
    email: null,
    message: null
  };

  constructor(
    private router: Router,
    private contactService: ContactService,
    private toastService: ToastService
  ) {}

  submit() {
    this.sending = this.contactService.sendMessage(
      this.model.email_address,
      this.model.email,
      this.model.message
    ).subscribe(
      response => {
        this.toastService.add('success', 'Message sent!');
        this.router.navigate(['/']);
      },
      error => {
        this.errors = error.json();
      }
    );
  }
}
