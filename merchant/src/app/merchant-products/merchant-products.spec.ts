import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MerchantProducts } from './merchant-products';

describe('MerchantProducts', () => {
  let component: MerchantProducts;
  let fixture: ComponentFixture<MerchantProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchantProducts],
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
