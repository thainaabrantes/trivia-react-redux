export const ADD_SETTINGS = 'ADD_SETTINGS';
export const SAVE_USER = 'SAVE_USER';
export const GO_HOME = 'GO_HOME';
export const SUM_SCORE = 'SUM_SCORE';

export const addSetting = (settingsInfo) => ({
  type: ADD_SETTINGS,
  payload: { ...settingsInfo },
});

export const saveUser = (name, email) => ({
  type: SAVE_USER,
  payload: [name, email],
});

export const goHome = (otherpage) => ({ // otherpage = objeto criado com o estado
  type: GO_HOME,
  payload: { ...otherpage },
});

export const sumScore = (points) => ({
  type: SUM_SCORE,
  payload: points,
});
