const Principal = (props) => {
    return (
        <div className="card card-principal">
                <img className="card-img-top" src={props.datos.imagen}></img>
                <div className="card-body">
                    <h5 className="card-title">{props.datos.pelicula}</h5>
                    <p className="card-text">{props.datos.descripcion}</p>
                </div>
        </div>
        )
    }
    
export default Principal;