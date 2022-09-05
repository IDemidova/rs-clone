export const enKeys: string[] = [
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M',
];

export const ruKeys: string[] = [
  'Й',
  'Ц',
  'У',
  'К',
  'Е',
  'Н',
  'Г',
  'Ш',
  'Щ',
  'З',
  'Х',
  'Ъ',
  'Ф',
  'Ы',
  'В',
  'А',
  'П',
  'Р',
  'О',
  'Л',
  'Д',
  'Ж',
  'Э',
  'Я',
  'Ч',
  'С',
  'М',
  'И',
  'Т',
  'Ь',
  'Б',
  'Ю',
];

export const enLibrary: Record<string, string> = {
  startModalTitle: 'Welcome to the Typing Hero!',
  startModalParagOne: 'Your task is to catch all the letters that appear on the playing field',
  startModalParagTwo:
    'Points are awarded for each letter caught. Throughout the level, you will also be shown your accuracy. If you have passed the level to the end - it is considered passed and falls into your thrift-box!',
  startModalParagThree: 'Catch letters, score points, practice accuracy!',
  startModalButton: "let's start!",

  // baseLvlContent: 'get your first points',
  appButton: 'Back',
  sandboxButton: 'sandbox',
  resetButton: 'Reset Score',
  resetModalInfo: 'Are you sure you want to reset the game progress and start over?',
  closeModal: 'close',

  sandboxMenuTitle: 'Build your own custom level!',
  sandboxModalText:
    'In the sandbox, you can choose the speed of the letters, the number of columns and the duration of the level. Sandbox points count towards the overall score, but, like levels, are overwritten with each replay.',
  sandboxInputSpeed: 'speed (in seconds): 1 to 10',
  sandboxInputDuration: 'duration (in seconds): 10 to 150',
  sandboxInputColumns: 'columns: 3 to 7',
  sandboxButtonStart: 'start',

  preparationContent: 'Preparation!',
  level: 'Level',
  levelButton: 'Back',
  levelCompleted: 'level completed!',

  score: 'Score:',
  accuracy: 'Accuracy:',
  currentScore: 'Current',
  currentAccuracy: 'Current',
  bestScore: 'Best',
  bestAccuracy: 'Best',
  total: 'Total',
  totalScore: 'Score:',
  average: 'Average',

  achievementTitle: 'New achievement',
};

export const ruLibrary: Record<string, string> = {
  startModalTitle: 'Добро пожаловать в игру Typing Hero!',
  startModalParagOne: 'Ваша задача — успеть поймать все буквы, появляющиеся на игровом поле.',
  startModalParagTwo:
    'За каждую пойманную букву начисляются очки. На протяжении уровня вам будет также выводиться ваша точность. Если вы прошли уровень до конца - он считается пройденным и падает вам в копилку!',
  startModalParagThree: 'Ловите буквы, набирайте очки, практикуйтесь в точности!',
  startModalButton: 'вперёд!',

  // baseLvlContent: 'получите первые очки',
  appButton: 'Назад',
  sandboxButton: 'песочница',
  resetButton: 'Сбросить Прогресс',
  resetModalInfo: 'Вы действительно хотите сбросить прогресс игры и начать заново?',
  closeModal: 'закрыть',

  sandboxMenuTitle: 'Настройте уровень по своему!',
  sandboxModalText:
    'В песочнице вы можете сами выбрать скорость букв, количество колонок и продолжительность уровня. Очки песочницы идут в общий зачёт, но, как и у уровней, перезаписываются при каждом повторном перепрохождении.',
  sandboxInputSpeed: 'скорость (в секундах): от 1 до 10',
  sandboxInputDuration: 'продожительность (в секундах): от 10 до 150',
  sandboxInputColumns: 'колонки: от 3 to 7',
  sandboxButtonStart: 'начать',

  preparationContent: 'Подготовка!',
  level: 'Уровень',
  levelButton: 'Назад',
  levelCompleted: 'уровень пройден!',

  score: 'Очки:',
  accuracy: 'Точность:',
  currentScore: 'Текущие',
  currentAccuracy: 'Текущая',
  bestScore: 'Лучшие',
  bestAccuracy: 'Лучшая',
  total: 'Всего',
  totalScore: 'Очков:',
  average: 'Средняя',

  achievementTitle: 'Новое достижение',
};
