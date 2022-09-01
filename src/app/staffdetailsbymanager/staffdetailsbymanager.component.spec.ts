import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffdetailsbymanagerComponent } from './staffdetailsbymanager.component';

describe('StaffdetailsbymanagerComponent', () => {
  let component: StaffdetailsbymanagerComponent;
  let fixture: ComponentFixture<StaffdetailsbymanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffdetailsbymanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffdetailsbymanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
