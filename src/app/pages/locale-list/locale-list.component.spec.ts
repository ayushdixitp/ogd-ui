import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LocalesModule } from '../locales/locales.module';
import { LocaleListComponent } from './locale-list.component';

describe('LocaleListComponent', () => {
  let component: LocaleListComponent;
  let fixture: ComponentFixture<LocaleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocaleListComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        SharedModule,
        LocalesModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LocaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
