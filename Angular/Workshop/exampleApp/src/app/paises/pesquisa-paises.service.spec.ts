import { TestBed, inject } from '@angular/core/testing';

import { PesquisaPaisesService } from './pesquisa-paises.service';

describe('PesquisaPaisesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PesquisaPaisesService]
    });
  });

  it('should be created', inject([PesquisaPaisesService], (service: PesquisaPaisesService) => {
    expect(service).toBeTruthy();
  }));
});
