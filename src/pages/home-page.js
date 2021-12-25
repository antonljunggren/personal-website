import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../components/store';
import { IoArrowDownCircleOutline as HintArrowIcon } from 'react-icons/io5';
import {
  FcReading as ReadingIcon,
  FcDataConfiguration as BackendIcon,
  FcTwoSmartphones as MultiPhoneIcon,
  FcConferenceCall as PeopleIcon,
  FcComboChart as ChartIcon,
  FcEngineering as CogIcon,
  FcCurrencyExchange as CurrencyIcon,
  FcFile as PaperIcon,
} from 'react-icons/fc';
import { AiFillCode as CodeIcon } from 'react-icons/ai';
import { BsFillUmbrellaFill as UmbrellaIcon } from 'react-icons/bs';

const HomePage = () => {
  const { store } = useContext(DataContext);
  const [showScrollHint, setShowScrollHint] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(true);
    }, 3000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <div className='header'>
        <div className='header-name'>
          <h1>Anton Ljunggren</h1>
          <h4>
            {store.localize.computerEngineer} & {store.localize.itConsultant}
          </h4>
          <div id='about' className='about center-text'>
            <p className='text-content'>{store.localize.aboutText}</p>
          </div>
          <div id='scrollHint' className={showScrollHint ? 'hint-arrow active' : 'hint-arrow'}>
            <HintArrowIcon size='50' />
          </div>
        </div>
      </div>
      <div id='skills' className='skills center-text'>
        <h1>{store.localize.mainSkills}</h1>
        <div className='skills-container'>
          <div className='skills-card'>
            <ReadingIcon size='50' />
            <p>{store.localize.learningSkills}</p>
          </div>

          <div className='skills-card'>
            <BackendIcon size='50' />
            <p>{store.localize.backendSkills}</p>
          </div>

          <div className='skills-card'>
            <CodeIcon size='50' />
            <p>{store.localize.csharpSkills}</p>
          </div>

          <div className='skills-card'>
            <MultiPhoneIcon size='50' />
            <p>{store.localize.xamarinExperience}</p>
          </div>

          <div className='skills-card'>
            <div id='crmIcons'>
              <CogIcon id='cogIcon' size='40' />
              <ChartIcon id='chartIcon' size='40' />
              <PeopleIcon id='peopleIcon' size='50' />
            </div>
            <p>{store.localize.crmExperience}</p>
          </div>

          <div className='skills-card'>
            <div id='reinsuranceIcons'>
              <UmbrellaIcon id='umbrellaIcon' size='50' />
              <PaperIcon id='paperIcon' size='40' />
              <CurrencyIcon id='currencyIcon' size='25' />
            </div>
            <p>{store.localize.reinsuranceExperience}</p>
          </div>
        </div>
      </div>
      <div id='my-projects' className='my-projects center-text'>
        <h1>{store.localize.myProjects}</h1>
        <h3>{store.localize.kulturjakten}</h3>
        <div className='kjakt'>
          <img src='./img/kulturjakten.png' alt='Screenshot of kulturjakten app' />
          <p>{store.localize.kulturjaktenText}</p>
        </div>
      </div>
      <div className='footer'>
        <small>Copyright © Anton Ljunggren - 2021</small>
      </div>
    </div>
  );
};

export default HomePage;
