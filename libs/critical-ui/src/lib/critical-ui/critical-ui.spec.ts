import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriticalUi } from './critical-ui';

describe('CriticalUi', () => {
  let component: CriticalUi;
  let fixture: ComponentFixture<CriticalUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriticalUi],
    }).compileComponents();

    fixture = TestBed.createComponent(CriticalUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
