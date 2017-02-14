import { AngularRotasPage } from './app.po';

describe('angular-rotas App', function() {
  let page: AngularRotasPage;

  beforeEach(() => {
    page = new AngularRotasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
