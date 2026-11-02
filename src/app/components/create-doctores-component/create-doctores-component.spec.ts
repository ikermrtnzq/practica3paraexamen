import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateDoctoresComponent } from './create-doctores-component';

describe('CreateDoctoresComponent', () => {
  let component: CreateDoctoresComponent;
  let fixture: ComponentFixture<CreateDoctoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateDoctoresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateDoctoresComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
