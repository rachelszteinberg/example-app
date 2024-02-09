import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SystemPortalComponent } from './system-portal.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('SystemPortalComponent', () => {
  let component: SystemPortalComponent;
  let fixture: ComponentFixture<SystemPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SystemPortalComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SystemPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
