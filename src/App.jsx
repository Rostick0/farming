import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter></AppRouter>
      </Provider>
    </BrowserRouter>
  );
}

export default App;