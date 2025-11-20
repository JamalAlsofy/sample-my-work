import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cardmenu } from './cardmenu';

describe('Cardmenu', () => {
  let component: Cardmenu;
  let fixture: ComponentFixture<Cardmenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardmenu],
    }).compileComponents();

    fixture = TestBed.createComponent(Cardmenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
