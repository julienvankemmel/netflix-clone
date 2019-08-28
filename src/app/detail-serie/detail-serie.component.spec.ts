import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSerieComponent } from './detail-serie.component';

describe('DetailSerieComponent', () => {
  let component: DetailSerieComponent;
  let fixture: ComponentFixture<DetailSerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
