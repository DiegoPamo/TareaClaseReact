
const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light">

      <a className="navbar-brand" href="#" style={{color:"red"}}><b>NetFlix</b></a>

      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#"style={{color:"white"}}>Publicaciones</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"style={{color:"white"}}>Mi cuenta</a>
          </li>
        </ul>
        <span className="navbar-text">
          <input className="form-control mr-sm-2" type="search" placeholder="Buscar..."></input>
        </span>
      </div>
    </nav>
    )
  }
  
export default Navbar;