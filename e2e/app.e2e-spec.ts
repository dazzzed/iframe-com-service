import { SharedServicePage } from './app.po';

describe('shared-service App', () => {
  let page: SharedServicePage;

  beforeEach(() => {
    page = new SharedServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
