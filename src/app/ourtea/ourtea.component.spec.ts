import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurteaComponent } from './ourtea.component';

describe('OurteaComponent', () => {
  let component: OurteaComponent;
  let fixture: ComponentFixture<OurteaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurteaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurteaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
