export const ADD_SETTINGS = 'ADD_SETTINGS';

export const addSetting = (settingsInfo) => ({
  type: ADD_SETTINGS,
  payload: { ...settingsInfo },
});
