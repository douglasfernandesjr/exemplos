
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaTesteComponent } from './tabela-teste.component';

describe('TabelaTesteComponent', () => {
  let component: TabelaTesteComponent;
  let fixture: ComponentFixture<TabelaTesteComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaTesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
