import { LocalFormModule } from './form.module';

describe('FormModule', () => {
  let formModule: LocalFormModule;

  beforeEach(() => {
    formModule = new LocalFormModule();
  });

  it('should create an instance', () => {
    expect(formModule).toBeTruthy();
  });
});
