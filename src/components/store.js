import { createContext } from 'react';
import Localize from './localization';

const GenerateLocalizer = () => {
  const langPref = window.sessionStorage.getItem('lang');

  if (langPref !== null && langPref !== '') {
    Localize.setLanguage(langPref);
  }

  return Localize;
};

export const initialState = {
  localize: GenerateLocalizer(),
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        localize: action.localize,
      };

    default:
      return state;
  }
};

export const DataContext = createContext();
