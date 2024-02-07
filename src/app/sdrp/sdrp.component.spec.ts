import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdrpComponent } from './sdrp.component';

describe('SdrpComponent', () => {
  let component: SdrpComponent;
  let fixture: ComponentFixture<SdrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SdrpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SdrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
