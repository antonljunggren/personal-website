import React from 'react';
import NavMenu from './nav-menu';

const Layout = ({ children }) => {
  const page = {
    '/': 'home',
  };

  return (
    <React.Fragment>
      <NavMenu mobile={false} page={page[window.location.pathname]} />
      <div className='content'>{children}</div>
      <NavMenu mobile={true} />
    </React.Fragment>
  );
};

export default Layout;
