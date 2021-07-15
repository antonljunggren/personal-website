import { React, useState, useContext } from 'react';
import { DataContext } from '../store';

export const Flags = {
  sv: './SE.svg',
  en: './GB.svg',
};

export const LanguageList = ({ closeCallback }) => {
  const { store, dispatch } = useContext(DataContext);
  const [lang, setLang] = useState(store.localize.getLanguage());

  const changeLang = (newLang) => {
    switch (newLang) {
      case 'sv':
        store.localize.setLanguage('sv');
        dispatch({
          type: 'SET_LANGUAGE',
          localize: store.localize,
        });
        setLang('sv');
        break;
      case 'en':
        store.localize.setLanguage('en');
        dispatch({
          type: 'SET_LANGUAGE',
          localize: store.localize,
        });
        setLang('en');
        break;
      default:
        break;
    }

    closeCallback();
  };

  return (
    <div>
      <button onClick={() => changeLang('sv')}>
        <div className='flex flex-center'>
          <div className={lang !== 'sv' ? 'text-light' : 'text-bold'}>Svenska</div>
          <img className={lang !== 'sv' ? 'language-flag' : 'language-flag selected-flag'} src='./SE.svg' alt='Swedish flag' width='30%' />
        </div>
      </button>
      <button onClick={() => changeLang('en')}>
        <div className='flex flex-center'>
          <div className={lang !== 'en' ? 'text-light' : 'text-bold'}>English</div>
          <img className={lang !== 'en' ? 'language-flag' : 'language-flag selected-flag'} src='./GB.svg' alt='British flag' width='30%' />
        </div>
      </button>
    </div>
  );
};
