
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

import { Contextproviderclass } from './context/Contextproviderclass'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Contextproviderclass>
        {" "}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Contextproviderclass>
    </Provider>
  </StrictMode>
);
