export const ADD_SETTINGS = 'ADD_SETTINGS';
export const SAVE_USER = 'SAVE_USER';

export const addSetting = (settingsInfo) => ({
  type: ADD_SETTINGS,
  payload: { ...settingsInfo },
});

export const saveUser = (name, email) => ({
  type: SAVE_USER,
  payload: [name, email],
});
