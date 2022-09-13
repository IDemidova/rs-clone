import CreateElement from '../../elements/create-element';
import LessonFontBtn from './custom/lesson-font-btn';
import LessonSoundBtn from './custom/lesson-sound-btn';
import LessonBgBtn from './custom/lesson-bg-btn';
import LessonSkinBtn from './custom/lesson-skin-btn';
import SettingsOverlay from './custom/settings-overlay';

import { Tag } from '../../../types/enums';

class LessonSettings {
  public static createLessonSettings(): HTMLElement {
    const lessonSettings = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'lesson-settings' }]);
    const panel = CreateElement.createElement(Tag.div, [{ name: 'class', value: 'options-panel hidden' }]);
    const overlay = SettingsOverlay.create(panel);
    const fontBtn = LessonFontBtn.createLessonFontBtn(panel, overlay);
    const soundBtn = LessonSoundBtn.createLessonSoundBtn(panel, overlay);
    const bgBtn = LessonBgBtn.createLessonBgBtn(panel, overlay);
    const skinBtn = LessonSkinBtn.createLessonSkinBtn(panel, overlay);

    lessonSettings.append(fontBtn, soundBtn, skinBtn, bgBtn, panel);

    return lessonSettings;
  }
}

export default LessonSettings;
