import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MerchantProfile } from './merchant-profile';

describe('MerchantProfile', () => {
  let component: MerchantProfile;
  let fixture: ComponentFixture<MerchantProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchantProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
