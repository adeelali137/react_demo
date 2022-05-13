import './App.css';
import Header from './Header'
import Moviecard from './Moviecard';
import Movielist from './Movielist';
import {MovieProvide} from './MovieContext'
import Addmovie from './Addmovie';

function App() {
  return (
    <>
    <MovieProvide>
      <Header/>
      <Addmovie/>
      <Movielist/>
    </MovieProvide>
    </>
  );
}

export default App;
