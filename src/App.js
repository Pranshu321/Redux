
import './App.css';
import Login from './Components/Login';
import LogOut from './Components/LogOut';
import { selectUser } from './features/userslice';
import {useSelector} from 'react-redux';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      {user ? <LogOut/> : <Login/>}
    </div>
  );
}

export default App;
