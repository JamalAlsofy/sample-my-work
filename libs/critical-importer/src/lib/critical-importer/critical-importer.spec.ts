import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriticalImporter } from './critical-importer';

describe('CriticalImporter', () => {
  let component: CriticalImporter;
  let fixture: ComponentFixture<CriticalImporter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriticalImporter],
    }).compileComponents();

    fixture = TestBed.createComponent(CriticalImporter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
