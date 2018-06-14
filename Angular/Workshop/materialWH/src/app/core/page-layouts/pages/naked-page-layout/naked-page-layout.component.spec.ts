import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NakedPageLayoutComponent } from './naked-page-layout.component';

describe('NakedPageLayoutComponent', () => {
  let component: NakedPageLayoutComponent;
  let fixture: ComponentFixture<NakedPageLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NakedPageLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NakedPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
