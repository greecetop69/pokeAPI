import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { ContextRootStore, store } from './mst/store/RootStore';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ContextRootStore.Provider value={store}>
      <App />
    </ContextRootStore.Provider>
  </BrowserRouter>
);
