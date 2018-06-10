import { TestBed, inject } from '@angular/core/testing';

import { PesquisaCEPService } from './pesquisa-cep.service';

describe('PesquisaCEPService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PesquisaCEPService]
    });
  });

  it('should be created', inject([PesquisaCEPService], (service: PesquisaCEPService) => {
    expect(service).toBeTruthy();
  }));
});
