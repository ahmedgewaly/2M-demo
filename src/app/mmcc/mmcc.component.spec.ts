import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmccComponent } from './mmcc.component';

describe('MmccComponent', () => {
  let component: MmccComponent;
  let fixture: ComponentFixture<MmccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
