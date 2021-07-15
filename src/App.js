import './App.css';
import ErrorPage from './pages/error-page';
import { useRoutes } from 'hookrouter';
import { Routes } from './components/routes';
import Layout from './components/layout';
import { DataContext, reducer, initialState } from './components/store';
import { useReducer } from 'react';

function App() {
  const [store, dispatch] = useReducer(reducer, initialState);
  const routeResult = useRoutes(Routes);

  return (
    <div className='App'>
      <DataContext.Provider value={{ store, dispatch }}>
        <Layout>{routeResult || <ErrorPage />}</Layout>
      </DataContext.Provider>
    </div>
  );
}

export default App;
