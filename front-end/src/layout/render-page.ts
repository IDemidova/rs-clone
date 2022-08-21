import ManagePage from '../scripts/layout/manage-page';
import SwitchTheme from '../scripts/layout/switch-theme';
import State from '../scripts/state/state';
import Header from './blocks/header/header';
import CreateFooter from './blocks/footer/render-footer';
import HomeMain from './blocks/home/home-main';
import LayoutMain from './blocks/lessons/lessons-layout-main';
import GamesMain from './blocks/games/games-main';
import ManageState from '../scripts/state/manage-state';

import { Page } from '../types/enums';

class RenderPage {
  public static renderInteractivePage(): void {
    // const page = ManagePage.getPage();
    // const main = CreateMain
    // page.append(main);
  }

  public static renderStaticPage(): void {
    const page = ManagePage.getPage();
    const header = Header.createHeader(RenderPage.renderPage);
    let main: HTMLElement;
    const footer = CreateFooter.createFooter();

    switch (State.currentPage) {
      case Page.layout:
        main = LayoutMain.createLayoutMain(RenderPage.renderPage);
        break;
      case Page.games:
        main = GamesMain.createGamesMain(RenderPage.renderPage);
        break;
      default:
        main = HomeMain.createHomeMain(RenderPage.renderPage);
    }

    page.append(header, main, footer);
  }

  public static renderPage(): void {
    ManageState.updateState();
    ManagePage.clearPage();
    SwitchTheme.swapTheme();

    if (State.currentPage === Page.lesson || State.currentPage === Page.game) {
      RenderPage.renderInteractivePage();
    } else {
      RenderPage.renderStaticPage();
    }
  }
}

export default RenderPage;
