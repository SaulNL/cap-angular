import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticaUnoComponent } from './practica-uno.component';

describe('PracticaUnoComponent', () => {
  let component: PracticaUnoComponent;
  let fixture: ComponentFixture<PracticaUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticaUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticaUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
