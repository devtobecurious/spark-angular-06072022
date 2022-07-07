import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionFilmComponent } from './edition-film.component';

describe('EditionFilmComponent', () => {
  let component: EditionFilmComponent;
  let fixture: ComponentFixture<EditionFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditionFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
