import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MerchantActivety } from './merchant-activety';

describe('MerchantActivety', () => {
  let component: MerchantActivety;
  let fixture: ComponentFixture<MerchantActivety>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchantActivety],
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantActivety);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
