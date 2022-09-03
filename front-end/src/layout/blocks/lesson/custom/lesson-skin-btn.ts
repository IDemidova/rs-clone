import CreateElement from '../../../elements/create-element';
import ActiveOption from './active-option';
import SkinOption from './skin-options';

import { LessonSkin, Tag } from '../../../../types/enums';

class LessonSkinBtn {
  public static fillOptionPanel(panel: HTMLElement, overlay: HTMLElement): void {
    const optionsPanel = panel;
    const skinOptions = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'options-skin' }]);
    const skinOne = SkinOption.createSkinOption(LessonSkin.default);
    const skinTwo = SkinOption.createSkinOption(LessonSkin.one);
    const skinThree = SkinOption.createSkinOption(LessonSkin.two);
    const skinFour = SkinOption.createSkinOption(LessonSkin.three);

    skinOptions.append(skinOne, skinTwo, skinThree, skinFour);
    optionsPanel.classList.remove('hidden');
    optionsPanel.textContent = '';
    optionsPanel.append(skinOptions);
    overlay.classList.remove('hidden');
  }

  public static createLessonSkinBtn(panel: HTMLElement, overlay: HTMLElement): HTMLElement {
    const skinBtn = CreateElement.createElement(Tag.btn, [{ name: 'class', value: 'lesson-skin-btn' }]);

    skinBtn.addEventListener('click', () => {
      LessonSkinBtn.fillOptionPanel(panel, overlay);

      if (ActiveOption.option) ActiveOption.option.classList.remove('active-option');

      ActiveOption.option = skinBtn;
      ActiveOption.option.classList.add('active-option');
    });

    return skinBtn;
  }
}

export default LessonSkinBtn;
