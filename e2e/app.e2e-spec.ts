import { MosRulesAdminPage } from './app.po';

describe('mos-rules-admin App', function() {
  let page: MosRulesAdminPage;

  beforeEach(() => {
    page = new MosRulesAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
