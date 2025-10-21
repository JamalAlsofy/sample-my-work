import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CareLib } from './care-lib';

describe('CareLib', () => {
  let component: CareLib;
  let fixture: ComponentFixture<CareLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareLib],
    }).compileComponents();

    fixture = TestBed.createComponent(CareLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
