import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecouverteObservablesComponent } from './decouverte-observables.component';

describe('DecouverteObservablesComponent', () => {
  let component: DecouverteObservablesComponent;
  let fixture: ComponentFixture<DecouverteObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecouverteObservablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecouverteObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
