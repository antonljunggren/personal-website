import React, { useContext, useState } from 'react';
import { A } from 'hookrouter';
import { LanguageList, Flags } from './ui/language-list';
import { DataContext } from './store';

import {
  IoHomeOutline as HouseIcon,
  IoNewspaperOutline as CvIcon,
  IoLaptopOutline as ProjectIcon,
  IoCodeSlashOutline as CodeIcon,
  IoLanguageOutline as LanguageIcon,
  IoEarthOutline as EarthIcon,
  IoChatboxOutline as ChatIcon,
} from 'react-icons/io5';

const NavMenu = ({ mobile, page }) => {
  const { store } = useContext(DataContext);
  const [showLangList, setShowLangList] = useState(false);
  const normalIconSize = '50';

  const desktopNav = (
    <div className='desktop-navbar navbar' style={page === 'home' ? { backgroundColor: 'transparent' } : {}}>
      <nav className='navbar-container'>
        <div className='navbar-right'>
          <ul className='navbar-nav'>
            <li className=''>
              <A href='/'>{store.localize.home}</A>
            </li>
            <li className=''>
              <A href='/projects'>{store.localize.projects}</A>
            </li>
            <li className='navbar-item'>
              <A href='#' onClick={() => setShowLangList(!showLangList)}>
                <img className='current-flag' alt={store.localize.getLanguage() + ' flag'} src={Flags[store.localize.getLanguage()]} />
              </A>
            </li>
          </ul>
        </div>
      </nav>
      <div className='language-list' style={{ display: showLangList ? 'block' : 'none' }}>
        <LanguageList closeCallback={() => setShowLangList(false)} />
      </div>
    </div>
  );

  const mobileNav = (
    <div>
      <nav className='mobile-navbar'>
        <A href='/'>
          <HouseIcon size={normalIconSize} />
          <span>{store.localize.home}</span>
        </A>
        <A href='/projects'>
          <div>
            <ProjectIcon size={normalIconSize} />
            <CodeIcon
              size='20'
              style={{
                position: 'absolute',
                transform: 'translate(-170%, 70%)',
              }}
            ></CodeIcon>
          </div>
          <span>{store.localize.projects}</span>
        </A>
        <A href='#' onClick={() => setShowLangList(!showLangList)}>
          <div>
            <EarthIcon size={normalIconSize} />
            <ChatIcon
              size='30'
              style={{
                position: 'absolute',
                transform: 'translate(-10%, 0%)',
              }}
            ></ChatIcon>
            <LanguageIcon
              size='17'
              style={{
                position: 'absolute',
                transform: 'translate(20%, 25%)',
              }}
            ></LanguageIcon>
          </div>
          <span>{store.localize.language}</span>
        </A>
      </nav>
      <div className='language-list' style={{ display: showLangList ? 'block' : 'none' }}>
        <LanguageList closeCallback={() => setShowLangList(false)} />
      </div>
    </div>
  );

  return mobile ? mobileNav : desktopNav;
};

export default NavMenu;
