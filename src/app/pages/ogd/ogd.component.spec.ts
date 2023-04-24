import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgdComponent } from './ogd.component';

describe('OgdComponent', () => {
  let component: OgdComponent;
  let fixture: ComponentFixture<OgdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OgdComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OgdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
