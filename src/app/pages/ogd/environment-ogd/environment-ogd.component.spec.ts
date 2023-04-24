import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentOgdComponent } from './environment-ogd.component';

describe('EnvironmentOgdComponent', () => {
  let component: EnvironmentOgdComponent;
  let fixture: ComponentFixture<EnvironmentOgdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnvironmentOgdComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EnvironmentOgdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
