/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CredComponent } from './cred.component';

describe('CredComponent', () => {
  let component: CredComponent;
  let fixture: ComponentFixture<CredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
