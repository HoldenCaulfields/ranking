
import './App.css';
import Member from './member';

function App() {

  const arr = [
    'https://m.media-amazon.com/images/M/MV5BMTJmNGJmYTgtYjAxNy00YmMzLTk2YTYtMGIzMmUwNDMyMTY1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg',
    'https://i-giaitri.vnecdn.net/2022/02/21/drivemycartop-1645410255-16454-4256-8779-1645414472.jpg',
    'https://www.elle.vn/wp-content/uploads/2022/09/04/493971/NOPE-poster-Loyola-Phoenix.jpg',
    'https://m.media-amazon.com/images/M/MV5BZTllMjI0ZGYtM2FmZC00ZmY4LTlkNTYtZThlOWQ1OGQyZTA3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg'
  ]

  return (
    <div className="App">
      <h2>Ranking ... members:</h2>
      
      <ul>
      {arr.map(
        (item, index) => <li key={index}> <Member img={item} idimg={index} /> </li>
      )}
      </ul>
      
    </div>
  );
}

export default App;
