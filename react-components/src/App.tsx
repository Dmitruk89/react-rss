import './App.css';
import { Header } from './components/Header/Header.component';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import NotFound from './pages/NotFound';
import { About } from './pages/About';
import { FormPage } from './pages/Form/FormPage';
import { store } from './store';
import { Provider } from 'react-redux';

export function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="form" element={<FormPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export function WrappedApp() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}
