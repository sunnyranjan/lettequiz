import { LettequizPage } from './app.po';

describe('lettequiz App', () => {
  let page: LettequizPage;

  beforeEach(() => {
    page = new LettequizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
