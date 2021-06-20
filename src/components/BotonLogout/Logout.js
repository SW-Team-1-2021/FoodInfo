import "./style.css";
import { Link } from "react-router-dom";
import logout50 from "../../images/logout50.png";

const BotonLogout = () => {
  return (
    <Link to="/api/logout">
      <div className="botonlogout">
        <img className="logoutImage" src={logout50} alt="logout" />
        <div className="labellogout">Logout</div>
      </div>
    </Link>
  );
};

export default BotonLogout;
