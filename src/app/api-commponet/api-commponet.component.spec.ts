import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCommponetComponent } from './api-commponet.component';

describe('ApiCommponetComponent', () => {
  let component: ApiCommponetComponent;
  let fixture: ComponentFixture<ApiCommponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCommponetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCommponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
