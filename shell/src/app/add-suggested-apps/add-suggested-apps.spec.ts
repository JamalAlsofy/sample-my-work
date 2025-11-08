import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddSuggestedApps } from './add-suggested-apps';

describe('AddSuggestedApps', () => {
  let component: AddSuggestedApps;
  let fixture: ComponentFixture<AddSuggestedApps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSuggestedApps],
    }).compileComponents();

    fixture = TestBed.createComponent(AddSuggestedApps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
