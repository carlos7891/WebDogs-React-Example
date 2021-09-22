import './styles/App.css';
import borderCollie from './media/border-collie.jpeg'
import pastorAleman from './media/pastor-aleman2.jpg'
import goldenRetriver from './media/golden-retreiver.jpg'
import CavalierKing from './media/Cavalier-king.jpg'
import bulldog from './media/bulldog.jpg'
import logos from './media/WebDog2.png'

function App() {
  return (
    <div classNameName="App">
      <header>
        <ul className="navbar">
            <li>
                <img src={logos} alt="Imgen WebDog" className="logo"/>
            </li>
            <li>
                <button className="button mainButton">Nuevo Post</button>
            </li>
            <li>
                <div className="buscar">
                    <input type="search" placeholder="Buscar una raza"/>
                    <i className="fas fa-search button iconoBusquedad"></i>
                </div>
            </li>
            <li>
                <button className="button secondaryButton">Login</button>
            </li>
            <li>
                <button className="button mainButton">Registro</button>
            </li>
        </ul>
      </header>
    <main>
        <section>
            <h1 className="Section1Title">Razas de perros</h1>
            <ul className="breedCardContainer">
                <li>
                    <div className="contentimg">
                        <img src={borderCollie} alt="Border Collie"/>
                    </div>
                    <span className="CardTitle">Border Collie</span>
                    <div className="Cardfooter">
                        <i className="fab fa-gratipay"> 15422</i>
                        <i className="far fa-comment"> 50</i>
                        <i className="far fa-share-square"></i>
                    </div>
                </li>
                <li>
                    <div className="contentimg">
                        <img src={pastorAleman} alt="Pastor Aleman"/>
                    </div>
                    <span className="CardTitle">Pastor Aleman</span>
                    <div className="Cardfooter">
                        <i className="fab fa-gratipay"> 5051</i>
                        <i className="far fa-comment"> 15</i>
                        <i className="far fa-share-square"></i>
                    </div>
                </li>
                <li>
                    <div className="contentimg">
                        <img src={goldenRetriver} alt="Golder Retriver"/>
                    </div>
                    <span className="CardTitle">Golden Retriver</span>
                    <div className="Cardfooter">
                        <i className="fab fa-gratipay"> 8432</i>
                        <i className="far fa-comment"> 35</i>
                        <i className="far fa-share-square"></i>
                    </div>
                </li>
                <li>
                    <div className="contentimg">
                        <img src={CavalierKing} alt="Cavalier King"/>
                    </div>
                    <span className="CardTitle">Cavalier King</span>
                    <div className="Cardfooter">
                        <i className="fab fa-gratipay"> 20543</i>
                        <i className="far fa-comment"> 65</i>
                        <i className="far fa-share-square"></i>
                    </div>
                </li>
                <li>
                    <div className="contentimg">
                        <img src={bulldog} alt="Bulldog"/>
                    </div>
                    <span className="CardTitle">Bulldog</span>
                    <div className="Cardfooter">
                        <i className="fab fa-gratipay"> 6054</i>
                        <i className="far fa-comment"> 18</i>
                        <i className="far fa-share-square"></i>
                    </div>
                </li>
            </ul>
        </section>
        <section>

        </section>
    </main>
    <footer>

    </footer>
    </div>
  );
}

export default App;
