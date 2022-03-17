import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DempagComponent } from './dempag.component';

describe('DempagComponent', () => {
  let component: DempagComponent;
  let fixture: ComponentFixture<DempagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DempagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DempagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
