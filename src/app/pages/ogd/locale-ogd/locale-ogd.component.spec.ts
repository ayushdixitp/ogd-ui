import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaleOgdComponent } from './locale-ogd.component';

describe('LocaleOgdComponent', () => {
  let component: LocaleOgdComponent;
  let fixture: ComponentFixture<LocaleOgdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocaleOgdComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LocaleOgdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
