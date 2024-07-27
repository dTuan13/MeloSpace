import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import Providers from './Context'

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(Providers)
root.render(
   
        <React.StrictMode>
                <GlobalStyles>
                <Providers>
                    <BrowserRouter>
                            <App />
                    </BrowserRouter>
                </Providers>
                
                </GlobalStyles>
        </React.StrictMode>

);

