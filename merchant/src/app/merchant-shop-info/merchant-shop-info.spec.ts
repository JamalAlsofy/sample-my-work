import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MerchantShopInfo } from './merchant-shop-info';

describe('MerchantShopInfo', () => {
  let component: MerchantShopInfo;
  let fixture: ComponentFixture<MerchantShopInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchantShopInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantShopInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
