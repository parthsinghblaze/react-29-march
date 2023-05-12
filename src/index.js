import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import CocktailListing from './component/CocktailListing';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<CocktailListing />);
