import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheFilmComponent } from './affiche-film.component';

describe('AfficheFilmComponent', () => {
  let component: AfficheFilmComponent;
  let fixture: ComponentFixture<AfficheFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
