import CreateElement from '../../elements/create-element';
import CloseBtn from '../../elements/close-btn';
import Menu from '../header/menu';
import UserBtn from '../header/user-btn';

import { Tag } from '../../../types/enums';
import { RenderHandler } from '../../../types/types';

class BurgerMenu {
  public static createBurgerMenu(
    wrapper: HTMLElement,
    render: RenderHandler
  ): HTMLElement {
    const modal = CreateElement.createElement(Tag.div, [
      { name: 'class', value: 'burger-menu' },
    ]);
    const closeBtn = CloseBtn.createCloseBtn(wrapper);
    const menu = Menu.createMenu('menu modal-menu', render);
    const userBtn = UserBtn.getUserBtn('modal-user-btn');

    modal.append(closeBtn, menu, userBtn);

    return modal;
  }
}

export default BurgerMenu;
