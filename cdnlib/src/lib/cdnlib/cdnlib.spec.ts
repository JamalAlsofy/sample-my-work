import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cdnlib } from './cdnlib';

describe('Cdnlib', () => {
  let component: Cdnlib;
  let fixture: ComponentFixture<Cdnlib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cdnlib],
    }).compileComponents();

    fixture = TestBed.createComponent(Cdnlib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
