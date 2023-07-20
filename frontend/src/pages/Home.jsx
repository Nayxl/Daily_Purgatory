import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="body-home">
      <div className="wrapper">
        <div className="notebook">
          <div className="notebook-front">
            <h1 className="notebook-skin">Daily Purgatory</h1>
          </div>
          <div className="notebook-bullet-page dotted-page">
            <Link to="/category">Go</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
