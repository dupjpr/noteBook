import { Provider } from "react-redux";
import store from './redux/store/store';
import Home from './components/home/Home'
import './utilities/Normalize.scss';
import './utilities/global.style.scss';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
