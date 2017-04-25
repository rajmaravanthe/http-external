import { HttpExternalPage } from './app.po';

describe('http-external App', function() {
  let page: HttpExternalPage;

  beforeEach(() => {
    page = new HttpExternalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
