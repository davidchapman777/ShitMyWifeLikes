import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BeautyProvider } from './context/BeautyContext';
import { DecorProductsProvider } from './context/DecorProductsContext';
import { ElectronicsProvider } from './context/ElectronicsContext';
import { FashionProvider } from './context/FashionContext'
import { FilterProvider } from './context/BeautyFilterContext';
import { DecorFilterProvider } from './context/DecorFilterContext';
import { ElectronicFilterProvider } from './context/ElectronicsFilterContext';
import { FashionFilterProvider } from './context/FashionFilterContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <FashionProvider> 
        <FashionFilterProvider>
        <ElectronicsProvider> 
          <ElectronicFilterProvider>
          <DecorProductsProvider>
            <DecorFilterProvider>
            <BeautyProvider>
            <FilterProvider>
             <App />
            </FilterProvider>
            </BeautyProvider>
            </DecorFilterProvider>
           </DecorProductsProvider>
          </ElectronicFilterProvider>
          </ElectronicsProvider>
        </FashionFilterProvider>
        </FashionProvider>
  </React.StrictMode>
);


