import { UsersChatNgPage } from './app.po';

describe('users-chat-ng App', function() {
  let page: UsersChatNgPage;

  beforeEach(() => {
    page = new UsersChatNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
