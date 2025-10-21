import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CareUiLib } from './care-ui-lib';

describe('CareUiLib', () => {
  let component: CareUiLib;
  let fixture: ComponentFixture<CareUiLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareUiLib],
    }).compileComponents();

    fixture = TestBed.createComponent(CareUiLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
