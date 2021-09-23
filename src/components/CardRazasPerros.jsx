import {Link} from "react-router-dom";

function CardRazasPerros(props){
    return(
        <li>
            <Link to={props.linkstopage}>
                <div className="contentimg">
                    <img src={props.imagen} alt={props.nombreRaza}/>
                </div>
            </Link>
            <span className="CardTitle">{props.nombreRaza}</span>
            <div className="Cardfooter">
                <i className="fab fa-gratipay"> {props.megusta}</i>
                <i className="far fa-comment"> {props.comentario}</i>
                <i className="far fa-share-square"></i>
            </div>
        </li>
    );
}
export default CardRazasPerros