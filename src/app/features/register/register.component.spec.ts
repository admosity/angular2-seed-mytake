/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { ColDirective } from '../../common/Col/col.directive';
import { DebugElement } from '@angular/core';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent, ColDirective]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create register component successfully', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a user registery form', () => {
    const registerEl = fixture.nativeElement;
    expect(registerEl.querySelector('#register-form')).toBeTruthy();
  });
});
