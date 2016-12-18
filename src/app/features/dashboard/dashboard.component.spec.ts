/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterLinkStubDirective } from '../../../testing/stubs/router.stubs';
import { StoreModule } from '@ngrx/store';
import { declarations as sharedDeclarations } from '../../../shared/shared.declarations';

class StoreStub {

}
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, RouterLinkStubDirective, ...sharedDeclarations],
      imports: [MaterialModule.forRoot(), StoreModule.provideStore({})]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
