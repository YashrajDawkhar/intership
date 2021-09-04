import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonLoginRegisterComponent } from './common-login-register.component';

describe('CommonLoginRegisterComponent', () => {
  let component: CommonLoginRegisterComponent;
  let fixture: ComponentFixture<CommonLoginRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonLoginRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonLoginRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
