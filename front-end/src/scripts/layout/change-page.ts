import State from '../state';
import RenderPage from '../../layout/render-page';

import { Page } from '../../types/enums';

export class ChangePage {
  public static changePage(pageName: Page): void {

    if (State.currentPage === pageName) return;

    State.currentPage = pageName;
    RenderPage.renderPage();
  }
}