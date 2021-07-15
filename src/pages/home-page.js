import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../components/store';
import { IoArrowDownCircleOutline as HintArrowIcon } from 'react-icons/io5';

const HomePage = () => {
  const { store } = useContext(DataContext);
  const [showScrollHint, setShowScrollHint] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(true);
    }, 3000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className='header'>
        <div className='header-name'>
          <h1>Anton Ljunggren</h1>
          <h4>
            {store.localize.computerEngineer} & {store.localize.itConsultant}
          </h4>
          <div id='scrollHint' className={showScrollHint ? 'hint-arrow active' : 'hint-arrow'}>
            <HintArrowIcon size='50' />
          </div>
        </div>
      </div>
      <div id='about' className='about center-text'>
        <h1>{store.localize.about}</h1>
        <p>{store.localize.aboutText}</p>
      </div>
    </div>
  );
};

export default HomePage;
