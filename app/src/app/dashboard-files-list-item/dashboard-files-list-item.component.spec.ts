/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashboardFilesListItemComponent } from './dashboard-files-list-item.component';

describe('DashboardFilesListItemComponent', () => {
  let component: DashboardFilesListItemComponent;
  let fixture: ComponentFixture<DashboardFilesListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFilesListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFilesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
});
