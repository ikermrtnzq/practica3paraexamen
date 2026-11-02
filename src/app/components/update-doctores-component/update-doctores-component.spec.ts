import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateDoctoresComponent } from './update-doctores-component';

describe('UpdateDoctoresComponent', () => {
  let component: UpdateDoctoresComponent;
  let fixture: ComponentFixture<UpdateDoctoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateDoctoresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateDoctoresComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
