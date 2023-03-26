import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { store } from './store'
import './style.css'
import { JournalApp } from './JournalApp '
import { AppTheme } from './theme';
import 'animate.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
        <JournalApp />
      </AppTheme>
    </Provider>
  </React.StrictMode>,
)
