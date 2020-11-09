import React from 'react';
import AppRoutes from './routes/AppRoutes';

import { Provider } from "react-redux";
import { store } from './store/store';

export function KuepaApp() {

  

  return (
    <Provider store={store}>
      <div className="page__home">
        <AppRoutes />
      </div>
    </Provider>
  );
}


