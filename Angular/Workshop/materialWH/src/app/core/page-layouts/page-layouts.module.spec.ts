import { PageLayoutsModule } from './page-layouts.module';

describe('PageLayoutsModule', () => {
  let pageLayoutsModule: PageLayoutsModule;

  beforeEach(() => {
    pageLayoutsModule = new PageLayoutsModule();
  });

  it('should create an instance', () => {
    expect(pageLayoutsModule).toBeTruthy();
  });
});
