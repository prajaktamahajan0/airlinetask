import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCheckedInComponent } from './total-checked-in.component';

describe('TotalCheckedInComponent', () => {
  let component: TotalCheckedInComponent;
  let fixture: ComponentFixture<TotalCheckedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCheckedInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalCheckedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
