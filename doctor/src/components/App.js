import '../style/bootstrap.scss'
import Navbar from './Navbar';
import AppRouter from './Router';
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <>
    <header>
      <Navbar></Navbar>
    </header>
    <Router>
      <AppRouter></AppRouter>
    </Router>
    </>
   
  );
}

export default App;
