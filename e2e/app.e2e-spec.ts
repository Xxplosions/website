import { Xxplosions.ComPage } from './app.po';

describe('xxplosions.com App', () => {
  let page: Xxplosions.ComPage;

  beforeEach(() => {
    page = new Xxplosions.ComPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
