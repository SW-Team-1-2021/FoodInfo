import { Fragment } from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Fragment>
            <header> 
                <nav>
                    <ul>
                        <li>
                            <Link to='/inicio'>Inicio</Link>
                        </li>
                        <li>
                            <Link to='/alimentos'>Alimentos</Link>
                        </li>
                        <li>
                            <Link to='/añadir'>Añadir</Link>
                        </li>
                    </ul>
                </nav>
            </header>  
        </Fragment>
    );
}

export default Header;