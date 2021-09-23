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
                    <CardRazasPerros nombreRaza='Border Colllie' imagen={borderCollie} megusta='15422' comentario='50'/>
                    <CardRazasPerros nombreRaza='Pastor Aleman' imagen={pastorAleman} megusta='5051' comentario='15'/>
                    <CardRazasPerros nombreRaza='Golden Retriver' imagen={goldenRetriver} megusta='8432' comentario='35'/>
                    <CardRazasPerros nombreRaza='Cavalier King' imagen={CavalierKing} megusta='20543' comentario='65'/>
                    <CardRazasPerros nombreRaza='Bulldog' imagen={bulldog} megusta='7503' comentario='38'/>
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

function CardRazasPerros(props){
    return(
        <li>
            <div className="contentimg">
                <img src={props.imagen} alt={props.nombreRaza}/>
            </div>
            <span className="CardTitle">{props.nombreRaza}</span>
            <div className="Cardfooter">
                <i className="fab fa-gratipay"> {props.megusta}</i>
                <i className="far fa-comment"> {props.comentario}</i>
                <i className="far fa-share-square"></i>
            </div>
        </li>
    );
}
export default App;
