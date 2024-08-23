import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { Providers } from '../src/Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <GlobalStyles>
        <BrowserRouter>
            <Providers>
                <App />
            </Providers>
        </BrowserRouter>
    </GlobalStyles>
    //  </React.StrictMode>
);
