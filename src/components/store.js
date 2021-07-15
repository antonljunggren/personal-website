import { createContext } from 'react';
import Localize from './localization';

export const initialState = {
  localize: Localize,
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
