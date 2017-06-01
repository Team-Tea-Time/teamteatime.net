import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostsCreateComponent } from './create.component';

describe('AdminPostsCreateComponent', () => {
  let component: AdminPostsCreateComponent;
  let fixture: ComponentFixture<AdminPostsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
