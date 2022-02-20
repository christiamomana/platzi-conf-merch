import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
  Home,
  Checkout,
  Success,
  NotFound,
  Payment,
  Information,
} from '../containers';
import AppContext from '../context/AppContext';
import Layout from '../components/commons/Layout';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  
  return <AppContext.Provider value={initialState}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/checkout/information" element={<Information />} />
          <Route exact path="/checkout/payment" element={<Payment />} />
          <Route exact path="/checkout/success" element={<Success />} />
          <Route element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </AppContext.Provider>;
};

export default App;
