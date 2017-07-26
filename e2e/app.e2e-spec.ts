import { Ng4MaterialExamplePage } from './app.po';

describe('ng4-material-example App', () => {
  let page: Ng4MaterialExamplePage;

  beforeEach(() => {
    page = new Ng4MaterialExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
