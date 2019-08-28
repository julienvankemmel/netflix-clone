import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheSerieComponent } from './affiche-serie.component';

describe('AfficheSerieComponent', () => {
  let component: AfficheSerieComponent;
  let fixture: ComponentFixture<AfficheSerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheSerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
