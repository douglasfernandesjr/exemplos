
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuPageLayoutComponent } from './side-menu-page-layout.component';

describe('SideMenuPageLayoutComponent', () => {
  let component: SideMenuPageLayoutComponent;
  let fixture: ComponentFixture<SideMenuPageLayoutComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuPageLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideMenuPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
