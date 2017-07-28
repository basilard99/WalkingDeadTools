import { WalkingDeadToolsPage } from './app.po';

describe('walking-dead-tools App', () => {
  let page: WalkingDeadToolsPage;

  beforeEach(() => {
    page = new WalkingDeadToolsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
