import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InoutregisterComponent } from './inoutregister.component';

describe('InoutregisterComponent', () => {
  let component: InoutregisterComponent;
  let fixture: ComponentFixture<InoutregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InoutregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InoutregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
