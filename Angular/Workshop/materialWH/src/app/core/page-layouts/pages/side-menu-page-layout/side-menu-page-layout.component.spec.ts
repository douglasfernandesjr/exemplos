
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuPageLayoutComponent } from './side-menu-page-layout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatListModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SideMenuPageLayoutComponent', () => {
  let component: SideMenuPageLayoutComponent;
  let fixture: ComponentFixture<SideMenuPageLayoutComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuPageLayoutComponent ],
      imports: [RouterTestingModule, MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule, BrowserAnimationsModule]
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
