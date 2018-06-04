import { PaisesModule } from './paises.module';

describe('PaisesModule', () => {
  let paisesModule: PaisesModule;

  beforeEach(() => {
    paisesModule = new PaisesModule();
  });

  it('should create an instance', () => {
    expect(paisesModule).toBeTruthy();
  });
});
