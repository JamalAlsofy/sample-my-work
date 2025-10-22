import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobState } from './glob-state';

describe('GlobState', () => {
  let component: GlobState;
  let fixture: ComponentFixture<GlobState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobState],
    }).compileComponents();

    fixture = TestBed.createComponent(GlobState);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
