import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Home() {
  return (
    <Link to="/category">
      <div className="wrapper">
        <div className="notebook">
          <div className="notebook-front">
            <div className="notebook-skin"> Daily Purgatory </div>
          </div>
          <img className="logo-carnet" src={logo} alt="" />
          <div className="notebook-bullet-page dotted-page" />
        </div>
      </div>
    </Link>
  );
}
