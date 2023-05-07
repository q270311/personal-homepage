export const saveThemeInLocalStorage = (darkMode) => localStorage.setItem('darkMode', darkMode);

export const getThemeFromLocalStorage = () => JSON.parse(localStorage.getItem('darkMode')) || false;
