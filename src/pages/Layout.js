import { Outlet, Link } from "react-router-dom";
import "./acercade.css";

const Layout = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">SUPER ITES</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#"><Link to="/" className="linkslinks">Inicio</Link><span class="sr-only"></span></a>
      <a class="nav-item nav-link" href="#"><Link to="/heroes" className="linkslinks">Heroes</Link></a>
      <a class="nav-item nav-link" href="#"><Link to="/Villano" className="linkslinks">Villanos</Link></a>
      <a class="nav-item nav-link" href="#"><Link to="/acercade" className="linkslinks">Acerca de</Link></a>
    </div>
  </div>
</nav>


      <Outlet />
    </>
  )
};

export default Layout;