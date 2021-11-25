import MyRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
const App = ()=> {
  return (
    <BrowserRouter>
     <MyRoutes/>
    </BrowserRouter>
  );
}

export default App;
