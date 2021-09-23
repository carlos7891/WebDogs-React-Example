import logos from 'media/WebDog2.png'

const Header = ()=>{
    return(
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
    )
}

export default Header;