import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListObjetsComponent } from './list-objets.component';

fdescribe('ListObjetsComponent', () => {
  let component: ListObjetsComponent;
  let fixture: ComponentFixture<ListObjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListObjetsComponent ],
      imports: [

      ],
      providers: [

      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListObjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get two found objects', () => {
    // ARRANGE
    component.items.push({});
    component.items.push({});

    // ACT
    fixture.detectChanges();
    const table = fixture.nativeElement.querySelector('table');

    // ASSERT
    expect(table).toBeTruthy();
    expect(table.rows.length).toBe(2);
  });
});
