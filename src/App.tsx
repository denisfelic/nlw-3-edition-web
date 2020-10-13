import React from 'react';
import { FiArrowRight} from 'react-icons/fi';

// CSS
import './styles/global.css';
import './styles/pages/landing.css';

// IMAGES
import logoImage from './images/logo.svg'

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImage} alt="Happy Logo" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </div>

        <a className="enter-app" href="" > <FiArrowRight size={26} color="rgba(0,0,0,0.6)" /> </a>
      </div>
    </div>
  );
}

export default App;
