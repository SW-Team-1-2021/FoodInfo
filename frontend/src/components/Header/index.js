import { Fragment } from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Fragment>
            <div>
                <Link to='/inicio'>Inicio</Link>
            </div>
            <div>
                <Link to='/alimentos'>Alimentos</Link>
            </div>
            <div>
                <Link to='/añadir'>Añadir</Link>
            </div>
        </Fragment>
    );
}

export default Header;