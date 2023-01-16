export const ADD_SETTINGS = 'ADD_SETTINGS';
export const SAVE_USER = 'SAVE_USER';
export const SUM_SCORE = 'SUM_SCORE';
export const ADD_TOTAL = 'ADD_TOTAL';
export const COUNT_CORRECT = 'COUNT_CORRECT';

export const addSetting = (settingsInfo) => ({
  type: ADD_SETTINGS,
  payload: { ...settingsInfo },
});

export const saveUser = (name, email) => ({
  type: SAVE_USER,
  payload: [name, email],
});

export const sumScore = (points) => ({
  type: SUM_SCORE,
  payload: points,
});

export const addTotal = (score, questions) => ({
  type: ADD_TOTAL,
  payload: [score, questions],
});

export const correctPhrase = (counts) => ({
  type: COUNT_CORRECT,
  payload: counts,
})
