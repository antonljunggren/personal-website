import React, { useContext } from 'react';
import { A } from 'hookrouter';
import { DataContext } from '../components/store';

const ErrorPage = ({ error }) => {
  const { store } = useContext(DataContext);

  return (
    <div>
      <h1>{store.localize.error}</h1>
      <A href='/'>{store.localize.go_back}</A>
      {error && <span> {error.message} </span>}
    </div>
  );
};

export default ErrorPage;
